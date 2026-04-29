import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRoomInfo, joinRoom } from "../services/join";
import { language } from "../utils/settings";
import { strings, invalidPasswordString } from "../utils/strings";
import { roomRoute } from "../utils/routes";
import { ApiRoomInfo } from "../interfaces/room";

export function useJoinId() {
  const { id } = useParams();

  const [roomInfo, setRoomInfo] = useState<ApiRoomInfo>();
  const [searchParams, _] = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validateAccess, setValidateAccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const navigator = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getRoomInfo(id ?? "")
      .then((data) => {
        setRoomInfo(data);
        setValidateAccess(!data.hasPassword);
      })
      .catch((error) => {
        setError(error); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  const handlePassword = () => {
    setIsLoading(true);
    setValidateAccess(true);
    setIsLoading(false);
  }

  const handleEnter = () => {
    setIsLoading(true);
    joinRoom(id || "", password, name)
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
    roomInfo,
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
