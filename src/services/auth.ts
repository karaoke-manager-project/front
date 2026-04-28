import { managerEndpoint } from "../utils/endpoints";
import api from "../utils/api";
import Cookies from "js-cookie";

export async function verifyIsHost(): Promise<boolean> {
  return Cookies.get("id") !== undefined;
}

export async function login(email: string): Promise<null> {
  const res = await api.post(managerEndpoint, { email });
  return res;
}
