import mysql from 'mysql2/promise';
import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export class Database {
    constructor() {
        this.connection = null;
    }

    //get the db credentials from AWS secrets
    async getDBCredentials() {
        const secret_name = process.env.AWS_SECRET_DB;

        try {
            const client = new SecretsManagerClient({
                region: process.env.AWS_REGION,
            });

            const response = await client.send(
                new GetSecretValueCommand({
                    SecretId: secret_name,
                })
            );
            return JSON.parse(response.SecretString);
        } catch (err) {
            console.log('Error getting db secret from aws:', err);
            throw err;
        }
    }

    //config and load the db connection into connection property
    async connect() {
        const dbCredentials = await this.getDBCredentials();
        try {
            this.connection = await mysql.createConnection({
                host: dbCredentials.host,
                user: dbCredentials.username,
                password: dbCredentials.password,
                database: dbCredentials.dbname,
                port: dbCredentials.port,
            });
        } catch (err) {
            console.log('Error connecting to the database:', err);
            throw err;
        }
    }

    //get all products from database
    async getAllProducts() {
        try {
            const response = await this.connection.query(
                'SELECT * FROM product'
            );
            return response[0];
        } catch (err) {
            console.log('Error retrieving all products:', err);
            throw err;
        }
    }

    //get total sales by products from database
    async getTotalSalesByProduct() {
        try {
            const response = await this.connection.query(
                `SELECT p.id, p.name, p.category, SUM(s.quantity) AS total_sales
                FROM sale s
                INNER JOIN product p ON p.id = s.product_id
                GROUP BY s.product_id`
            );
            return response[0];
        } catch (err) {
            console.log('Error retrieving total sales by product:', err);
            throw err;
        }
    }

    //get the product with the highest price from database
    async getProductWithTheHighestPrice() {
        try {
            const response = await this.connection.query(
                `SELECT p.*, s.price
                FROM sale s
                JOIN product p ON p.id = s.product_id
                ORDER BY s.price DESC
                LIMIT 1`
            );
            return response[0];
        } catch (err) {
            console.log('Error retrieving product with highest price:', err);
            throw err;
        }
    }
}