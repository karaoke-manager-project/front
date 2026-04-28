import { useRoom } from "../../../hooks/useRoom";
import { HostRoomPage } from "./host/page";
import { UserRoomPage } from "./user/page";

export function RoomPage() { 

  const { isHost } = useRoom();

  return isHost ? <HostRoomPage/> : <UserRoomPage/>
}
