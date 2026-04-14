import Avatar from '@mui/material/Avatar';
import { strings } from "../../utils/strings";
import { language } from "../../utils/settings";

export function Navbar() {

  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6 bg-gray-400">
        <div className="font-mono font-bold text-[0.8cm]">KARA</div>
        <div className="flex max-md:hidden items-center"> 
          <Avatar>{strings[language]["default-avatar"]}</Avatar>
        </div>
      </div>
    </div>
  );
} 
