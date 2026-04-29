import { IUser } from "./user";

export interface ISong {
  name: string;
  artist?: string;
  url?: string;
  user: IUser;
};

export interface ApiSong {
  id: string;
  name: string;
  url?: string;
  user: IUser;
}
