const express = require("express");
const app = express();
const { Pool } = require('pg');
const { check , validationResult } = require('express-validator');

app.use(express.json()); //This means the body will be automatically parsed from a string into a JSON object. 

// npm i express-validator

const pool = new Pool({
    user: 'Erin',
    host: 'localhost',
    database: 'cyf_mini_1',
    password: '',
    port: 5432,
});

// USE COMMAND LINE NOT WSL !!!!!
app.listen(6000, function () {
  console.log("Server is listening on port 6000. Ready to accept requests!");
});

app.get("/", function (req, res) {
    console.log("Default get request run, joined table returned")

    pool.query(
        `SELECT customer_tb.email, customer_tb.name, customer_tb.address, customer_tb.postcode, customer_tb.telephone,
        order_tb.product_name, order_tb.product_amount, order_tb.product_comments, order_tb.order_date
        FROM customer_tb 
        INNER JOIN order_tb ON order_tb.foreign_key=customer_tb.foreign_key;`
        , (error, result) => {
        res.json(result.rows); // THIS ONLY WORKS IN COMMAND LINE NOT WSL !!!!
    });
});


app.get("/customers", function (req, res) {
    console.log("/customers get request was run...")

    pool.query('SELECT * FROM customer_tb ORDER BY customer_ID', (error, result) => {
        res.json(result.rows); // THIS ONLY WORKS IN COMMAND LINE NOT WSL !!!!
    });
});

app.get("/orders", function (req, res) {
    console.log("app.get /order run")

    // This will retrieve all orders from the order table
    pool.query('SELECT * FROM order_tb', (error, result) => {
        res.json(result.rows); // THIS ONLY WORKS IN COMMAND LINE NOT WSL !!!!
    });
});


// Postman put request with this in body:
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

app.put("/orders", [
    // Installed this middleware for the checking functionality below ... npm i express-validator
    check('first_name').notEmpty().withMessage('Name Cannot Be Empty'),
    check('last_name').notEmpty().withMessage('Name Cannot Be Empty'),
    check('customer_email').isEmail().withMessage('Email Address Is Not Valid'),
    check('delivery_address').notEmpty().withMessage('Physical Address Is Not Valid'),
    check('delivery_postcode').notEmpty().withMessage('Postcode Cannot Be Empty'),
    check('customer_telephone').notEmpty().withMessage('Telephone Number Cannot Be Empty'),
    check('product_name').notEmpty().withMessage('Product Name Cannot Be Empty'),
    ],(req, res)=> {

    // If errors are empty then input has passed the validation. If they are not empty then there is an issue
    // which we will send a status of 400 back to the frontend with the errors in an array. Because we use a return
    // statement, the rest of the code isn't run 
    const errors = validationResult(req);
    console.log(errors);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }


    //This will be used to take data from the submitted form and then add it to our SQL database. We need to return 
    // either a success or error code to the frontend. We may want to use the body to transfer this infomation. I have  
    // imported app.use(express.json()); at the top of the page to do this
    let forename = req.body.first_name;
    let surname = req.body.last_name;
    let email = req.body.customer_email;
    let address = req.body.delivery_address;
    let postcode = req.body.delivery_postcode;
    let telephone = req.body.customer_telephone;

    let productName = req.body.product_name;
    let productComments= req.body.product_comments;
    let currentDate = new Date().toISOString()

    let foreignKey;
    
    // This first pool.query will check the customer_tb to see if the email already exists
    pool.query(`SELECT * FROM customer_tb WHERE customer_email='${email}' ORDER BY customer_ID`, (error, result) => {
        
        // If a matching email is found then this first if statement will run, and will only add the order to the 
        // order_tb, and will not add a duplicate entry into the customer_tb
        if (result.rows.length > 0){

            console.log("Matching email address found")
            let matchingEmailForeignKey = result.rows[0].foreign_key;

            pool.query(
                   `INSERT INTO order_tb (product_name, product_comments, order_date, foreign_key) 
                    VALUES ('${productName}','${productComments}','${currentDate}','${matchingEmailForeignKey}');`
                
                    , (error, result) => {
                        // res.json(result.rows); // THIS ONLY WORKS IN COMMAND LINE NOT WSL !!!!
                        console.log(error)
                        if (error){
                            console.log(error)
                            res.status(400).json({ result: "SQL Add Error - Duplicate Email, error whilst adding"});
                        } else {
                            console.log(result)
                            res.status(200).json({ result: "SQL Add Success - Order added, customer infomation already exists"});
                        }
                    }
                );
                
        // If a matching email is NOT found then this second if statement will run, and will add both the customer information
        // to the customer_tb, and will add the order information to the order_tb 
        } else {

            console.log("No matching email address")
            // We need a common unique key to join the two tables together so first we pull the last id from the customers table,
            // add 1000 and then use this number as the foreign key. We then run the 2nd pool query to add these variables to 
            // our tables. 
            pool.query('SELECT customer_ID FROM customer_tb ORDER BY customer_ID', (error, result) => {

                // console.log(result.rows[result.rows.length -1]);
            
                // This if statement makes allowance for the first customer profile that is added
                let finalCustomersID;
            
                if (result.rows[result.rows.length -1] === undefined){
                    finalCustomersID = 0 ;
                } else {
                    finalCustomersID = result.rows[result.rows.length -1].customer_id;
                }
            
                foreignKey = finalCustomersID + 1000;
            
                pool.query(
                    `INSERT INTO customer_tb (first_name, last_name, customer_email, delivery_address, delivery_postcode, customer_telephone, foreign_key) 
                    VALUES ('${forename}','${surname}','${email}','${address}','${postcode}','${telephone}','${foreignKey}');

                    INSERT INTO order_tb (product_name, product_comments, order_date, foreign_key) 
                    VALUES ('${productName}','${productComments}','${currentDate}','${foreignKey}');`
                
                    , (error, result) => {
                        // res.json(result.rows); // THIS ONLY WORKS IN COMMAND LINE NOT WSL !!!!
                        console.log(error)
                        if (error){
                            console.log(error)
                            res.status(400).json({ result: "SQL Add Error"});
                        } else {
                            console.log(result)
                            res.status(200).json({ result: "SQL Add Success"});
                        }
                    });
                });
            }
    });    
});
