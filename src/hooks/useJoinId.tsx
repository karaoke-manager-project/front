import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRoom } from "../services/room";
import { joinRoomAndCreateUser } from "../services/join";
import { language } from "../utils/settings";
import { strings, invalidPasswordString } from "../utils/strings";
import { roomRoute } from "../utils/routes";

export function useJoinId() {
  const { id } = useParams();

  const [room, setRoom] = useState<IRoom>(null);
  const [searchParams, _] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validateAccess, setValidateAccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const navigator = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getRoom(id ?? "")
      .then((data) => {
        setRoom(data);
        if(data?.password === "") (true);
      })
      .catch((error) => {
        setError(error); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  const verifyPassword = () => {
    if(password !== room.password){
      setError(strings[language][invalidPasswordString]);
      return;
    } 
    setValidateAccess(true);
  }

  const handlePassword = () => {
    setIsLoading(true);
    verifyPassword();
    setIsLoading(false);
  }

  const handleEnter = () => {
    setIsLoading(true);
    joinRoomAndCreateUser(id, password, name)
      .then(() => {
        navigator(`${roomRoute}/${id}`);
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
    password,
    setPassword,
    validateAccess,
    isLoading,
    name,
    setName,
    handlePassword,
    handleEnter,
    error,
  }
}
