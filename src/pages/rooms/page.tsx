import { Navbar } from "../../components/Navbar";
import { strings, roomsTitleString, addRoomString } from "../../utils/strings";
import { language } from "../../utils/settings";
import { Tooltip } from "@mui/material";
import { useRooms } from "../../hooks/useRooms";
import { RoomCard } from "./card";
import { CreateRoomModal } from "./createRoomModal";

export function RoomsPage() { 
  const { rooms, open, handleOpen, handleClose } = useRooms();

  return (
    <div className="flex flex-col p-14 min-h-screen"> 
      <Navbar/>
      <div className="flex items-center justify-center text-[1cm] h-20">{strings[language][roomsTitleString]}</div> 
      <div className="flex flex-grow justify-start bg-gray-50 shadow-md mx-20 mb-5 p-20">
        {rooms.map((data) => <RoomCard data={data}/>)}
        <Tooltip title={strings[language][addRoomString]}>
        <button onClick={handleOpen} className="border-dashed border-5 w-[15rem] h-[15rem] border-gray-500 text-[6rem] text-gray-500 rounded-lg mx-5">+</button>
        </Tooltip>
        <CreateRoomModal open={open} onClose={handleClose}/>
      </div>
    </div>
  );
}
