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
const great = function() {
  console.log("Hello");
};

function hof(val){
    val();
}

// hof(great);

// case 2 : return a function

function hofreturn(){
    return () =>{
        console.log("this is case 2");
    }
}

// here hofreturn() returns a function, so that function need to be called again
hofreturn()();

