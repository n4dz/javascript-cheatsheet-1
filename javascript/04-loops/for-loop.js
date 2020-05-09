/*
*************************************************************************************************************************************************** 
    A for loop is used to execute a block of code multiple times
***************************************************************************************************************************************************        
*/

/*
*************************************************************************************************************************************************** 
    Ho to create a for loop
        first is to create a variable start
        second is to specxify the condition
        last is to tell the incrementation or decrementation
***************************************************************************************************************************************************        
*/


for(let variableOfTheStartingIndexOfMyLoop = 0; variableOfTheStartingIndexOfMyLoop < 10; variableOfTheStartingIndexOfMyLoop++) {
    console.log("Hello"); // This will show Hello 10 times
}



for(let variableOfTheStartingIndexOfMyLoop = 100; variableOfTheStartingIndexOfMyLoop >= 0; variableOfTheStartingIndexOfMyLoop--) {
    console.log(variableOfTheStartingIndexOfMyLoop); // This output from 100 to 0
}



// Here I want to output each elements from the array
let myColors = ["red", "green", "blue", "orange", "purple", "yellow"]; // created a new array


// We can do it like so but it is so long and take time if the array is bigger
console.log(myColors[0]); // at index 0
console.log(myColors[1]); // at index 1
console.log(myColors[2]); // at index 2
console.log(myColors[3]); // at index 3
//...

// instead we can use a for loop where to limit condition is the lenght of our array (myColors.length)
// We start at the 0
// We go until we are less then the length of the array
// We increase by one each time
for (let variableOfStartingIndexOfOurArray = 0; variableOfStartingIndexOfOurArray < myColors.length; variableOfStartingIndexOfOurArray++) {
    console.log(myColors[variableOfStartingIndexOfOurArray]); // This will output each elements since the variableOfStartingIndexOfOurArray starts from 0 and goes to the length of the array that is 5
    // red
    // green
    // blue
    // ...
}


// Lets show the elements of the array but starting from the last element
// We start at the maximum number of elements present in the array that is the legnht of the array (myColors.length) -1 
// We go until we hit index 0 of the array
// We decrease by one each time
for (let variableOfStartingIndexOfOurArray = myColors.length-1; variableOfStartingIndexOfOurArray >= 0; variableOfStartingIndexOfOurArray--) {
    console.log(myColors[variableOfStartingIndexOfOurArray]); // variableOfStartingIndexOfOurArray strats from 6-1 = 5 and goes until 0
    // yellow
    // purple
    // orange
    // ...
}

