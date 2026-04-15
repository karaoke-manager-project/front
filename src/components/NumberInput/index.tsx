import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  required?: boolean;
  onChange: Dispatch<SetStateAction<number | null>>;
  placeholder: string;
  value: string;
  min: number;
  max: number;
  error: string;
};

export function NumberInput({
  label,
  required = false,
  onChange,
  placeholder,
  value,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  error,
}: Props) {

  const handleChange = (newValue: string) => {
    if(newValue === ""){
      onChange(null);
      return;
    }
    if(!(/^[0-9]+$/.test(newValue))) return;
    if(parseInt(newValue) < min) return;
    if(parseInt(newValue) > max) return;
    onChange(parseInt(newValue));
  };

  return (
    <>
      <div className={`${error === "" ? "" : "text-red-500"}`}>{label} {required ? " *" : " (Opcional)"}</div>
      <input 
        className={`border-2 border-gray-300 rounded-lg p-2 w-full ${error === "" ? "" : "border-red-500"}`}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      >
      </input>
      <div className="min-h-[25px] max-h-[25px] text-red-500">{error}</div>
    </>
  );
}
