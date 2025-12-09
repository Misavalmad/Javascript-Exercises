/*Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ['This', 'is', 'a', 'sentence.'];
function printOutString() {
  // your code here
}


printOutString();
Complete the function to print out the string: This is a sentence. */

let arr = ['This', 'is', 'a', 'sentence.'];
function printOutString() {

  console.log(arr.join(' '));
}

/*Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

function doubleArray(arr) {
  let doubledArr = arr.map(num => num * 2);
  console.log(doubledArr);
}
doubleArray([1, 2, 4, 5]);

/*Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

function sumAndProduct(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let product = arr.reduce((acc, num) => acc * num, 1);
  console.log('The sum is ' + sum + '. The product is ' + product + '.');
}
sumAndProduct([1, 2, 3, 4]);

/*Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

function commonCourses(arr1, arr2) {
  let common = arr1.filter(course => arr2.includes(course));
  console.log('Common courses: ' + common.join(', '));
}
commonCourses(['Math', 'English', 'Programming'], ['Geography', 'Spanish', 'Programming']);

/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
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