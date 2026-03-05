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
