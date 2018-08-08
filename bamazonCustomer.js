//Setting up Mysql and Inquirer requirements
var mysql = require('mysql');
var inquirer = require('inquirer');

//Setting up connecting to Mysql server and creating connection to access database
var connection = mysql.createConnection ({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB",
});

connection.connect(function(err) {
    if (err) {
        throw err};
        availableItems();
        // showItems();     
        // placeOrder();
});

function availableItems(){
    //See available Items Prompt
    inquirer
    .prompt({
        name: "availability",
        type: "confirm",
        message: "Welcome to bAmazon. Would you like to see what is currently available?",  
        deafult: true 
        //Maybe add validation//
    })
    .then(function(answer)
    {
        if(answer.availability){
            showItems();
            // placeOrder();
        }
        else{
            console.log("Sorry we couldn't be of service. Come again soon!")
        };
    });
}
// Function to show the total product list to user once application has been run. ** Need to find a way to call on the view created in the schema.sql 
function showItems(){
    var items = "SELECT * FROM Products";
    connection.query(items, function(err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++){
            console.log("ID:" +result[i].product_id + " || " + " Product:" + result[i].product_name + " || " + " Price: $" +result[i].price);
        }
        idSearch();
            connection.end();
    }
    )};
// Function to take customer order. Customer will be asked for the productID of the product they'd like to purchase. Once entered a second prompt will ask them how many of the itmes they'd like to purchases. 

function idSearch() 
{
    //Product ID Prompt
    inquirer
    .prompt({
        name: "product",
        type: "input",
        message: "\nAlright!! Go ahead and Just throw it in the bag." + "\nPlease enter the ID of the product you'd like to purchase",   
        //Maybe add validation//
    })
    .then(function (answer)
    {
        // var query = "SELECT * FROM Products";
        // connection.query(query, function(err, result) {
        // if (err) throw err;
        // console.log(result);
        // idSearch();


        //will reference products table to search for the product based on customers input (using product ID)
        var product = "SELECT * FROM Products WHERE product_id = ?";
        connection.query(product, {product_id: answer.product_id}, function (err, res) {
            if (err){
                console.log("You've selected an invalid ID, please try again")
            {
                console.log("You've selected " + answer.product_id);
                }
            }
            placeOrder()
        })
    });
}

    function placeOrder() 
{
    //Product Quantity Prompt
    inquirer
    .prompt({
        name: "quantity",
        type: "input",
        message: "\nSweet!!!!" + "\nHow many would you like?",
        //Maybe add validation//
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
        }
    })
    .then(function (checkInventory)
    {
        //Variable to match Product-ID to Product Name

        // var choosenItem = 
        // var query = "Select ";

        //Will check the inventory to see if the the current item is available for purchase. Will include an alert to say 'product unavaialble' if quantity < 0

        var query = "SELECT product_id * FROM Products WHERE quantity > 0";
        connection.query(query, answer.product_id, {quantity:  answer.quantity}, function (err, res) {
            if (answer.quantity = 0)
            {
                console.log("The amount selected is currently unavailable. Please select again")
            }
            else {
                console.log("You've requested to purchase " + answer.quantity + answer.product_name);
            };
            fulfillOrder();
        });
    });
}

    //Taking the answer from the selected product and how many of that item would like to be bought. Customer will then be told how their total Price. 
    function fulfillOrder()
{
    
    //show customer total order

    var totalPrice = answer.quantity * price
    console.log ("\n You've selected to purchase" + product_name + "\nat " + price +"a piece");

    console.log ("\n Your total is $" + totalPrice + "\nThank You for Shoppinh with us " + "\nHope to see you again soon!");
    inventoryUpdate();
    
}
    //update SQL database//
    function inventoryUpdate() 
{

}; 

