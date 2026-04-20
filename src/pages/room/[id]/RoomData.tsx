import { Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { RoomForm } from "../../../components/RoomForm";
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../../components/Input";
import { ICreateRoom, IRoom } from "../../../interfaces/room";
import { strings, roomDataString, roomCodeString, editString } from "../../../utils/strings";
import { language } from "../../../utils/settings";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  nameError: string;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  maxQuantity: number;
  setMaxQuantity: Dispatch<SetStateAction<number | null>>;
  maxQuantityError: string;
  handleClose: () => void;
  handleEdit: (newData: ICreateRoom) => void;
  validations: {"condition": () => boolean, "error": () => void}[],
  room: IRoom,
}

export function RoomData({
  name,
  setName,
  nameError,
  password,
  setPassword,
  maxQuantity,
  setMaxQuantity,
  maxQuantityError,
  handleClose,
  handleEdit,
  validations,
  room,
}: Props) {

  const [onEdit, setOnEdit] = useState<boolean>(false);

  const stopEdit = () => {
    handleClose();
    setOnEdit(false);
  }

  const successEdit = () => {
    handleEdit({ name, password, maxQuantity });
    setOnEdit(false);
  }

  return (
    <>
      <div className="flex items-center pt-2 justify-end">
        <button onClick={() => setOnEdit(true)}>
          <Tooltip title={"Editar"}>
            <EditIcon/>
          </Tooltip>
        </button>
      </div>
      <RoomForm
        title={strings[language][roomDataString]}
        name={name}
        setName={setName}
        nameError={nameError}
        nameDisabled={!onEdit}
        password={password}
        setPassword={setPassword}
        passwordDisabled={!onEdit}
        maxQuantity={maxQuantity}
        setMaxQuantity={setMaxQuantity}
        maxQuantityDisabled={!onEdit}
        maxQuantityError={maxQuantityError}
        handleClose={stopEdit}
        handleSuccess={successEdit}
        validations={validations}
        successButtonText={strings[language][editString]}
        buttonDisabled={!onEdit}
      >
        <Input
          label={strings[language][roomCodeString]}
          value={room.code}
          disabled={true}
          required={true}
        />
      </RoomForm>
    </>
  );
}
