import Modal from '@mui/material/Modal';
import { PasswordInput } from "../../components/PasswordInput/index";
import { Input } from "../../components/Input/index";
import { NumberInput } from "../../components/NumberInput/index";
import { useState } from "react";
import { Button } from "../../components/Button/index";
import { 
  strings,
  createRoomString,
  nameString, 
  namePlaceholderString,
  passwordString,
  maxQuantityString,
  maxQuantityPlaceholderString,
  cancelString,
  createString,
  requiredFieldString 
} from "../../utils/strings";
import { language } from "../../utils/settings";

type Props = {
  open: boolean;
  onClose: () => void
}

export function CreateRoomModal({
  open,
  onClose,
}: Props) {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [maxQuantity, setMaxQuantity] = useState<number | null>(null);
  const [maxQuantityError, setMaxQuantityError] = useState<string>("");

  const closeModal = () => {
    setName("");
    setPassword("");
    setMaxQuantity(null);
    setNameError("");
    setMaxQuantityError("");
    onClose();
  }

  const handleCreateRoom = () => {
    if(name === "") setNameError(strings[language][requiredFieldString]);
    if(maxQuantity === null) setMaxQuantityError(strings[language][requiredFieldString]);
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border-2 border-gray-100 p-2 max-h-[90vh]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="p-2 text-xl">{strings[language][createRoomString]}</div>
          <div className="bg-gray-400 w-full h-[2px]"></div>
          <div className="p-2">
            <Input
              label={strings[language][nameString]}
              value={name}
              onChange={setName}
              placeholder={strings[language][namePlaceholderString]}
              required
              maxLength={50}
              error={nameError}
            />
            <PasswordInput 
              label={strings[language][passwordString]} 
              value={password}
              onChange={setPassword}
              maxLength={30}
            />
            <NumberInput
              label={strings[language][maxQuantityString]}
              value={maxQuantity === null ? "" : String(maxQuantity)}
              onChange={setMaxQuantity}
              placeholder={strings[language][maxQuantityPlaceholderString]}
              required
              min={1}
              max={1000}
              error={maxQuantityError}
            />
          </div>
          <div className="bg-gray-400 w-full h-[2px]"></div>
          <div className="flex justify-between w-full mt-2">
            <Button 
              label={strings[language][cancelString]} 
              onClick={closeModal}
            />
            <Button 
              label={strings[language][createString]}
              onClick={handleCreateRoom}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
