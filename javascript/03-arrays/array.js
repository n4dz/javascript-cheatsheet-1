/*
*************************************************************************************************************************************************** 
    An array is a special variable, which can hold more than one value at a time.
    Instead of having to declare multiple variables once, we can use array to have them all like so [variable1, variable2, variable3] .. All the variables must be the same type to ease operations
***************************************************************************************************************************************************        
*/

/*
*************************************************************************************************************************************************** 
    How to create an array?

    Similar to a variables
***************************************************************************************************************************************************        
*/

let myArray = ["BMW", "Audi", "Mercedez", "Ford", "Jeep"];

/*
*************************************************************************************************************************************************** 
    How to access a value inside of an array?

    Must call the name of the array then the index that we want
        All indexes of an array starts at 0
***************************************************************************************************************************************************        
*/

console.log(myArray[4]); // Jeep
console.log(myArray[1]); // Audi
console.log(myArray[2]); // Mercedez
console.log(myArray[0]); // BMW

/*
*************************************************************************************************************************************************** 
    How to change the value of an item in the array
***************************************************************************************************************************************************        
*/

myArray[4] = "Ferrari"; // Now the array at the 4th index will be changed to Ferrari instead of Jeep
console.log(myArray[4]); // Ferrari

/*
*************************************************************************************************************************************************** 
    How to see the length of the array
        How many items are in the array
***************************************************************************************************************************************************        
*/

console.log(myArray.length); // 5

/*
*************************************************************************************************************************************************** 
    How to add values to the array
***************************************************************************************************************************************************        
*/

let myFruitsArray = ["Banana", "Orange", "Apple", "Mango"]; // Creating a new array

// the splice method used on an array takes 3 parameters.
// the first parameter is the index where we want to add new stuff in our array (lets say at index 1, it will add after bananas)
// the second paramater is the amount of things we want to remove after this index (lets say 2, would remove orange and apple)
// the last parameter is an arraw that contains the things that we want to add
myFruitsArray.splice(1, 0, ["Ananas", "Kiwi"]); // Add Ananas and Kiwi at the index 1 and remove nothing
console.log(myFruitsArray); // Banana, Ananas, Kiwi, Apple, Mango

myArray.splice(0, 0, ["Volvo"]);
console.log(myArray); // Volvo, BMW, Audi, Mercedez, Ford, Ferrari

/*
*************************************************************************************************************************************************** 
    How to remove a value to the array
***************************************************************************************************************************************************        
*/

let mySmartphonesArray = ["iPhone", "Samsung", "Huawei", "Pixel"];
delete mySmartphonesArray[0]; // This will remove the index 0 that is iPhone

console.log(mySmartphonesArray); // Samsung, Huawei, Pixel
