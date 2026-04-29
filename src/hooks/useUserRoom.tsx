import { useEffect, useState } from "react";
import { getRoomAndSongsWithUser } from "../services/room";
import { IRoom } from "../interfaces/room";
import { useNavigate, useParams } from "react-router-dom";

export function useUserRoom() {
  const { id } = useParams();

  const [room, setRoom] = useState<IRoom>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getRoomAndSongsWithUser(id ?? "")
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

  const goToProfilePage = () => {
    navigator("/user")
  }

  return {
    room,
    navigator,
    goToProfilePage,
    isLoading,
  }
}
