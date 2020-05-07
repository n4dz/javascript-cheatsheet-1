/*
*************************************************************************************************************************************************** 
    Here is the variable types in javascript
        Number
        String
        Boolean
        Object
***************************************************************************************************************************************************        
*/

/* 
***************************************************************************************************************************************************
    Here is how to create a variable in javascript
***************************************************************************************************************************************************    
*/

let thisIsMySuperVariableName = 1; // The type of this variable is a number
let age = 10; // The type od this variable is a number

let firstName = "John"; // The type of this variable is a string
let lastName = "Cena"; // The type of this variable is a string

let isAdult = false; // The type of this variable is a boolean
let isStrong = true; // The type of this variable is a boolean

let myHouse = {
  price: 300000,
  location: "Canada",
  postalCode: "123456",
  year: 2000,
}; // The type of this variable is an object

let myCar = {
  price: 100000,
  brand: "Tesla",
  km: "123456",
  year: 2020,
}; // The type of this variable is an object

/* 
***************************************************************************************************************************************************
    Here is how to access variable in javascript, we will use console.log in order to output the value of the variable
***************************************************************************************************************************************************    
*/
console.log(thisIsMySuperVariableName); // 1
console.log(firstName); // John
console.log(isStrong); // true
console.log(firstName + lastName); // JohnCena
console.log(firstName + " " + lastName); // John Cena
console.log(myHouse.price); // 300000
console.log(myHouse.location); // Canada
console.log(myCar.brand); // Tesla
console.log(
  "I have a car that costs " +
    myCar.price +
    "$ and a house that costs " +
    myHouse.price +
    "$."
); // I have a car that costs 100000$ and a house that costs 300000$.
console.log("I am in debt of " + (myCar.price + myHouse.price) + "$."); // I am in debt of 400000$.

/* 
***************************************************************************************************************************************************
    Here is how to change a created variables value
***************************************************************************************************************************************************    
*/

age = 30; // Now the variable age is 30
isAdult = true; // Now the variable isAdult is true
myCar.km = 0; // Now the variable myCar has 0 km
myCar.price = myCar.price + 50000; // Now my variable myCar has 50000 added to the initial value of 100000 so I have a variable myCar with a price of 150000

console.log(firstName); // John
console.log(age); // 30
console.log(isAdult); // true
console.log(myCar.km); // 0
console.log(myCar.price); // 150000


/* 
***************************************************************************************************************************************************
    Here is how to see the typo of a variable
***************************************************************************************************************************************************    
*/

console.log(typeof age); // Number
console.log(typeof myCar); // Object
console.log(typeof isAdult); // Boolean