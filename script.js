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


