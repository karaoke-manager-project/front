import { TobBar } from "../../../components/TopBar/index";
import { PasswordInput } from "../../../components/PasswordInput/index";
import { Input } from "../../../components/Input/index";
import { Button } from "../../../components/Button/index";
import { useJoinId } from "../../../hooks/useJoinId";
import { strings, enterString, writeRoomCodeString, roomNotFoundString, writePasswordString, writeNameString } from "../../../utils/strings";
import { language } from "../../../utils/settings";

export function JoinIdPage() {

  const { 
    room, 
    password, 
    setPassword, 
    validateAccess, 
    isLoading, 
    name, 
    setName,
    handlePassword,
    handleEnter, 
    error,
  } = useJoinId();

  if(!room) {
    return (
      <div className="flex flex-col p-14 min-h-screen"> 
        <TobBar/>
          <div className="flex flex-col items-center h-screen justify-center">
            {strings[language][roomNotFoundString]}
          </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-14 min-h-screen"> 
      <TobBar/>
      {!validateAccess ? 
        <div className="flex flex-col items-center h-screen justify-center">
          <div className="flex flex-col w-100">
            <PasswordInput
              label={strings[language][writePasswordString]}
              required
              onChange={(value) => setPassword(value)}
              value={password}
              maxLength={10}
              error={error}
            />
            <Button
              label={strings[language][enterString]}
              onClick={() => handlePassword()}
              disabled={isLoading}
            />
          </div>
        </div>
        :
        <div className="flex flex-col items-center h-screen justify-center">
          <div className="flex flex-col w-100">
            <Input
              label={strings[language][writeNameString]}
              required
              onChange={(value) => setName(value)}
              value={name}
              maxLength={10}
            />
            <Button
              label={strings[language][enterString]}
              onClick={() => handleEnter()}
              disabled={isLoading}
            />
          </div>
        </div>
      }
    </div>
  );
}
