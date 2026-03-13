//------------------- ARRAYS ----------------------

// JS allows to store different data types into arrays

// let marks = [1, 2, 3, 4, 5];

// each data has an index for accessing, starting with index 0
// console.log(marks[0]);

// modify array
// marks[0] = 2;
// console.log(marks[0]);

//-------------------PUSH -------------------------
// the values are added at the end of the array

// marks.push(23);

//------------------POP --------------------------
// the values are removed at the end

// marks.pop();

//-----------------SHIFT -------------------------
// first value of the array gets deleted

// marks.shift();

//------------------UNSHIFT ----------------------
// it will add data at the start

// marks.unshift(2);

//-------------------SPLICE ---------------------
// it will delete number/s from the given index based on count of deletion

// marks = [1, 2, 3, 4]
// start index = 2, delete count = 1, 3 is deleted permanently
// marks.splice(2,1);
// marks = [1, 2, 4]

//--------------------SLICE -------------------
// returns copy of a portion(start index to end index) of array without disturbing original array

// let arr = [ 1, 2, 3, 4, 5];

// let newArr = arr.slice(1, 2); 
// item 3 is copied to new array

//------------------REVERSE --------------------
// it will reverse the elements order permanently

// arr.reverse()

//----------------- SORT -----------------------
// it will sort the arr to Ascending order (a - b), for descending order (b - a)

// let arr = [ 6 , 2, 5, 7, 3];

// arr.sort();

// for numbers
// let sr = arr.sort(function(a, b){
//     return a - b
// })

//----------------- for each -------------------------
// it applies function on all items of array

// let arr = [ 3, 23, 2, 53, 33]

// arr.forEach(function(val){
//     console.log(5+val);
// })

//---------------- map -------------------------------
// map need to be used when you need to return a new array or boolean values from the existing array
// if function fails to apply on any element, it will return undefined

// let arr = [ 3, 23, 2, 53, 33];

// let newArr = arr.map(function(val){
//     return val>12;
// })

//-----------------FILTER -------------------------
// filter need to be used, if only filtered values need to be return in a new array

// let arr1 = [ 3, 23, 2, 53, 33];
// let newArr1 = arr1.filter(function(val){
//     return val>10;
// })

// --------------------- REDUCE ---------------------
// to return only one value from the list of items in the array
// accumulator is defined default, whose value is remembered on continuous iterations
// and returned value is stored in accumulator

// let arr = [ 1, 2, 3, 4, 5];

// let ans = arr.reduce(function(accumulator, val){
//     return accumulator+val
// }, 0);

//---------------------- FIND ----------------------
// it returns the value that satisfies the condition

// let arr = [1, 2, 1, 3, 4, 5];

// let num = arr.find(function(val){
//     return val === 1;
// });

//-------------------- SOME --------------------------
// it returns the boolean result as true, if atleast one item satisfies condition

// let arr = [10, 30, 32, 90];

// let res = arr.some(function(val){
//     return val > 32;
// })


//-------------------- EVERY ----------------
// it returns boolean result as true, only if all the items satisfies condtion

// let arr = [10, 30, 32, 90];

// let eve = arr.every(function(e){
//     return e > 5
// })

// -------------------DESTRUCTURING -------------------

// let arr= [ 1, 2, 3, 4, 5];

// 1, 2 get copied to a, b
// 4 get copied to d, with gap for 3
// let [a,b, ,d] = arr;

//------------------- SPREAD (arrays, object) ------------------------

// let arr= [ 1, 2, 3, 4, 5];

// to copy the values in a new array 
// without referencing to the parent array
// let arr2 = [...arr];



//------------- QUESTIONS ---------------------
// ----------Create an array with 3 fruits and print second fruit

// let fruits = ['Apple', 'Banana','Mango'];

// console.log(fruits[1]);

//------------ Add "Mango" at the end and "Pineapple" at the beginning of this array--------

// let fruits = ["Apple","Banana"];

// fruits.push("Mango");
// fruits.unshift("Pineapple");

//----------- Replace "Banana" with "Kiwi"-------------------

// let fruits = ["Apple","Banana"];
// fruits[2]="Kiwi";
// fruits.pop();
// fruits.push("Kiwi")

// -------------- Remove the last item from this array using a method: --------

// let numbers = [1, 2, 3, 4];
// numbers.pop();

//--------------- Insert "Red" and "Blue" at index1 in this array --------

// let colors = ["Green", "Yellow"];
// colors.splice(1, 0, "Red", "Blue");

//--------------- Extract only the middle 3 elements from this array ------------

// let items = [1, 2, 3, 4, 5, 6];
// let newItems = items.slice(1, 4);

//-------------- Sort the array alphabetically and then reverse it ---------------

// let names = ["Zara", "Arjun", "Mira", "Bhavya"];

// only .sort() for characters
// names.sort().reverse();

//-------------------use map to square each number ---------------------------

// let arr =[1, 2, 3, 4];
// let sqarr = arr.map(function(e){
//     return e*e;
// })

//-----------------use filter to get numbers > 10 -----------------------

// let arr = [5, 12, 8, 20, 31];
// let newarr = arr.filter((val)=>{
//     return val > 10
// })

// ----------------- use reduce to find the sum ----------------------

// let arr = [10, 20, 30];
// let res = arr.reduce(function(accumulator, val){
//     return accumulator+val;
// },0)

//----------------- get first number less than 10 -----------------------

// let arr = [12, 15, 3, 8, 20];
// let first = arr.find(function(val){
//     return val<10;
// })

// ---------------- check if any student has scored below 35 -------------

// let arr = [45, 60, 28, 90];

// let ans = arr.some(function(val){
//     return val<35;
// })

//------------------check if all are even numbers ----------------------

// let arr = [2, 4, 6, 8, 10];
// let ans = arr.every(function(val){
//     return val%2===0;
// })

// --------------- get first and last name -----------------

// let fullname = ["sai", "Amudala"];
// let [first, last] = fullname;


//---------------- merge two arrays ------------------

// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];


//------------------- add "India" to the start of this array using spread----------

// let countries = ["USA","UK"];
// countries = ["India", ...countries];

//---------------------clone the array but not reference  -------

// let arr = [1, 2, 3];
// let arr2 = [...arr];