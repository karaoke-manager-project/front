
export interface IRoom {
  name: string;
  code: string;
  password?: string;
  maxQuantity: number;
  quantity: number;
};

export interface ICreateRoom {
  name: string;
  password?: string;
  maxQuantity: number;
};
