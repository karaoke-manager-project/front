import { IRoom } from "../interfaces/room";

export async function getRooms(): Promise<IRoom[]> {
  return [
    {
      "name": "Teste",
      "code": "hjkl",
      "password": "semsenha",
      "max_quantity": 50,
      "quantity": 5,
    }, 
    {
      "name": "Teste2",
      "code": "hjkla",
      "max_quantity": 50,
      "quantity": 5,
    },
  ];
} 
