import { useEffect, useState } from "react";
import { getRoom, editRoom } from "../services/room";
import { IRoom } from "../interfaces/room";
import { useNavigate, useParams } from "react-router-dom";
import { createRoomMap, ICreateRoomParams } from "../mappers/createRoom";
import { strings, dataString } from "../utils/strings";
import { language, url } from "../utils/settings";
import { roomRoute } from "../utils/routes";
import * as QRCode from 'qrcode';

export function useRoom() {
  const { id } = useParams();

  const [room, setRoom] = useState<IRoom>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const [activeButton, setActiveButton] = useState<string>(strings[language][dataString]);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    getRoom(id ?? "")
      .then((data) => {
        setRoom(data)
      })
      .catch((error) => {
        setError(error); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  useEffect(() => {
    if(!room) return;
    QRCode.toDataURL(`${url}${roomRoute}/${room.code}`, { width: 150, margin: 1 })
    .then((url: string) => setQrCodeUrl(url))
  }, [room])

  const handleEdit = (newData: ICreateRoomParams) => {
    setIsLoading(true);
    editRoom(id ?? "", createRoomMap(newData))
      .then((data) => {
        setRoom(data)
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    room,
    navigator,
    activeButton, 
    setActiveButton,
    handleEdit,
    qrCodeUrl,
  }
}
