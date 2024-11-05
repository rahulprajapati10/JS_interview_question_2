




//Day -3

/*

Q1. What are objects in javascript?
Q2. What are function?
Q3. What is an event loop and call stack.
Q4. What is the DOM?
Q5. Difference between undefined vs not defined vs NaN
Q6. What are arrow functions?
Q7. What is the for-in loop in JavaScript? Give its syntax
Q8. Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
Q9. What is difference between null and undefined and where to use what?
Q10. Write code to explain map and filter in arrays
Q11. Given an array of 0's and 1's find out number of 0's
Q12. Given an array find out total no. of odd and even nos.
Q13. Given a string find out number of vowels
*/


//Ans-1

/*
What are objects in javascript?

objects in JavaScript are containers that hold information and actions related to something.
For example, if we have an object for a person, it can have
Properties (like "name" and "age") to hold information about that person.
Methods (like "greet") to perform actions.

*/
//example:-

let person = {
    name: "rahul",
    age: 21,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
console.log(person.name);
person.greet();

//Ans-2:

/*
What are function?

a function is a block of code designed to perform a specific task. 
Functions are helpful because they let you:
Reuse code: Write it once, use it multiple times.
Organize code: Keep tasks separated in neat blocks.
Maintain code: Updating a function’s code changes how it works everywhere it’s used.

*/
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("rahul");



//Ans-3

/*

What is the DOM?

The DOM (Document Object Model) is a structured representation of the content in a webpage. It’s an interface provided by the browser that allows JavaScript to interact with the HTML and CSS of a page.
for example:
Change the text of an element with ID "myTitle"
document.getElementById("myTitle").textContent = "New Title";

*/


//Ans-4

/*

Difference between undefined vs not defined vs NaN

undefined is a JavaScript value that means a variable has been declared but hasn’t been given a value.
When you declare a variable without assigning a value.
When a function does not return a value explicitly.
When accessing an object property or array element that does not exist.

not defined indicates a ReferenceError that occurs when you try to access a variable that hasn’t been declared in any scope (global or local).
When you try to access a variable that does not exist in the code.
This is different from undefined because not defined is an error, while undefined is a value.

NaN is a special value in JavaScript that represents "Not a Number." It typically tells a failed mathematical operation or an invalid number conversion.
When you try to perform a mathematical operation on values that aren’t numbers.
When a number conversion fails (like parsing an invalid number).

*/

//examples

//1.  undefined

let x;
console.log(x);
//2.  not defined
//console.log(y);  // ReferenceError: y is not defined


//3.   NaN
console.log(5 / "abc");  // NaN



//Ans-5

/*

What are arrow functions?

In JavaScript, arrow functions are a shorter and more concise way to write functions.
They are particularly useful for simplifying function syntax, especially for small or one-line functions.

*/

//ex-

const sayHello = name => "Hello, " + name;
console.log(sayHello("rahul"));



//Ans-6

/*
What is the for-in loop in JavaScript? Give its syntax

The for...in loop in JavaScript is used to iterate over the properties (keys) of an object. It allows you to go through each property in an object one by one. This loop is particularly useful when you want to inspect or work with all keys and their associated values within an object.
*/

//ex-

const person1 = {
    name: "rahul",
    age: 21,
    city: "Gorakhpur"
};

for (let key in person1) {
    console.log(key + ": " + person1[key]);
}


//Ans-7

/*

Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

1. Local Scope

Local scope means that variables defined inside a specific function or block are only accessible within that function or block. When a variable is declared in a local scope, it cannot be accessed outside of that scope.

2. Block Scope

Block scope restricts variables to the specific block (enclosed by {}) in which they are defined. In JavaScript, let and const variables are block-scoped, meaning they exist only within the block they are declared in. 


3. Functional Scope

Functional scope means that variables declared with var are limited to the function in which they are defined, not to any particular block within that function. Unlike let and const, which are block-scoped, var is function-scoped.

//ex-

//1.

function greet() {
  let message = "Hello!";
  console.log(message); 
}
 
greet();
console.log(message); // Error: message is not defined


2.

if (true) {
let blockScoped = "I'm inside an if block";
console.log(blockScoped); 
}

console.log(blockScoped); // Error: blockScoped is not defined

3.

function test() {
if (true) {
  var functionScoped = "I'm inside a function";
}
console.log(functionScoped); 
}

test();
console.log(functionScoped); // Error: functionScoped is not defined


*/

//Ans-8

/*
What is difference between null and undefined and where to use what?

undefined is a special value that JavaScript automatically assigns to variables that have been declared but have not yet been given a value. It’s JavaScript’s way of saying, “This variable exists, but it doesn’t have a value yet.”
Use null when you want to intentionally indicate that a variable should be empty, have no value, or represent “nothing.”


*/

//ex-undefined

let l;
console.log(l);
//ex-null

let r = null;
console.log(r);



//Ans-9

/*
Write code to explain map and filter in arrays

In JavaScript, map and filter are two powerful array methods that allow you to create new arrays based on existing ones. 

map()

The map() method creates a new array by applying a function to each element of the original array. It does not change the original array but returns a transformed version of it.
The filter() method creates a new array containing only the elements from the original array that meet a specified condition. It’s useful for selecting specific elements based on some criteria.

*/

//ex-map

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);



console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (original array is unchanged)

//ex-filter

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(numbers1); // Output: [1, 2, 3, 4, 5, 6] (original array is unchanged)



//Ans-10

/*
Given an array of 0's and 1's find out number of 0's

*/

const array = [0, 1, 0, 1, 0, 1, 1, 0];
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        count++;
    }
}

console.log("Number of 0's:", count); // Output: Number of 0's: 4



//Ans-11

/*

Given an array find out total no. of odd and even nos.

*/


const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        evenCount++; // Increment even count
    } else {
        oddCount++; // Increment odd count
    }
}

console.log("Total even numbers:", evenCount); // Output: Total even numbers: 5
console.log("Total odd numbers:", oddCount); // Output: Total odd numbers: 5



//Ans-12

/*
Given a string find out number of vowels

*/

let str = "I am rangbaaz";
let count1 = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
        (ch === 'a' || ch === 'A') ||
        (ch === 'e' || ch === 'E') ||
        (ch === 'i' || ch === 'I') ||
        (ch === 'o' || ch === 'O') ||
        (ch === 'u' || ch === 'U')
    ) {
        count1++;
    }
}

console.log("Number of vowels:", count);



//Ans-13

/*
What is an event loop and call stack.

In JavaScript, the event loop and call stack are essential concepts that help manage the execution of code, particularly in handling asynchronous operations.

*/



