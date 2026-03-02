// javascript: a scripting language used to create dynammic and interactive web pages
// It is interpreted at runtime rather than being compiled into machine code

// Interpreter is a s/w that excutes code line by line

// ex of scripting languages: 
// - Javascript, 
// - Python,
// - powershell,
// - ruby,
// - php

// latest js is es6 (ecma script 6 - due to collision among different versions of js)
// Modern JavaScript:
// ES6 (ECMAScript 2015) introduced major improvements such as:
// - let & const
// - Arrow functions
// - Template literals
// - Classes
// - Modules
// Importance: 
// animation, interactive, engagement creation

// var, let , const

// const => for storing values that don't change
// var, let => for storing varied values

// just declare
// var a;

//declare and initialize
// var a = 12;
// var a exists in the functioned scoped

// function abcd(){
//     if(true){
//         var a = 12;
//     }
//     console.log(a); // a = 12, since function scoped,
//     //  var is still accessible out of if block (but not outside function)
// }
// console.log(a) //not accessible
// abcd()

// redeclaration is possible without having any error
// var a= 2;
// var a = 'sai';
// console.log(a);


//let a = 10;
// block scoped 
// redeclaration gives error

// -----------------------------------------------------


// Scope (global , block, functional)

//global scoped (not inside any { braces } )

//Function scoped
// function greet(){
//     var a =12;
// }

// a is accessible only to the function

//Block scoped
// var doesn't respect block, since functional scoped
// let respect block, so block scoped ( withing { braces => function, if block etc })


// -------------------------------------------------------
// Reassignment, Redeclaration
// Reassignment is possible with let, var
// var a = 12;
// a = 32;
// var a  = 232;

// Redeclaration is possible with var

// let a = 24;

// Redeclaration is not possible with let

// let b = 12;
// b = 23;

// ------------------------------------------------------------


// Temporal Dead Zone
// area that js know that variable exists but cannot access it.

// console.log(a);
// For Let, Reference error, since cannot access before initialization
// it isn't saying that it is not defined ( js knows a is there )
// let a = 12;

// For Var, it doesn't give Reference error, it gives undefined
// because Hoisting takes place
// var a = 10;


//-----------------------

// Data Types in JavaScript 

// Primitives,
//-------------
// we can copy the primitives (copy by value)
// string, number, boolean, null , undefined, Symbol, bigint

// let a = 12; // its own 12
// let b = a;  // its own 12

// a = a + 1; 
// only a value changed, 
// b value remains same

// strings = '', "", ``
// numbers = 12, 12.3
// boolean = true/false
// null = for assigning empty values (assigned by user)
// undefined = for empty declarations ( assigned by js engine)
// Symbol = unique, immutable value

// Big int = number followed by n at the end



// References : (with brackets)
//------------
// we copy the references (i.e., memory address/location), but not actual value (copy by reference)
// arrays, objects, funct ions
// [], {}, ()

// let arr = [1, 2, 3];

// let arr2 = arr;
// here arr2 doesn't hold real values that are in arr
// arr2.pop();
// since pop removes last value of arr2 array,
// arr also loose its element

// ------------------------------

// Dynamic Typing

// you can assign any data type to the var/let on the go

let a = 12;
a = "is it ok?";
a = true;