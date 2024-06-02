/*
Tarea 1: Consultas de Agregación
● Descripción: Dada la siguiente estructura de tablas en una base de datos de
ventas, escribe una consulta SQL que devuelva el total de ventas por categoría de
producto y por mes, junto con el porcentaje de crecimiento respecto al mes anterior.
*/


#
#Idempotent commands
#
#DROP TABLE sale;

#DROP TABLE product;


#
#DDL commands
#
CREATE TABLE product (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(100)
);

CREATE TABLE sale (
    id INT PRIMARY KEY,
    product_id INT,
    date DATE,
    quantity INT,
    price DECIMAL(10, 2),
    FOREIGN KEY (product_id) REFERENCES product (id)
);


#
#Information for testing
#
INSERT INTO
    product (id, name, category)
VALUES (1, 'Laptop', 'Electronicos'),
    (2, 'Camiseta', 'Ropa'),
    (3, 'Telefono', 'Electronicos'),
    (
        4,
        'Auriculares',
        'Accesorios'
    ),
    (5, 'Teclado', 'Accesorios'),
    (6, 'Mouse', 'Accesorios'),
    (7, 'Monitor', 'Electronicos'),
    (
        8,
        'Impresora',
        'Electronicos'
    ),
    (9, 'Camara', 'Electronicos'),
    (10, 'Cactus', 'Plantas');

INSERT INTO
    sale (
        id,
        product_id,
        date,
        quantity,
        price
    )
VALUES (1, 1, '2024-05-01', 5, 20.00),
    (2, 2, '2024-05-02', 3, 100.00),
    (3, 3, '2024-05-03', 2, 50.00),
    (4, 4, '2024-05-04', 1, 600.00),
    (
        5,
        5,
        '2024-05-05',
        2,
        1000.00
    ),
    (6, 6, '2024-05-06', 4, 150.00),
    (7, 7, '2024-05-07', 3, 80.00),
    (8, 8, '2024-05-08', 1, 200.00),
    (9, 9, '2024-05-09', 2, 70.00),
    (
        10,
        10,
        '2024-05-10',
        1,
        40.00
    ),
    (11, 1, '2024-04-01', 5, 10.00),
    (12, 2, '2024-04-02', 3, 60.00),
    (13, 3, '2024-04-03', 2, 10.00),
    (
        14,
        4,
        '2024-04-04',
        5,
        1800.00
    ),
    (
        15,
        5,
        '2024-04-04',
        2,
        2000.00
    ),
    (
        16,
        6,
        '2024-04-06',
        4,
        300.00
    ),
    (
        17,
        7,
        '2024-04-07',
        3,
        160.00
    ),
    (18, 8, '2024-04-08', 1, 50.00),
    (19, 9, '2024-04-09', 2, 70.00),
    (
        20,
        10,
        '2024-04-10',
        1,
        60.00
    );


#
#Query answer to the task
#
WITH
#Get the total sales for each month and grouped by category
    MonthlySales AS (
        SELECT p.category, DATE_FORMAT(s.date, '%Y-%m') AS month, SUM(s.quantity * s.price) AS total_sales
        FROM sale s
            JOIN product p ON s.product_id = p.id
        GROUP BY
            p.category,
            DATE_FORMAT(s.date, '%Y-%m')
    ),
#Add to each record a column corresponding to the total sales of the previous month
    SalesWithGrowth AS (
        SELECT ms.category, ms.month, ms.total_sales, LAG(ms.total_sales) OVER (
                PARTITION BY
                    ms.category
                ORDER BY ms.month
            ) AS previous_month_sales
        FROM MonthlySales ms
    )
#Select and calculate the growth percentage between months
SELECT
    category,
    month,
    total_sales,
    #Calculate growth percentage while avoiding division by zero
    IFNULL(
        (
            total_sales - previous_month_sales
        ) / previous_month_sales * 100,
        0
    ) AS growth_percentage
FROM SalesWithGrowth
ORDER BY category, month;