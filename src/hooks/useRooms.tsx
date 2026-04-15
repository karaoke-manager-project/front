import { useEffect, useState } from "react";
import { getRooms } from "../services/rooms"
import { IRoom } from "../interfaces/room";

export function useRooms() {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return {
    rooms,
    open,
    handleOpen,
    handleClose,
  }
}
