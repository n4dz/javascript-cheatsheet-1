/*
*************************************************************************************************************************************************** 
    Functions are used to execute a block of code each time it's called, it helps to reduce code repetition
***************************************************************************************************************************************************        
*/

/*
*************************************************************************************************************************************************** 
    Simple function
***************************************************************************************************************************************************        
*/

// Creating a function
function theNameOfMyNewFunction() {
  console.log("Hello");
  console.log("How are you");
}

// Calling a function
theNameOfMyNewFunction(); // Each time this function is called it will console log Hello and How are you

/*
*************************************************************************************************************************************************** 
    Function with Parameters
***************************************************************************************************************************************************        
*/

// Creating a function
function outputTheSumOfThreeNumbers(
  nameOfMyFirstNumberParameter,
  nameOfMySecondNumberParameter,
  nameOfMyLastNumberParameter
) {
  let result =
    nameOfMyFirstNumberParameter +
    nameOfMySecondNumberParameter +
    nameOfMyLastNumberParameter;
  console.log(result);
}

// Calling a function
outputTheSumOfThreeNumbers(2, 8, 10); // When calling the function we must provide 3 parameters and it will output the result of 2+8+10 that is 20
outputTheSumOfThreeNumbers(2, 2, 5); // When calling the function we must provide 3 parameters and it will output the result of 2+2+5 that is 9

/*
*************************************************************************************************************************************************** 
    Function with return
        returns can be found in both simple or paramaterized functions
***************************************************************************************************************************************************        
*/
// Creating a function
function isPersonAdult(theAgeParameter) {
  let isAdult = false;

  if (theAgeParameter >= 18) {
    isAdult = true;
  }

  return isAdult; // Here we return a boolean value that tells if the person is an adult or not
}

// Assigning the return value of the function to a variable
let isFirstPersonsAgeAdult = isPersonAdult(10); // here the value of the variable isFirstPersonsAgeAdult will be false since the function will return false
let isSecondPersonsAgeAdult = isPersonAdult(100); // here the value of the variable isFirstPersonsAgeAdult will be false since the function will return false

// Outputing the variable
console.log(isFirstPersonsAgeAdult); // false
console.log(isSecondPersonsAgeAdult); // true
