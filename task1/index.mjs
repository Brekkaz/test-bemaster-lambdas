/*
Tarea 1: Filtrar y Transformar Datos
● Descripción: Dado objeto con información de productos en una tienda, escribe una
función lambda que filtre los productos cuyo precio sea mayor a $10.000 y que
devuelva una lista con los nombres de esos productos en mayúsculas.
*/
import { PRODUCTS } from './db.mjs';

export const handler = async (event) => {
  const products = PRODUCTS.filter(product => product.price > 10000)
    .map(product => product.name.toUpperCase());
    
  const response = {
    statusCode: 200,
    body: JSON.stringify(products),
  };
  return response;
}
