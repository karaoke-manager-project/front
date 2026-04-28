import { IUser } from "./user";

export interface IRoom {
  name: string;
  code: string;
  password?: string;
  maxQuantity: number;
  quantity: number;
  users: IUser[];
};

export interface ICreateRoom {
  name: string;
  password?: string;
  maxQuantity: number;
};

export interface ApiRoom {
  MAX_ROOM_SIZE_FREE_USER: number;
  code: string,
  name: string,
  password?: string,
  users: IUser[],
}
