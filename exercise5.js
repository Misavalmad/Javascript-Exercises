/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ['Maria', 'Dani', 'Luis', 'Juan', 'Camila'];
Write a command that prints out all of the people in the list.
Write the command to remove 'Dani' from the array.
Write the command to remove 'Juan' from the array.
Write the command to move 'Luis' to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log 'Maria', exit from the loop.
Write the command that gives the indexOf where 'Maria' is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ['Maria', 'Dani', 'Luis', 'Juan', 'Camila'];

// Print all people
console.log(people);
// Remove 'Dani'
people.splice(people.indexOf('Dani'), 1);
// Remove 'Juan'
people.splice(people.indexOf('Juan'), 1);
// Move 'Luis' to the front
let luisIndex = people.indexOf('Luis');
people.splice(luisIndex, 1);
people.unshift('Luis');
// Add your name to the end
people.push('Misa');
// Iterate and exit after 'Maria'
for (let person of people) {
  console.log(person);
    if (person === 'Maria') {
    break;
  }
}
// Index of 'Maria'
console.log('Index of Maria: ' + people.indexOf('Maria'));
// Final array
console.log(people);
