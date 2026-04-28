import { IUser } from "../interfaces/user";
import api from "../utils/api";
import { joinRoomEndpoint } from "../utils/endpoints";
import { getRoom } from "./room";

export async function joinRoom(code: string): Promise<boolean> {
  const room = await getRoom(code);
  return room !== null;
}

export async function joinRoomAndCreateUser(code: string, password: string, name: string): Promise<IUser> {
  const res = await api.post(joinRoomEndpoint(code), { password });
  return {
    id: res.data,
    name,
  }
}
