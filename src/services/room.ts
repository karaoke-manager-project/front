import { IRoom, ICreateRoom } from "../interfaces/room";

export async function getRoom(id: string): Promise<IRoom> {
  if(localStorage.getItem("rooms") === null) throw new Error();
  const room = JSON.parse(localStorage.getItem("rooms")).find(r => r.code === id);
  return room;
} 

export async function editRoom(id: string, data: ICreateRoom): Promise<IRoom> {
  if(localStorage.getItem("rooms") === null) throw new Error();
  const rooms = JSON.parse(localStorage.getItem("rooms"));
  const room = rooms.find(r => r.code === id)
  const editedRoom = {...room, ...data};
  const newRooms = rooms.map((room) => room.code === id ? editedRoom : room);
  localStorage.setItem("rooms", JSON.stringify(newRooms));
  return editedRoom;
} 
