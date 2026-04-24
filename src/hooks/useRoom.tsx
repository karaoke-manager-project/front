import { useState, useEffect } from "react"; 
import { verifyIsHost } from "../services/auth";

export function useRoom() {
  const [isHost, setIsHost] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    verifyIsHost()
      .then((data) => {
        setIsHost(data)
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  return {
    isHost,
  }
}
