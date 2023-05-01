// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

const container = document.querySelector(".HTMLList")


// Make 5 pieces of pottery at the wheel// //This function is located in the PotterWheel.js//
let Mug = makePottery("Mug", 10 , 5)
let Plate = makePottery("Plate", 2, 3)
let Platter = makePottery("Platter", 4, 7)
let Pot = makePottery("Pot", 8, 9)
let Fork = makePottery("Fork", 6, 12)




//update the five pieces of pottery to include the new properties from Kiln.js//

const updatedMug = firePottery(Mug, 2200)
const updatedPlate = firePottery(Plate, 2500)
const updatedPlatter = firePottery(Platter, 2000)
const updatedPot = firePottery(Pot, 3000)
const updatedFork = firePottery(Fork, 2100)

console.log(updatedMug)
console.log(updatedPlate)
console.log(updatedPlatter)
console.log(updatedPot)
console.log(updatedFork)

// Determine which ones should be sold, and their price takes place in PotteryCatalog.js

const mugTryout = toSellOrNotToSell(updatedMug);
const plateTryout = toSellOrNotToSell(updatedPlate);
const platterTryout = toSellOrNotToSell(updatedPlatter);
const potTryout = toSellOrNotToSell(updatedPot);
const forkTryout = toSellOrNotToSell(updatedFork);


console.log(mugTryout);
console.log(plateTryout);
console.log(platterTryout);
console.log(potTryout);
console.log(forkTryout);

//now we are cloning the array so as not to mess up the data

const clonePotteryArray = usePottery()

console.log(clonePotteryArray)


// Invoke the component function that renders the HTML list

const HTMLRepresentation = PotteryList(clonePotteryArray)


console.log(HTMLRepresentation);

container.innerHTML = HTMLRepresentation
