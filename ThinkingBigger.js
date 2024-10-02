/**
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?
 */

const radius = 5
const PI = 3.1415;
const area = PI * radius * radius;
let numPlants = 100;
const totPlants = area / .8;

console.log('You start with ' + numPlants + ' plants')
for(let i = 1; i <= 10 ; i++){
    numPlants = numPlants * 2
    console.log('In week ' + i + ' we will have ' + numPlants + ' plants')
}

console.log('\n');

console.log('The area needed would be ' + (numPlants * .8) + ' square meters ')
let newRadius = Math.sqrt((numPlants * .8) / PI )
console.log('And the new radius needed wouold be ' + newRadius + ' meters')