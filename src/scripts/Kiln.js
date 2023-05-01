/*
Define and export a function named firePottery that is responsible for acting as a kiln.
The function must accept the following values as input (i.e. it needs parameters), in the following order. 
If you don't remember, you can easily add new properties to objects in JavaScript.
An object representing a piece of pottery that was made at the wheel in the makePottery function.
A number specifying the firing temperature of the kiln.
The function must add a new property of fired with the value of true to the object.
The function must add a new property of cracked to the object.
If the temperature of the kiln is above 2200 degrees then cracked property must have a value of true.
If the temperature of the kiln is at, or below, 2200 degrees then cracked property must have a value of false.
After both of the new properties have been added, return the augmented object.*/



// i need to make a new function with two parameters 1. the object itself 2. temperature
//the temperature will dictate whether the cracked property is true or false. I will not display the temperature. 
//I am only using the temperature to decide whether or not the cracked property is true or false//
//But I must add the two properties to the makePottery Function which are 1. whether it was fired which will always be true 
//Then I must add the properties to the original information 

export const firePottery = (object, number) => {
    object.fired = true
    object.cracked = null;
    if(number > 2200) {
        object.cracked = true}
        else {
            object.cracked = false}
           
            return object

        }




