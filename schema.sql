DROP DATABASE IF EXISTS bamazonDB;

CREATE database bamazonDB;

Use bamazonDB;

CREATE TABlE Products (
    product_id INT(100) NOT NULL,
    product_name VARCHAR(100),
    department VARCHAR(100),
    price DECIMAL (10,2),
    quantity INT(50),
    PRIMARY KEY (product_id )
);

INSERT INTO Products (product_id , product_name, department, price, quantity) 

VALUES 
(010, "Gummi Bears", "Candy", 9.99, 20),
(020, "Socks", "Accessories", 7.99, 15),
(030, "Skull Cap", "Accessories", 15, 15), 
(040, "Candles", "Home", 7, 50), 
(050, "Necklace", "Accessories", 12, 20), 
(060, "Shaver", "Beauty", 25, 10), 
(070, "T-Shirt", "Clothing", 22.50, 10), 
(080, "Sweat Shirt", "Clothing", 32.50, 10), 
(090, "Sandals", "Shoes", 15, 15), 
(100, "Bracelet", "Accessories", 10, 20);  

CREATE VIEW [Current Product List] AS
SELECT product_id, product_name, price
FROM Products
WHERE quantity > 0;

SELECT * FROM Products;