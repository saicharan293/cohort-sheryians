// Operators

// -------------------- Arithmatic operators

var a = 10;
var b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33333 (JS returns float)
console.log(a % b); // 1
console.log(a ** b); // 1000


// ----------------------------------------
// Assignment operators
let x = 5;
x +=3 ;
console.log(x); // 8

x -= 2;  // x = x - 2
console.log(x); // 6

x *= 2;  // x = x * 2
console.log(x); // 12

x /= 3;  // x = x / 3
console.log(x); // 4

x %= 3;  // x = x % 3
console.log(x); // 1

x **= 3; // x = x ** 3
console.log(x); // 1

// ----------------------------------------
// Increment Operators

var count = 5;

console.log(count++); // 5  (post-increment: returns old value)
console.log(count);   // 6

console.log(++count); // 7  (pre-increment: increments first, then returns)
console.log(count--); // 7  (post-decrement)
console.log(--count); // 5  (pre-decrement)

//Incremental Operators
var count = 5;
count++;
console.log(count); //6
console.log(++count + 3); //10
console.log(--count + 2); //7

let y = 5;
console.log(y++ + ++y); // 5 + 7 = 12


// ----------------------------------------------

var a = 10, b = "10";

console.log(a == b);  // true  (loose equality, type coercion)
console.log(a === b); // false (strict equality, no type coercion)

console.log(a != b);  // false
console.log(a !== b); // true

console.log(a > b);   // false
console.log(a >= b);  // true
console.log(a < b);   // false
console.log(a <= b);  // true

// ----------------------------------------------------
// Quirks
console.log(null == undefined); // true
console.log(null === undefined); // false

// ----------------------------------------------------------
// Logical Operators AND and OR : &&, ||, !

let px = true, py = false;

console.log(px &&py); // false  (AND)
console.log(px || py); // true   (OR)
console.log(!px);     // false  (NOT)

// ----------------------------------------------------------


// Terminary Operator
let p = 11;
( p > 5 && p < 20 && p === 10) ? console.log(" p is 10") : console.log(" p is not 10 ");


// --------------------------------
// Bitwise Operators
let a = 5, b = 3;

console.log(a & b);  // 1   AND
console.log(a | b);  // 7   OR
console.log(a ^ b);  // 6   XOR
console.log(~a);     // -6  NOT
console.log(a << 1); // 10  Left shift
console.log(a >> 1); // 2   Right shift
console.log(a >>> 1);// 2   Zero-fill right shift

// -------------------------------------


// Type of operators

console.log(typeof 42);       // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof null);     // "object" (!! historical JS bug)
console.log(typeof {});       // "object"
console.log(typeof []);       // "object"
console.log(Array.isArray([])); // true

// ---------------------------------------

// Optional chaining, and null coalescing

let obj = { name: "Alice" };

console.log(obj?.age);       // undefined (no error)
console.log(obj.age ?? 25);  // 25 (nullish coalescing)

// ---------------------------------------

hello();
var hello = function(){
    console.log("Hi");
}

// function is assigned to a variable, in tern leads to hoisting (hello is not function error)

// ---------------------------

// what gets hoisted ? normal functions (function statements) 

greet();

function greet(){
    console.log("Java script is fascinating");
    
}

// Entire function body is hoisted, so you can call the function anywhere in its scope.

// what not gets hoisted fully => function expression
// function is assigned to a variable (function), in tern leads to hoisting (hello is not function error)

hello();
var hello = function(){
    console.log("Hi");
}



// var, let
console.log(num); // undefined
var num = 5;


console.log(n); // ReferenceError // TDZ
let n = 10;

// ---------------------------------------