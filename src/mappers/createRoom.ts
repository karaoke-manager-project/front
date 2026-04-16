import { ICreateRoom } from "../interfaces/room"
import { strings, requiredFieldString } from "../utils/strings";
import { language } from "../utils/settings";

export type ICreateRoomParams = {
  name: string;
  password: string;
  maxQuantity: number | null;
}

export function createRoomMap({ name, password, maxQuantity }: ICreateRoomParams): ICreateRoom {
  if(maxQuantity === null) throw new Error(strings[language][requiredFieldString]);
  return {
    name,
    password,
    maxQuantity
  }
}
