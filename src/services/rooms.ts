import { IRoom, ICreateRoom } from "../interfaces/room";

export async function getRooms(): Promise<IRoom[]> {
  if(localStorage.getItem("rooms") === null) localStorage.setItem("rooms", "[]");
  const rooms = JSON.parse(localStorage.getItem("rooms"));
  return rooms;
} 

export async function createRoom(data: ICreateRoom): Promise<IRoom> {
  const newRoom = {...data, "code": data.name.slice(0, 4), "quantity": 0};
  if(localStorage.getItem("rooms") === null) localStorage.setItem("rooms", "[]");
  localStorage.setItem("rooms", JSON.stringify([...JSON.parse(localStorage.getItem("rooms")), newRoom]))
  return newRoom;
}
