import Modal from '@mui/material/Modal';
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { useState } from "react";
import { youtubeLinkRegex } from "../../../../utils/regex";
import { useParams } from 'react-router-dom';
import { addSong } from '../../../../services/song';

type Props = {
  open: boolean;
  onClose: () => void;
}

export function AddRoomModal({
  open,
  onClose,
}: Props) {

  const { id } = useParams();
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [urlError, setUrlError] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const validations = [
    {
      condition: () => name === "",
      error: () => setNameError("Nome não pode ser vazio"),
    },
    {
      condition: () => url && !(youtubeLinkRegex.test(url)),
      error: () => setUrlError("O link deve ser um link válido do youtube"),
    }
  ]

  const validate = () => {
    let hasError = false;
    setNameError("");
    setUrlError("");
    for(const validation of validations) {
      if(validation.condition()) {
        hasError = true;
        validation.error();
      }
    }
    return hasError;
  }

  const handleAdd = () => {
    setButtonDisabled(true);
    const hasError = validate();
    if(!hasError) {
      addSong(id ?? "", name, url)
      .then((data) => {
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonDisabled(false);
      })
    }
  }

  const handleClose = () => {
    setName("");
    setUrl("");
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border-2 border-gray-100 p-2 max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="p-2 text-xl">{"Adicionar Música"}</div>
          <div className="bg-gray-400 w-full h-[2px]"></div>
          <div className="p-2">
            <Input
              label={"Nome da música"}
              value={name}
              onChange={setName}
              required={true}
              maxLength={50}
              error={nameError}
            />
            <Input
              label={"Link do youtube"} 
              value={url}
              onChange={setUrl}
              maxLength={30}
              error={urlError}
            />
          </div>
          <div className="bg-gray-400 w-full h-[2px]"></div>
          <div className="flex justify-between w-full mt-2">
            <Button
              label={"Cancelar"} 
              onClick={handleClose}
              disabled={buttonDisabled}
            />
            <Button 
              label={"Adicionar"}
              onClick={handleAdd}
              disabled={buttonDisabled}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
