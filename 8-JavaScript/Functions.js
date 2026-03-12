// Function: 

// to understand function, let's observe this
// console.log("hey");

// In here, if we observe, as soon as we write it, it will log the message to console
// is it a problem?

// if we write a 10 lines of similar code, they will run instantaneously. 
// But If I don't want them to run in an instant?

// For example, if I'm want to build a toy. 
// Assume it has a head, body, two hands, two legs.
// As soon as you fix hand to the body and if it starts moving, 
// I can't fix other parts easily. 
// I want my robot to function properly only after every part is fixed.

// Function is a block of code which shouldn't run as soon as it is written.
// and also to re use a block of code

// 2nd example, I want to write a code to wish everyone happy ugadi, if I write

// console.log("Happy Ugadi");

// even though it might be correct, but today isn't Ugadi. Ugadi is on 19th March.
// so, I want to display the message only on that day. 
// I write a function and run (call) it on the Ugadi occasion

// Different formats

// Function Declaration

// function dec(){
//     console.log("Function Declaration");
    
// }

// Function Expression

// let fnc = function(){
//     console.log("Function Expression");
// }

// It may not make sense, but JS itself doesn't make sense. so, don't complain

// Fat Arrow Functions () fat, => arrow

// let cnp = () => {
//     console.log("Fat arrow function");
// }

//--------------------ARGUMENTS (function call) AND PARAMETERS (function definition)---------------------------

// function dance(naach){
//     console.log(`${naach} is dancing`);
// }

// in the function definition, parameters
// dance(sai);
// in the function call, arguments


//------------DEFAULT PARAMETERS ----------------

function add(v,p){
    console.log(v, p);
    // console.log(v+p);
    // if no arguments passed, undefined + undefined = NaN
}
// here if no argument is passed to function call, theere won't be any error
// those parameters will become undefined (each).
// add();

// we can have default values to the parameters in the function definition, 
// if in case of function call doesn't provide any value in its arguments
function add1(v=0,p=0){
    console.log(v+p);
}

//------------- REST AND SPREAD OPERATORS-------

function any(...val){
    console.log(val);
    
}

// any(1, 2, 3,4, "sai");

// if arguments are more, we need to build those many parameters, 
// But to avoid them, we use REST operator in the parameters
// if ... is in parameters of function, we call it REST operator
// if ... is in arrays/objects, we call it SPREAD operator


//--------------RETURN VALUES AND EARLY RETURNS -----

//If we go to any place, we find some items interesting and we pick them up (with/without their consent). After checking and observing that item, we will return the item from where we took it.

// Coming to JavaScript, return does the same work. Whenever a function having a return and
// it is called somewhere in the code. Return keyword sends the data to that place.

// function hello(){
//     return 2;
// }

// let val = hello();

// console.log(val);

// Early returns: Exit the function immediately when a condition is wrong preventing deeper nesting.
// (we handle problem first).

// function withdrawal(amt, bal){
//     if(amt<=0){
//         console.log("Invalid amount");
//         return;
//     }

//     if(bal < amt){
//         console.log("Not enough Balance");
//         return;
//     }
//     console.log("Withdrawal Successful");
    
// }

// 1. Handle edge cases first
// 2. Return early
// 3. Write the main logic last

// Real world case

// function login(user) {
//   if (user) {
//     if (user.isActive) {
//       console.log("Login successful");
//     } else {
//       console.log("User not active");
//     }
//   } else {
//     console.log("User not found");
//   }
// }

// full of nesting --------------------------

// function login(user) {
//   if (!user) {
//     console.log("User not found");
//     return;
//   }

//   if (!user.isActive) {
//     console.log("User not active");
//     return;
//   }

//   console.log("Login successful");
// }

// early return------------------------------

//-------------First class functions -----------

// First class functions: functions are treated like normal values (without function name)

// function greet(val){
//     val();
// }

// function sayhi(){
//     console.log("hi");
// }

// greet(sayhi);


// If a function can do these 3 things, it's first-class:

// 1️⃣ Stored in a variable

// const great = function() {
//   console.log("Hello");
// };


