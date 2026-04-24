import { IRoom, ICreateRoom } from "../interfaces/room";

export async function getRooms(): Promise<IRoom[]> {
  if(localStorage.getItem("rooms") === null) localStorage.setItem("rooms", "[]");
  const rooms = JSON.parse(localStorage.getItem("rooms"));
  const users = JSON.parse(localStorage.getItem("users"));
  const usersByRoom = new Map(users.map(user => [user.roomCode, []]));
  for(const user of users) {
    const list = usersByRoom.get(user.roomCode);
    usersByRoom.set(user.roomCode, [...list, user]);
  }
  return rooms.map((room) => ({
    ...room, quantity: usersByRoom.get(room.code).length, users: usersByRoom.get(room.code)
  }));
} 

export async function createRoom(data: ICreateRoom): Promise<IRoom> {
  const newRoom = {...data, "code": data.name.slice(0, 4), "quantity": 0, users: []};
  if(localStorage.getItem("rooms") === null) localStorage.setItem("rooms", "[]");
  localStorage.setItem("rooms", JSON.stringify([...JSON.parse(localStorage.getItem("rooms")), newRoom]))
  return newRoom;
}
