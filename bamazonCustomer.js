//Setting up Mysql and Inquirer requirements
var mysql = require('mysql');
var inquirer = require('inquirer');

//Setting up connecting to Mysql server and creating connection to access database
var connection = mysql.createConnection ({
    port: "",
    user: "root",
    password: "root",
    database: "bamazonDB",
});

connection.connect(function(err) {
    if (err) {
        throw err};
        availableItems()
    // placeOrder();
});

function availableItems(){
    //See available Items Prompt
    inquirer
    .prompt({
        name: "availability",
        type: "confirm",
        message: "Welcome to bAmazon. Woould you like to see what is currently available?",  
        deafult: true 
        //Maybe add validation//
    })
    .then(function (userResponse)
    {
        if(answer.availability === true){
            showItems();
            placeOrder();
        }
        else{
            console.log("Sorry we couldn't be of service. Come again soon!")
        };
    });
}
// Function to show the total product list to user once application has been run. ** Need to find a way to call on the view created in the schema.sql 
function showItems(){
    var query = "SELECT * FROM [Current Product List]";
}

// Function to take customer order. Customer will be asked for the productID of the product they'd like to purchase. Once entered a second prompt will ask them how many of the itmes they'd like to purchases. 

function placeOrder() 
{
    //Product ID Prompt
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
        var query = "SELECT * FROM Products WHERE ?";
        connection.query(query, {product_id: answer.product_id}, function (err, res) {
            if (err){
                console.log("You've selected an invalid ID, please try again");
                {
                console.log("You've selected " + answer.product_id);
                }
            }
            idSearch()
        })
    });

    //Product Quantity Prompt
    inquirer
    .prompt({
        name: "quantity",
        type: "input",
        message: "How many units of the product would you like to buy?",
        //Maybe add validation//
    })
    .then(function (checkInventory)
    {
        //Variable to match Product-ID to Product Name

        // var choosenItem = 
        // var query = "Select ";

        //Will check the inventory to see if the the current item is available for purchase. Will include an alert to say 'prodcut unavaialble' if quantity < 0

        var query = "SELECT product_name FROM Products WHERE quantity > 0";
        connection.query(query, answer.product_id, {quantity:  answer.quantity}, function (err, res) {
            if (err){
                console.log("The amount selected is currently unavailable. Please select again");
                {
                console.log("You've requested to purchase " + answer.quantity + answer.product_name);
                }
            };
            checkInventory();
            fulfillOrder();
        });
    });
};

//Taking the answer from the selected product and how many of that item would like to be bought. Customer will then be told how their total Price. 
function fulfillOrder(){

    //update SQL database//

    //show customer total order
}