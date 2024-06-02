/*
Tarea 2: Ordenar Datos
● Descripción: Escribe una función lambda para ordenar una lista de tuplas (nombre,
edad) en orden descendente por edad..
*/
import { PEOPLE } from './db.mjs';

export const handler = async (event) => {
  const people = PEOPLE.sort((a, b) => b[1] - a[1]);
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(people),
  };
  return response;
}
