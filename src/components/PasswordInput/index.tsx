import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  label: string;
  required?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  maxLength: number;
}

export function PasswordInput({ 
  label, 
  required = false,
  onChange,
  value,
  maxLength = Number.MAX_SAFE_INTEGER,
}: Props) {
  const [visibility, setVisibility] = useState<boolean>(false);
  const toggleVisibility = () => setVisibility((prev) => !prev);

  const handleChange = (newValue: string) => {
    if(newValue.length <= maxLength) onChange(newValue); 
  };

  return (
    <>
      <div>{label}{required ? "*" : " (Opcional)"}</div>
      <div className="relative flex items-center w-full">
        <input 
          className="border-2 border-gray-300 rounded-lg p-2 w-full" 
          type={visibility ? "text" : "password"}
          value={value}
          required
          onChange={(e) => handleChange(e.target.value)}
        >
        </input>
          <button className="absolute right-3 flex items-center text-gray-500 hover:text-gray-700" onClick={toggleVisibility}>
          { visibility ? <VisibilityIcon/> : <VisibilityOffOutlinedIcon/>}
        </button>
      </div>
      <div>{"Teste"}</div>
    </>
  );
}
