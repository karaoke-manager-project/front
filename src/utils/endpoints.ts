export const managerEndpoint = "/manager";
export const roomEndpoint = "/room";
export const joinRoomEndpoint = (code: string) => `/room/${code}/join`;
export const loginEndpoint = `${managerEndpoint}/login`;
