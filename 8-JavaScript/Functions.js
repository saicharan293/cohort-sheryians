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

function dec(){
    console.log("Function Declaration");
    
}

// Function Expression

let fnc = function(){
    console.log("Function Expression");
}

// It may not make sense, but JS itself doesn't make sense. so, don't complain

// Fat Arrow Functions () fat, => arrow

let cnp = () => {
    console.log("Fat arrow function");
}

//--------------------ARGUMENTS (function call) AND PARAMETERS (function definition)---------------------------

function dance(naach){
    console.log(`${naach} is dancing`);
}

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
add();

// we can have default values to the parameters in the function definition, 
// if in case of function call doesn't provide any value in its arguments
function add1(v=0,p=0){
    console.log(v+p);
}

//------------- REST AND SPREAD OPERATORS-------

// function any(...val){
//     console.log(val);
    
// }

// any(1, 2, 3,4, "sai");