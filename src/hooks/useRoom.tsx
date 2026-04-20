import { useEffect, useState } from "react";
import { getRoom, editRoom } from "../services/room";
import { IRoom } from "../interfaces/room";
import { useNavigate, useParams } from "react-router-dom";
import { createRoomMap, ICreateRoomParams } from "../mappers/createRoom";
import { strings, requiredFieldString, dataString } from "../utils/strings";
import { language } from "../utils/settings";

export function useRoom() {
  const { id } = useParams();

  const [room, setRoom] = useState<IRoom>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const [activeButton, setActiveButton] = useState(strings[language][dataString]);
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [maxQuantity, setMaxQuantity] = useState<number | null>(null);
  const [maxQuantityError, setMaxQuantityError] = useState<string>("");

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
    if(room){
      setName(room.name);
      setPassword(room.password ?? "");
      setMaxQuantity(room.maxQuantity);
    }
  }, [room])

  const handleClose = () => {
    if(room){
      setName(room.name);
      setPassword(room.password ?? "");
      setMaxQuantity(room.maxQuantity);
    }
    setNameError("");
    setMaxQuantityError("");
  }

  const validations = [
    {
      "condition": () => name === "", 
      "error": () => setNameError(strings[language][requiredFieldString])
    },
    {
      "condition": () => maxQuantity === null,
      "error": () => setMaxQuantityError(strings[language][requiredFieldString])
    },
  ];

  const handleEdit = (newData: ICreateRoomParams) => {
    setNameError("");
    setMaxQuantityError("");
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
    name,
    setName,
    nameError,
    setNameError,
    password,
    setPassword,
    maxQuantity,
    setMaxQuantity,
    maxQuantityError,
    setMaxQuantityError,
    activeButton, 
    setActiveButton,
    handleClose,
    handleEdit,
    validations,
  }
}
