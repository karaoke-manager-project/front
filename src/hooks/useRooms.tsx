import { useEffect, useState } from "react";
import { createRoom, getRooms } from "../services/rooms"
import { ICreateRoom, IRoom } from "../interfaces/room";
import { createRoomMap, ICreateRoomParams } from "../mappers/createRoom";
import { useNavigate } from "react-router-dom";

export function useRooms() {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState<boolean>(false);
  const navigator = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getRooms()
      .then((data) => {
        setRooms(data)
      })
      .catch((error) => {
        setError(error); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateRoom = (data: ICreateRoomParams) => {
    const mappedData: ICreateRoom = createRoomMap(data);
    createRoom(mappedData)
      .then((room) => {
        setRooms((prev) => [...prev, room]);
      })
      .catch((error) => {
        setError(error);
      })
  };

  return {
    rooms,
    open,
    handleOpen,
    handleClose,
    handleCreateRoom,
    navigator,
  }
}
