import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Tooltip } from "@mui/material";
import { strings, goToRoomString } from "../../utils/strings";
import { language } from "../../utils/settings";
import { IRoom } from '../../interfaces/room';

type Props = {
  data: IRoom;
};

export function RoomCard({ data }: Props) {
  return (
    <div>
      <Tooltip title={`${strings[language][goToRoomString]} ${data.name}`}>
      <button className="flex flex-col w-[15rem] h-[15rem] bg-gray-400 rounded-lg mx-5 justify-between">
        <div className="flex items-center justify-center p-2">
          {data.name}
        </div>
        <div className="flex-1 bg-white mx-4 rounded border border-gray-300 shadow-inner">
        </div>
        <div className="flex items-center justify-between p-2">
          <div className="flex">
            <PersonIcon/>
            <div className="ml-1">
              {data.quantity} / {data.max_quantity}
            </div>
          </div>
          {data.password ? <LockOutlinedIcon/> : <LockOpenIcon/>}
        </div>
      </button>
      </Tooltip>
    </div>
  );
}
