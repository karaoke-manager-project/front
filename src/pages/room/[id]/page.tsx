import { Navbar } from "../../../components/Navbar";
import { useRoom } from "../../../hooks/useRoom";
import { ButtonGroup } from "../../../components/ButtonGroup/index";
import { useState, useEffect } from "react";
import { RoomForm } from '../../../components/RoomForm/index';
import { Input } from "../../../components/Input/index";
import { Tooltip } from "@mui/material";
import { strings, requiredFieldString, queueString, participantsString, dataString } from "../../../utils/strings";
import { language } from "../../../utils/settings";
import { RoomData } from "./RoomData";

export function RoomPage() { 

  const { 
    room,
    name,
    setName,
    nameError,
    setNameError,
    password,
    setPassword,
    maxQuantity,
    setMaxQuantity,
    maxQuantityError,
    setMaxQuantityError,
    activeButton, 
    setActiveButton,
    handleClose,
    handleEdit,
    validations,
  } = useRoom();

  return (
    room ? 
    <div className="flex flex-col p-14 min-h-screen"> 
      <Navbar/>
      <div className="flex items-center justify-center text-[1cm] h-20">{room.name}</div> 
      <ButtonGroup 
        buttonsText={[strings[language][queueString], strings[language][participantsString], strings[language][dataString]]}
        activeButtonText={activeButton}
        onChange={(button) => setActiveButton(button)}
      />
      <div className="bg-gray-50 shadow-md mx-20 mb-5 px-20 overflow-y-auto h-180">
        {activeButton === strings[language][queueString] && <div></div>}
        {activeButton === strings[language][participantsString] && <div></div>}
        {activeButton === strings[language][dataString] && 
          <RoomData
            room={room}
            name={name}
            setName={setName}
            nameError={nameError}
            setNameError={setNameError}
            password={password}
            setPassword={setPassword}
            maxQuantity={maxQuantity}
            setMaxQuantity={setMaxQuantity}
            maxQuantityError={maxQuantityError}
            setMaxQuantityError={setMaxQuantityError}
            handleClose={handleClose}
            handleEdit={handleEdit}
            validations={validations}
          />
        }
      </div>
    </div>
    :
    <div className="flex flex-col p-14 min-h-screen"> 
      <Navbar/>Not Found
    </div>
  );
}
