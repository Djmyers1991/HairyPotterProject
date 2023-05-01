/*Create a scripts/PotteryWheel.js module.
Define a variable in the module to have the value of the primary key for each piece of pottery. 
It should have an initial value of 1.*/


/*
Define and export a function named makePottery.
The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.
Shape of the piece of pottery (e.g. "Mug", "Platter")
Weight of the piece (e.g. 1, 5)
Height of the piece (e.g. 3, 7)
The makePottery function must return an object with the following properties on it.
shape
weight
height
id (increment this value each time the function is invoked)*/

let id = 1

export const makePottery = (shaped, weighted, heighted) => {
    const makePotteryObject = {
    shape: shaped,
    weight: weighted,
    height: heighted,
    id: id++
    
    }
    return makePotteryObject
}

//this function will export the parameters in the following object. I don't really
//understand why the id had to be outside of the function to work.

    






