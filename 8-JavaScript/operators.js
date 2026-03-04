// Operators

// Arithmatic operators

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3
console.log(a % b); // 1
console.log(a ** b); // 1000

// Assignment operators
let x = 5;
x +=3 ;
console.log(x); // 8

let count = 5;
console.log(count); //5

//Incremental Operators
count++;
console.log(count); //6
console.log(++count + 3); //10
console.log(--count + 2);

// Terminary Operator
let p = 11;
( p > 5 && p < 20 && p === 10) ? console.log(" p is 10") : console.log(" p is not 10 ");


// Logical Operators AND and OR : &&, ||, !

hello();
var hello = function(){
    console.log("Hi");
}

// function is assigned to a variable, in tern leads to hoisting (hello is not function error)

// ---------------------------

// what gets hoisted ? and 

// var, let, functions made with var (function expressions)

// what not gets hoisted fully => normal functions