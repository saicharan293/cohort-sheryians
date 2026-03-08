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

// --------------------Q2: print 10 to 1 using while--------------
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

// --------------------Q3: print even numbers from 1 to 20 using for--------------

// for(let i = 1; i < 21; i++){
//     if(i%2==0) console.log(i);
// }

// --------------------Q4: print odd numbers between 1 to 15 using while--------------

// let i = 15;

// while(i>0){
//     if(i%2!==0) console.log(i);
//     i++;
// }

// --------------------Q5: print multiplication table of 5------------------
// let n = 5;
// for (let i = 1; i < 11; i++ ){
//     console.log(`${n} * ${i} = ${n * i}`);
// }

// --------------------Q6: Find sum of 1 to 100----------------------------------

// let sum = 0;
// for (let i = 1; i < 101; i++){
//     sum += i;
// }

// console.log(sum)

// --------------------Q7: Print all the numbers between 1 to 50 that are divisible by 3------------------

// for (let i = 1; i < 51; i++){
//     if(i%3 == 0) console.log(i);
// }

// --------------------Q8: Count how many numbers between 1 and 100 are divisible by 5 and 3------------------

// let count = 0;
// for (let i = 1; i < 101; i++){
//     if(i%3==0 && i%5==0) count++;
// }

// console.log(count);

// ------------------------------------break and continue -----------------------
// -------------------------Q1 Stop at First Multiple of 7----------------------

// Write a loop from 1 to 100 that 
// Prints each number 
// Stops completely when it finds the first number divisible by 7

// for(let i = 1; i<101; i++){
//     console.log(i);
//     if(i % 7 == 0) {
//         break;
//     };
// }

//-------------------------- Q2 Skip multiple of 3---------------------------------

// Write a loop from 1 to 20 that: 
// skips numbers divisible by 3 and 
// prints all others

// for(let i = 1; i < 21; i++){
//     if(i%3==0) continue;
//     console.log(i);
// }

// ---------------- Q3 Print first 5 odd numbers between 1 to 100---------------------

// let counter = 0;
// for (let i =1 ; i<101; i++){
//     if(i%2===1){
//         counter++;
//         console.log(i);
//     }
//     if(counter == 5) break;
// }

// -------------------------------------------------------

// let age = prompt("age cheppu");
// if (age === null) {
//     console.error("you cancelled it");
// }
// else {
//     age = age.trim();
//     if (!age) console.log("neat ga cheppu...");
//     else if(isNaN(age)){
//         console.error("arey anna, number enter chey");
//     }
//     else{
//         age = Number(age.trim());
//         console.log("idi oka number")
//     } 
// }

//-------------------------ASSIGNMENT-----------------------
// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Enter your age")
// if(age === null) alert("you cancelled it");

// else{
//     age = age.trim()

//     if(age === "" | isNaN(age)) alert("You need to enter a number");
//     else{
//         age = Number(age.trim())
//         if(age >= 18) alert("Eligible");
//         else alert("Not eligible");
//     }
// }

// -------------------------------
// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i = 1; i < 11; i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }

//---------------------------------------------------------
// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let counter = 0;
// for (let i = 1; i < 16; i++){
//     if(i>8) counter++;
// }

// console.log(counter);
//---------------------------------------------------------

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let CorrectPassword = "user123";

// let userPass = prompt("Enter your password");

// if(userPass === null) alert("You cancelled it");

// else{
//     userPass = userPass.trim();
//     if(userPass === "") alert("You need to enter your password");
//     else if(userPass === CorrectPassword) alert("You are Authorized");
//     else alert("Wrong Password")
// }

//---------------------------------------------------------
// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let correctPass = "user123";
// let counter = 3;

// while(counter>0){
//     let userPass = prompt("Enter your password");
//     if(userPass === null){
//         alert("You cancelled it");
//         break;
//     } 

//     userPass = userPass.trim();

//     if(!userPass) {
//         alert("You need to enter password");
//         continue;
//     }
//     if(userPass === correctPass){
//         alert("You are authorized")
//         break;
//     } 
//     counter--;
//     alert(`you entered wrong password, you have ${counter} choices left`);
// }

// if(counter==0) alert("Account locked")

// ---------------------------------------------------------------
