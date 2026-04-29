export const managerEndpoint = "/manager";
export const roomEndpoint = "/room";
export const joinRoomEndpoint = (code: string) => `${roomEndpoint}/${code}/join`;
export const loginEndpoint = `${managerEndpoint}/login`;
export const roomAuth = (code: string, id: string) => `${roomEndpoint}/${code}/${id}/auth`;
export const roomInfo = (code: string) => `${roomEndpoint}/${code}/info`;
