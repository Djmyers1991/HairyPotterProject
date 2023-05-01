/*Create a scripts/PotteryCatalog.js module.
// Define a variable in the module with a value of an empty array. 
Instructions to self: simply create an empty array that you won't export.
This array will store pottery that we can sell.*/



/*
// Define and export a function named toSellOrNotToSell that is responsible 
for determining if a piece of pottery should be sold.
Not to self: We need to figure out what pottery we are allowed to sell. 
The function toSellOrNotToSell will explain this.



// The toSellOrNotToSell function must accept a pottery object as input.
Our pottery object will be our parameter.
Here are the instructions for the pottery
*/

/*
1. If the weight of the piece of pottery is greater than, or equal to, 6 
then the function must add a price property with a value of 40.

2. If the weight of the piece of pottery is less than 6 
then the function must add a price property with a value of 20.

// If the piece of pottery is cracked, do not add a price property to it.
no price property. 
*/

let soldObjects = []

export const toSellOrNotToSell = (potteryObject) => {
potteryObject.price = 0
if(potteryObject.weight < 6 && potteryObject.cracked === false) {
    potteryObject.price += 20
soldObjects.push(potteryObject)
}
else if(potteryObject.weight >= 6 && potteryObject.cracked === false) {
    potteryObject.price += 40
    soldObjects.push(potteryObject)
}
    else {
        delete potteryObject.price
    }
    return soldObjects
}


/*Define and export a function named usePottery returns a copy of the array 
of items to be sold. Recall which array method creates a copy of the array.*/

// export const usePottery = () => {
// return structuredClone(soldObjects)};

export const usePottery = () => {
    return soldObjects.map(pottery => ({...pottery}))
}

