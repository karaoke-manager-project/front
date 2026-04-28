import { ApiRoom, IRoom } from "../interfaces/room";

export function apiRoomToIRoom(apiRoom: ApiRoom): IRoom {
  return {
    name: apiRoom.name,
    code: apiRoom.code,
    password: apiRoom.password,
    maxQuantity: apiRoom.MAX_ROOM_SIZE_FREE_USER,
    quantity: 0,
    users: apiRoom.users,
  };
}
