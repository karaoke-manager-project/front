import { strings, invalidRoomCodeString } from "../utils/strings";
import { language } from "../utils/settings";
import { IUser } from "../interfaces/user";

export async function joinRoom(code: string): Promise<boolean> {
  if(localStorage.getItem("rooms") === null) throw new Error();
  const room = JSON.parse(localStorage.getItem("rooms")).find(r => r.code === code);
  if(!room) throw new Error(strings[language][invalidRoomCodeString]);
  return true;
}

export async function joinRoomAndCreateUser(code: string, password: string, name: string): Promise<IUser> {
  if(localStorage.getItem("rooms") === null) throw new Error();
  const room = JSON.parse(localStorage.getItem("rooms")).find(r => r.code === code);
  if(!room) throw new Error(strings[language][invalidRoomCodeString]);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const newUser = {"name": name, "roomCode": code};
  localStorage.setItem("users", JSON.stringify([...users, newUser]));
  return newUser;
}
