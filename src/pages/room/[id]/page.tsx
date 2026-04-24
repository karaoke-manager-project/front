import { useRoom } from "../../../hooks/useRoom";
import { HostRoomPage } from "./host/page";

export function RoomPage() { 

  const { isHost } = useRoom();

  return isHost ? <HostRoomPage/> : <div></div>
}
