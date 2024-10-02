/*
*
Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
Here is the information you have been given:
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.
Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

*/

const radius = 5
const PI = 3.1415;
const area = PI * radius * radius;
let numPlants = 20;
const totPlants = area / .8;
// Plant needs a min of .8 squares meters
//Area starts with 20 plants
// Plants doube n number every week

console.log('The area is: ' + area);
console.log('Number of plants that can fit in that area = ' + totPlants + '\n');


console.log('You start with ' + numPlants + ' plants')
for(let i = 1; i <= 3 ; i++){
    numPlants = numPlants * 2
    console.log('In week ' + i + ' we will have ' + numPlants + ' plants')

    //Control Flow
    if( numPlants > (totPlants * .8)){
        console.log('The plants should be pruned' + '\n')
    }
    else if ((numPlants >= (totPlants * .5)) && (numPlants <= (totPlants * .8))){
        console.log('The plants should be monitored' + '\n')
    }
    else {
        console.log('There is more room for plants to be planted' + '\n')
    }

}


