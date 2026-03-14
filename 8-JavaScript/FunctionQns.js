// ------------------- Level 1 ----------------
// --- Write a function sayHello() that prints "Hello Javascript"

// function sayHello(){
//     console.log("say Hello");
// }

// sayHello();

// --- Create a function add(a, b) that returns their suma and log the result

// function add(a, b){
//     return a+b;
// }

// let sum = add(2, 3);
// console.log(sum);


// --- Write a function with a default parameter name = "Guest" that prints "Hi <name>"

// function greeting(name = "Guest"){
//     console.log(`Hi ${name}`);
// }

// greeting("sai");

// --- Use rest parameters to make a function that adds unlimited numbers.
// - case 1. using reduce

// function addUnlimited(...num){
//     let number = num.reduce((acc, n)=>{
//         return acc+n;
//     },0);

//     return number;
// }

// - case 2. using forEach

// function addUnlimited(...num){
//     let sum = 0;
//     num.forEach(element => {
//         sum+=element;
//     });

//     return sum;
// }

// - case 3. using for

// function addUnlimited(...num){
//     let sum = 0;
//     for(let i = 0; i < num.length; i++){
//         sum+=num[i];
//     }
//     return sum;
// }


// let res = addUnlimited(1, 2, 3, 4, 4, 5);

// --- Create an IIFE that prints "I run instantly"

// (function(){
//     console.log("I run instantly");
// })();

// --- Make a nested function where the inner one prints a variable from the outer one
// - using nested functions

// function parent(){
//     let a = 12; 
//     function child(){
//         console.log(a);
//     }
//     child();
// }

// - using closure
// function parent(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// parent()();


// --- Create an array of 5 fruits. Add one at the end and remove one from the beginning

// let arr = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// arr.push("Guava");
// arr.shift();

// --- Use a for loop to print all elements of an array

// let arr = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// --- Create an object person with keys name, age, and city, print each key's value
// let person = {
//     name : "Anji",
//     age : 80,
//     city : "Anjinadri"
// }

// - for loop to print values of each key

// for(let i in person){
//     console.log(person[i]);
// }

// - for loop to print only keys

// for(let key in person){
//     console.log(key);
// }

// --- Use setTimeout() to log "Time's Up!" after 2 seconds

// setTimeout(() => {
//     console.log("Time's up!");
// }, 2000);

// ---------------LEVEL 2-----------------

// --- 1. Write a higher-order function `runTwice(fn)` that 
// takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();
// }

// runTwice(function(){
//     console.log("function passed");
// })

// --- 2. Create one pure function that always returns the 
// same output for a given input, and one impure function using a global variable.

// let par = 12;

// function peace(val){
//     console.log(val);
// }

// peace(par);

// function impeace(val){
//     return par*=val;
// }

// let imp = impeace(2);

// --- 3. Write a function that uses object destructuring inside parameters to extract and print `name` and`age`.

// function desfn({name, age}){
//     console.log(`name : ${name}, age : ${age}`);
// }

// let obj={
//     name : "Shiva",
//     age : 100
// }

// desfn(obj);


// --- 4. Demonstrate the difference between normalfunction and arrow function when used as objectmethods (the `this` issue).

// arrow function doesn't have this, so it takes this value of parent, 
// in global this value is window

// for normal function , this value is object

// const user = {
//     name : "Parvati",
//     greet : function(){
//         console.log(this.name);
//     }
// }

// user.greet();


// Arrow function does not have their own this
// they inherit from lexical scope (parent), often from window
// const user = {
//     name : "Parvati",
//     arrowGreet : () => {
//         console.log("Normal: ",this.name);
//     },
//     normalGreet : ()=>{
//         console.log("Normal: ",this.name);
//     }
// }

// user.arrowGreet();

// with arrow function and this

// const user = {
//     name : "Vishnu",
//     greet : function(){
//         const arrow = () => {
//             console.log(this.name);
//         }

//         arrow();
//     }
// }

// user.greet();

// --- 5. Given an array of numbers, use `map()` to create anew array where each number is squared.

// let numbers = [2, 34, 53, 3, 64];

// let sqNumbers = numbers.map((val)=>{
//     return val*val;
// })

// --- 6. Use `filter()` to get only even numbers from an array

// let numbers = [2, 34, 53, 3, 64];

// let filters = numbers.filter((val) => {
//     return val%2==0
// });

// --- 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

// let salaries = [1000, 2000, 3000];

// let total = salaries.reduce((acc, val) => {
//     return acc+val;
// }, 0);

// --- 8. Create an array of names and use `some()` and`every()` to test a condition (e.g., all names longer than 3 chars)

// let names = ["sai","charan","amudala"];

// let somechk = names.some((val) => {
//     return val.length>3;
// })

// let everychk = names.every((val) => {
//     return val.length>3;
// })


// --- 9. Create an object `user` and test the behavior of`Object.freeze()` and `Object.seal()` byadding/changing keys.

// Object.freeze() : no new properties addition, no modifications, no deletions.

// let user = {
//     name : "Dhanush",
//     age : 50
// }

// Object.freeze(user);

// // can't change the name
// user.name = "Dhanu";

// // can't add the property
// user.city = "Bangalore";

// // can't delete the property
// delete user.name;

// Object.seal() : cannot add or delete properties, but modify the existing property

// let user = {
//     name : "Java Script",
//     age : 100
// }

// Object.seal(user);

// // can't add the property
// user.city = "Shambala"

// // can't delete the property
// delete user.age;

// // but you can modify the value of the property
// user.age = 1000;


// --- 10. Create a nested object (`user → address → city`) andaccess the city name inside it.

// let user = {
//     address : {
//         city : "Bangalore"
//     }
// }

// user.address.city;
