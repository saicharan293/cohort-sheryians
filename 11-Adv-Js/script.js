// SECTION1: Objects and OOPS

//1. Create a user object that stores name and email and has a login method which prints "User logged in"

let user = {
    name : "Shiva",
    email : "Shiva@gmail.com",
    login(){
        console.log("User logged in")
    }
};
// user.login();

//2. Imagine you have 5 users. 
// First, think how you would manage them without using a class. 
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.


let user1 = {
    name : "Shiva",
    email : "Shiva@gmail.com",
    login(){
        console.log("User logged in")
    }
};

let user2 = {
    name : "Shiva",
    email : "Shiva@gmail.com",
    login(){
        console.log("User logged in")
    }
};

let user3 = {
    name : "Shiva",
    email : "Shiva@gmail.com",
    login(){
        console.log("User logged in")
    }
};

let user4 = {
    name : "Shiva",
    email : "Shiva@gmail.com",
    login(){
        console.log("User logged in")
    }
};

let user5 = {
    name : "Shiva",
    email : "Shiva@gmail.com",
    login(){
        console.log("User logged in")
    }
};


// using class

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log("class User logged in");
    }
}


let newUser = new User("harsh", "h@h.in");
// newUser.login();


//3. Create a product object that stores name and price and has a method which returns the final price after discount

let product = {
    name : "tee-shirt",
    price : 1200,
    finalPrice: function(discount){
        return this.price - discount;
    }
}

// console.log(product.finalPrice(20));

// SECTION 2: Classes and Objects

// 1. Create a Car class with following: 
// brand, 
// speed, 
// a drive method that prints the car brand and speed

class Car{
    constructor(carName, speed){
        this.carName = carName;
        this.speed = speed;
    }

    drive(){
        console.log(`${this.carName} is at ${this.speed} kmph`);
    }
}

// 2. Create two different car objects from the same class and verify that their data is different.

let car1 = new Car('BMW', 1200);
// car1.drive();

let car2 = new Car("BENZ", 1300);
// car2.drive();

// SECTION 3: Constructor and this keyword

// 1. Create a Student class whose constructor accepts name and roll number. 
// Add a method introduce that prints both values

class Student{
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
    }
    introduce(){
        console.log(`${this.roll} - ${this.name}`);
    }
}

// let st1 = new Student("sai", 11);

// 2. Inside the constructor, set values using this. 
// Then try removing this and notice what error occurs and why.
let st1 = new Student("sai", 11);
// st1.introduce();

// 3. Create an object with two methods: 
// One method using normal function, 
// another method using an arrow function

let obj = {
    sayName: function(){
        console.log(this);
    },
    sayArrow: ()=>{
        console.log(this);
    }
}

// 2. Check this value in both the functions
// obj.sayName();
// obj.sayArrow();

// SECTION 4: Constructor Functions and printsrototypes

// 1. Create a User constructor function (do not use class syntax).

// es5

function UserCon(){
    this.name = "sai";
}

// let user1 = new UserCon();

// 2. Add a login method in two ways: 
// First, inside the contructor. 

// function User1(){
//     this.name = "sai";
//     this.loggedIn = function(){
//         console.log("this is logged in");
        
//     }
// }

// let us1 = new User1();

// Then, move the method to the prototype.
// function User1(val){
//     this.name = val;
// }

// User1.prototype.loggedIn = function(){
//     console.log("logged in");   
// }
// let us1 = new User1();

// Create two User objects and compare their login methods using equiality. 
// Explain why the result is true or false

function User1(){
    this.name = "sai";
    this.loggedIn = function(){
        console.log("this is logged in");
        
    }
}

// let us1 = new User1("first");
// let us2 = new User1("second");
// false, because, each object has its own logged in, so false
// true, if function is in prototype

// SECTION 5: Call, apply, bind

// 1. Create a function that prints this.name

function first(a, b){
    console.log(this.name, a, b);
}

// 2. Create an object that contains a name property
let myName = {name: "sai"}

// 3. Use call to run the function using the object
// first.call(myName);

//Use apply to run the function using the object
// first.apply(myName, [1, 2]);

// Use bind to run the function using the object
// let fnc = first.bind(myName, 1, 2);