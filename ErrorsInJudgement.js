/*
The scientists decided not to listen to your recommendations,
and have instead started with 100 plants in the original 5-meter-radius garden.

Use try and catch to wrap your work in an error-handling block. 
If the amount of space required to hold the originally provided number of 
plants exceeds the amount of space available, 
throw a new error and log an appropriate message.

*/


const radius = 5
const PI = 3.1415;
const area = PI * radius * radius;
let numPlants = 100;
const totPlants = area / .8;
// Plant needs a min of .8 squares meters
//Area starts with 20 plants
// Plants doube n number every week

console.log('The area is: ' + area);
console.log('Number of plants that can fit in that area = ' + totPlants + '\n');


console.log('You start with ' + numPlants + ' plants')
for(let i = 1; i <= 10 ; i++){
    numPlants = numPlants * 2;

   try {
    if( numPlants < totPlants){
        console.log('There is enough plants to fit in the space')
    }
    else{
        throw 'There are way to many plants, remove some from this area'
    }
   }
    catch (error){
        console.log(error)
    }
}