// Loops and Conditionals

// Conditionals : controls the flow of program execution

// if - else

// let a = 1;

// if(a > 10){
//     console.log("hello");
// } else {
//     console.log("bye");
    
// }
//-------------------------

// if else-if else

// if(loggedIn && admin){
//     // some admin code
// } else if(loggedIn){
//     //normal user code
// } else{
//     // invalid login code
// }

//-------------------------
// switch case => accepts value

// switch(2){
//     case 1:
//         break;
//     case 2:
//         console.log("this case will run as value is 2");
//         break;
//         // if break not applied, the below cases will run until default if no break applied
//     default:
// }

// ----------------------------

// early return pattern

// function getVal(val){
//     if (val < 25) return 'D';
//     else if (val < 50) return 'C';
//     else if (val < 75) return 'B';
//     else return 'A';
// }

// getVal(50);

//-----------------------------
// student grade calculator

// write a function getGrades(score) that 
// Takes a student marks (0 to 100) 
// Returns the grade based on 
// 90-100 A+ 
// 80-89 A 
// 70-79 B 
// 60-69 C 
// 33-59 D 
// 0-32 Fail 
// other Invalid marks


// function getGrades(score){
//     if(score<33) return 'Fail';
//     if (score < 60) return "D";
//     if (score < 70) return "C";
//     if (score < 80) return "B";
//     if (score < 90) return "A";
//     if (score < 100) "A+";
//     return "Invalid Marks";
// }

// var res = getGrades(65);
// console.log(res);


// -----------------------------------------
// Rock paper scissor

// function rps(u, c){
//     if(u == c) return "draw";
//     if(u == "rock" && c == "scissor") return "user";
//     if(u == "scissor" && c == "paper") return "user";
//     if(u == "paper" && c == "rock") return "user";
//     else return "computer"
// }

// let res = rps("rock","paper");

// console.log(res);

//---------------------------------------------

// Fall through in switch case
// let x = 2;

// switch(val){
//     case 2:
//         console.log("Two")
//     case 3:
//         console.log("Three");
// }

// output: Two, Three (bug if break is missing)

// ---------------------------------------

// Loops
// for - start point, end point, condition to stop

// for(let i = 1; i < 101; i++){
//     // body
//     console.log(i);
// }

// while - start point, where to stop

// start;
// let i = 1
// while(i<11){
//     //body
//     console.log(i)
// }

// do while - it will run atleast once

// start

// let i = 1;

// do{
//     console.log(i);
//     i++;
// }
// while(i<5);
// end condition

// break - exit the loop

// for(let i = 1; i < 5; i++){
//     if(i == 3) break;
//     console.log(i);
// }

// continue - skip the current iteration (further code will not be executed)
// for ( let i = 1; i < 6; i++){
//     if(i == 2) continue;
//     console.log(i);
// }

// ---------------------------------------------------

// practice questions
// --------------------Q1: print 1 to 10--------------

// for ( let i = 1; i < 11; i ++){
//     console.log(i);
// }

// --------------------Q1: print 10 to 1 using while--------------
// using while

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// using for

// for(let i=10; i > 0; i--){
//     console.log(i);
// }

// --------------------Q1: print even numbers from 1 to 20 using for--------------

// for(let i = 1; i < 21; i++){
//     if(i%2==0) console.log(i);
// }

// --------------------Q1: print odd numbers between 1 to 15 using while--------------

let i = 15;

while(i>0){
    if(i%2!==0) console.log(i);
    i++;
}