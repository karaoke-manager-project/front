import { useState } from "react";
import { login } from "../services/auth";
import { roomsRoute } from "../utils/routes";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function useLogin() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigator = useNavigate();

  const handleLogin = () => {
    setIsLoading(true); 
    if(email === "") {
      setError("Digite um email");
      setIsLoading(false); 
      return;
    }
    login(email)
      .then((res) => {
        if(res){
          Cookies.set("id", res.data.id)
          navigator(`${roomsRoute}`)
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    email,
    setEmail,
    isLoading,
    handleLogin,
    error,
    isLoading,
  }
}
