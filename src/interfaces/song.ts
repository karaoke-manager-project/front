import { IUser } from "./user";

export interface ISong {
  name: string;
  artist?: string;
  url?: string;
};

export interface ApiSong {
  id: string;
  name: string;
  url?: string;
  user: IUser;
}
