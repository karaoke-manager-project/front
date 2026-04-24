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
