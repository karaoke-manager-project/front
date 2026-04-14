import { Navbar } from "../../components/Navbar";
import { strings } from "../../utils/strings";
import { language } from "../../utils/settings";
import { Tooltip } from "@mui/material";

export function RoomsPage() {
  return (
    <div className="flex flex-col p-14 min-h-screen"> 
      <Navbar/>
      <div className="flex items-center justify-center text-[1cm] h-20">{strings[language]["rooms-title"]}</div> 
      <div className="flex flex-grow justify-start bg-gray-50 shadow-md mx-20 mb-5 p-20">
        {}
        <Tooltip title={strings[language]["add-room"]}>
        <button className="border-dashed border-5 w-[15rem] h-[15rem] border-gray-500 text-[6rem] text-gray-500 rounded-lg">+</button>
        </Tooltip>
      </div>
    </div>
  )
}
