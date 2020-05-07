/*
*************************************************************************************************************************************************** 
    Here are the possible conditions in javascript
        if
        if/else
        if/elseif/else
***************************************************************************************************************************************************        
*/

/*
*************************************************************************************************************************************************** 
    Opperators in javascript
        ===             ----> equals
        !==             ----> not equals
        <               ----> less then
        >               ----> greater then
        <=              ----> less then or equals
        >=              ----> greater then or equals
        ||              -----> OR
        &&              -----> AND
***************************************************************************************************************************************************        
*/


/*
*************************************************************************************************************************************************** 
    IF
***************************************************************************************************************************************************        
*/
let myAge = 20;

if (myAge > 10) { // since 20 is greater (>) then 10, this condition is TRUE so all the block of code inside the { } will be executed
    console.log("I am older/greater then 10yo."); 
}

let myName = "Ali";

if (myName !== "Ali") { // since myName is equal (===) to Ali, this condition is FALSE so the block of code inside the { } will NOT be executed
    console.log("My name is Ali."); 
}



/*
*************************************************************************************************************************************************** 
    IF/ELSE
***************************************************************************************************************************************************        
*/
let myFavoriteFood = "Pizza";

if(myFavoriteFood === "Pizza") { // since myFavoriteFood is equal (===) to Pizza, this condition is TRUE so the block of code inside the { } will be executed and the black inside the else will NOT be executed
    console.log("Your favorite food is pizza!");
} else { // Not executed
    console.log("Your favorite food is not pizza!");
}

/*
*************************************************************************************************************************************************** 
    IF/ELSEIF/ELSE
***************************************************************************************************************************************************        
*/
let myFavoriteDrink = "Cola";

if(myFavoriteDrink === "Water") { // since myFavoriteDrink is not equal (!==) to Water, this condition is FALSE so the block of code inside the { } will NOT be executed 
    console.log("Your favorite drink is water!");
}
else if(myFavoriteDrink === "Orange juice") { // since myFavoriteDrink is not equal (!==) to Orange juice, this condition is FALSE so the block of code inside the { } will NOT be executed 
console.log("Your favorite drink is orange juice!");
} else { // Since both the condition in the if and the elseif were not true, the else block will execute
    console.log("Your favorite drink is not water or orange juice!");
}



/*
*************************************************************************************************************************************************** 
    Extra
***************************************************************************************************************************************************        
*/
let myFavoriteSport = "Swimming";

if(myFavoriteSport === "Golf") { // since myFavoriteSport is not equal (!==) to Golf, this condition is FALSE so the block of code inside the { } will NOT be executed 
    console.log("Your favorite sport is golf!");
}
else if(myFavoriteSport === "Waterpollo" || myFavoriteSport === "Swimming") { // since myFavoriteSport is equal (===) to either Waterpollo OR (||) Swimming, this condition is TRUE so the block of code inside the { } will be executed 
console.log("Your favorite drink is orange juice!");
} else { // The else block will NOT execute
    console.log("Your favorite drink is not water or orange juice!");
}



/* 
***************************************************************************************************************************************************
    WARNING!!!!!!!
    Once a condition it's true, the code runs the following block { } and even if another elseif condition is true, it will not go inside since it only runs the first true condition and exits
    WARNING!!!!!!!
***************************************************************************************************************************************************    
*/









