import { strings, invalidRoomCodeString } from "../utils/strings";
import { language } from "../utils/settings";

export async function joinRoom(code: string): Promise<boolean> {
  if(localStorage.getItem("rooms") === null) throw new Error();
  const room = JSON.parse(localStorage.getItem("rooms")).find(r => r.code === code);
  if(!room) throw new Error(strings[language][invalidRoomCodeString]);
  return true;
}
