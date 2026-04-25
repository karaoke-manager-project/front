import { IRoom, ICreateRoom } from "../interfaces/room";
import api from "../utils/api";
import Cookies from "js-cookie";
import { roomEndpoint } from "../utils/endpoints";
import { apiRoomToIRoom } from "../mappers/room";

export async function getRooms(): Promise<IRoom[]> {
  const res = await api.get(roomEndpoint);
  const rooms = Object.values(res.data).map((apiRoom) => apiRoomToIRoom(apiRoom));
  return rooms;
} 

export async function createRoom(data: ICreateRoom): Promise<IRoom> {
  const id = Cookies.get("id");
  const res = await api.post(roomEndpoint, { "manager_id": id, "name": data.name, "password": data.password});
  const rooms = localStorage.getItem("rooms");
  const newRoom = apiRoomToIRoom(res.data);
  if(!rooms) {
    localStorage.setItem("rooms", JSON.stringify([newRoom]));
    return newRoom;
  }
  localStorage.setItem("rooms", JSON.stringify([...JSON.parse(rooms), newRoom]));
  return newRoom;
}
