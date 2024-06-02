/*
Tarea 1: Conexión a una Base de Datos MySQL desde AWS Lambda
● Descripción: Crea una función Lambda en Node.js que se conecte a una base de
datos MySQL, realice varias consultas y devuelva los resultados combinados como
una respuesta JSON. La lógica de acceso a la base de datos debe estar
implementada en un archivo separado del archivo principal de la función Lambda.
● Requisitos:
    1. La función debe utilizar la biblioteca mysql2 para manejar la conexión a
    MySQL.
    2. La configuración de la conexión (host, user, password, database, etc.) debe
    estar almacenada en AWS Secrets Manager.
    3. Crea un archivo db.js que maneje la conexión y las consultas a la base de
    datos.
    4. La función principal en index.js debe realizar las siguientes consultas a
    través de las funciones definidas en db.js:
        ■ Obtener todos los productos.
        ■ Obtener la cantidad total de ventas por producto.
        ■ Obtener el producto con el precio más alto.
    5. Combina los resultados de las consultas en un solo objeto JSON y
    devuélvelo.
*/
import { Database } from './db.mjs';

export const handler = async (event) => {
    const db = new Database();
    //load the db connection of the object
    await db.connect();

    const allProducts = await db.getAllProducts();
    const totalSalesByProduct = await db.getTotalSalesByProduct();
    const productWithTheHighestPrice = await db.getProductWithTheHighestPrice();

    const response = {
        statusCode: 200,
        body: {
            allProducts,
            totalSalesByProduct,
            productWithTheHighestPrice
        },
    };
    return response;
}
