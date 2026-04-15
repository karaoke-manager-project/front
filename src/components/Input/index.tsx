import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  label: string;
  required?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
  value: string;
  maxLength: number;
  error: string;
};

export function Input({
  label,
  required = false,
  onChange,
  placeholder,
  value,
  maxLength = Number.MAX_SAFE_INTEGER,
  validations,
  error,
}: Props) {

  const handleChange = (newValue: string) => {
    if(value.length <= maxLength) onChange(newValue); 
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
