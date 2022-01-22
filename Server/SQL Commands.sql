
-- X : Front end will be sending us multiple order with different amount values. FE will pass as the data as single names  
-- Take screenshot of error validation 400 for FE
-- X : Check customers for duplicated customer profile
-- X : Finalised names and route sent to 
-- X : Make mini project for Sharmaine, search by ID then return 


--------------------------------- Sharmaine -----------------------------------------------------------------


Sharmaine can you please create a function (probably app.get(...)) that will take a number that has been 
sent to us from the Front-End which will represent a customer_ID. This number will need to be included in 
the (GET) request, find out the best way to do this ... have a look at paramaters (labelled "Params" on Postman).
You will need to be able to access this number from within your (e.g. app.get) function.

Then send a query to the SQL database asking it to return all the data from the customers table (customer_tb)
where the customer_ID matches the number that you supply to it. 

If you come up with an issue where it says "res.json(result.rows); is undefined" - check that the SQL you have sent 
from node to the database is defiitely correct (remeber what we talked about with different ways to troubleshoot). 

It might be worth deleting your tables in your database, and running them again with the commands listed below. 


----------------------------------------------------------------------------------------------------------------

CREATE TABLE customer_tb (
  customer_ID        SERIAL PRIMARY KEY,
  first_name          VARCHAR(50) NOT NULL,
  last_name              VARCHAR(50) NOT NULL,
  customer_email     VARCHAR(120) NOT NULL,
  delivery_address   VARCHAR(120) NOT NULL,
  delivery_postcode  VARCHAR(12) NOT NULL,
  customer_telephone  VARCHAR(20) NOT NULL, 
  foreign_key            VARCHAR(100) NOT NULL
);

CREATE TABLE order_tb (
  order_ID        SERIAL PRIMARY KEY,
  product_name      VARCHAR(1000) NOT NULL,
  product_comments   VARCHAR(220) NOT NULL,
  order_date         VARCHAR(100) NOT NULL,
  foreign_key      VARCHAR(100) NOT NULL
);


// {
// "first_name":"Alex",
// "last_name":"Pearson",
// "customer_email":"alexpearson@email.com",
// "delivery_address":"1 Test Street",
// "delivery_postcode":"M1T TE3",
// "customer_telephone":"08987 185672",
// "product_name" : "Burger Burger Chips Salad Salad",
// "product_comments" : "More cheese please"
// }

  
SELECT * FROM customer_tb WHERE customer_email=alexpearson@email.com ORDER BY customer_ID

INSERT INTO customers (name, email, address, postcode, telephone) VALUES ('John Smith','j.smith@johnsmith.org','11 New Road','Liverpool','L10 2AB');
INSERT INTO order_from (product_name, product_amount, product_comments, order_date) VALUES ('Pepperoni','1','Extra Cheese','2011-12-01');


SELECT customers.email, customers.name, customers.address, customers.postcode, customers.telephone,
order_from.product_name, order_from.product_amount, order_from.product_comments, order_from.order_date
FROM customers 
INNER JOIN order_from ON order_from.foreignKey=customers.foreignKey;


-- Need to work out how we're going to link the order and the customers tables. Do we do this within express
-- by adding to the customer's table and then pulling back the serial pruimary key that has been made, 
-- or do we do something like joining parts of the customer table with the order table so that e.g. 
-- the order table has the name and the order date and the id added into the rest of the info we have on orders...?


