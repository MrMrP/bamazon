//Setting up Mysql and Inquirer requirements
var mysql = require('mysql');
var inquirer = require('inquirer');

//Setting up connecting to Mysql server and creatting connectiong to access database
var connection = mysql.createConnection ({
    port: "",
    user: "root",
    password: "root",
    database: "bamazonDB",
});

connection.connect(function(err) {
    if (err) throw err;
    showItems();
    placeOrder();
});

// Function to show the total product list to user once application has been run. ** Need to find a way to call on the view created in the schema.sql 
function showItems(){

}

// Function to take customer order. Customer will be asked for the productID of the product they'd like to purchase. Once entered a second prompt will ask them how many of the itmes they'd like to purchases. 

function placeOrder() 
{
    inquirer
    .prompt({
        name: "product",
        type: "input",
        message: "Welcome to bAmazon. Please enter the product ID of the product you'd like purchase today",   
        //Maybe add validation//
    })
    .then(function (idSearch)
    {
        //will reference products table to search for the product based on customers input (using product ID)
        
    });

    inquirer
    .prompt({
        name: "Purchase Quantity",
        type: "input",
        message: "How many units of the product would you like to buy?",
        //Maybe add validation//
    })
    .then(function (checkInventory)
    {
        //Will check the inventory to see if the the current item is available for purchase. Will include an alert to say 'prodcut unavaialble' if quantity < 0
    })
}

//Taking the answer from the selected product and how many of that item would like to be bought. Customer will then be told how their total Price. 
function fulfillOrder(){

    //update SQL database//

    //show customer total order
}