// 2️⃣ Passed to another function

// function run(fn) {
//   fn();
// }

// run(greet);

// 3️⃣ Returned from a function

// function createGreet() {
//   return function() {
//     console.log("Hello");
//   };
// }

//--------------Higher Order Functions -----------------------
// Functions that can either accept another function as a parameter or return a function.


// case 1 : accept a function as a parameter
// const great = function() {
//   console.log("Hello");
// };

// function hof(val){
//     val();
// }

// hof(great);

// case 2 : return a function

// function hofreturn(){
//     return () =>{
//         console.log("this is case 2");
//     }
// }

// here hofreturn() returns a function, so that function need to be called again
// hofreturn()();

// -------------- Pure vs Impure functions ---------------------

// pure function : which changes value that is present outside the function

// let a = 12;

// function test(){
//     console.log("a value remained", a);
// }

// test();
// test is pure function , it didn't modify a value

// function trail(){
//     a++;
//     console.log("a value changed", a);
// }

// trail();
// trail is impure function, it modified a value

// -------------------- CLOSURES -------------------------------------

// Closures are the funtion that returns another function, 
// this return function always use a variable that is present in closure function


function trial(){
    let a = 12;
    return function(){
        console.log(a);   
    }
}

// here, the returning function is using a variable which is present in trail function

// -------------------- CLOSURES VS HOF -------------------------------

// A function that returns another function is a Higher-Order Function.
// It becomes a closure when the returned function captures 
// and uses variables from its lexical scope (outer function).


// -------------------- LEXICAL SCOPING (Physical Existance) -----------------------------

// function test1(){
//     let a = 12;
//     function test2(){
//         let b = 2;
//         function test3(){
//             let c = 4;
//         }
//     }
// }

// a can be accessed in the entire test1 function. (a can be accessed by test1, test2, test3)
// b can be accessed in the entire test2 function. (b can be accessed by test2, test3)
// c can be accessed in the entire test3 function. (c can be accessed by test3)


//------------------ Immediately Invoked Function Expression (IIFE) -----------------------
// Function that runs intantly

// (function(){
//     console.log("IIFE");
// })();


//---------------- HOISTING IN FUNCTION DECLARATION AND EXPRESSION ----------------------
//------------Functions Declaration allow full hoisting

// test();

// function test(){
//     console.log("testing hoisting in declaration");
// }


//---------Function Expression doesn't hoisting, (let/const)later goes to TDZ ---------
//----- var allows partial hoisting
// test1();

// let test1 = function(){
//     console.log("testing hoisting in expression");
// }

//----------BMI calculator -------------------

// function bmi(wt, ht){
//     return wt/(ht*ht);
// }

// console.log(bmi(60, 1.8).toFixed(2));

//-------- Reusable Discount Calculator (CLOSURES) -----

// function discountCalculator(discount){
//     return function(price){
//         return price - (price * (discount/100));
//     }
// }

// let discount = discountCalculator(10);

// console.log("discounted price", discount(200));

// -------------------- COUNTER -----------------------

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// let firstcount = counter();

// console.log(firstcount());
// console.log(firstcount());
// console.log(firstcount());


// for a normal function, once the function ends, the data inside doesn't exists anymore. 
// But in closuer, the variable data is kept hold

// let secondCount = counter();
// console.log(secondCount());

// here we freshly called the count function, so it again goes from start

//---------- Pure function that transforms a value -------//

// let a = 2;

// function trail(val){
//     return val*2;
// }

// console.log(trail(a), a);

// trail function didn't change a value

//----------IIFE for variable isolation --------------------//

// (function(){
//     const password = "secret";
//     console.log(password);
// })();

// console.log(password);

// we can't access password as it is inside IIFE

//-------------------------------------------------------------
// Arraw function vs function
// difference is this keyword (object creation), 
// arrow function shouldn't be used in objects because it arrow function can't hold this inside the object.

//-------------------------------------------------------------

// function hoisting vs tdz
// functions allow full hoisting, but variables can't (function declaration)
// var - hoisting - undefined
// let/var/const - tdz

//---------------------
