import { IRoom, ICreateRoom } from "../interfaces/room";
import api from "../utils/api";
import { roomEndpoint } from "../utils/endpoints";
import { getRooms } from "./rooms";
import { apiRoomToIRoom } from "../mappers/room";

export async function getRoom(id: string): Promise<IRoom> {
  const rooms = await getRooms();
  if(!rooms) throw new Error();
  return rooms.find((room) => room.code === id);
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

export async function getRoomAndSongs(id: string): Promise<{"room": IRoom, "songs": ISong[]}> {
  const res = await api.get(roomEndpoint);
  const room = apiRoomToIRoom(Object.values(res.data).find(r => r.code === id));
  const songs = [
    {"name": "teste", "artist": "A", "link": "b"}, 
    {"name": "b"},
  ]
  return {
    room,
    songs,
  };
}
