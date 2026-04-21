// SECTION 1: OOPS Thinking with Objects

// 1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

let laptop = {
    brand : "hp",
    price : 20000,
    lapstart: function(){
        console.log("Laptop started")
    }
}

// laptop.lapstart();

// 2.	Add one more method to the same object that increases the price by 10 percent.
laptop.morePrice= function(){
    console.log(this.price+(this.price*0.1))
}

// laptop.morePrice();

// 3.	Now imagine you need 10 laptops with same structure but different data.
// I can't create 10 separate objects, code will be messy

// SECTION 2: Classes and Objects (Reinforcement)
//	4.	Create a class named Employee that stores:
//name
//salary 
// Add a method showDetails that prints name and salary.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    showDetails(){
        console.log(`${this.name}, ${this.salary}`);
    }
}

let emp = new Employee("Charan", 60000);
// emp.showDetails();

// 5. Create three employee objects from the same class and verify that modifying one employee does not affect the others.
let emp1 = new Employee("Sai", 65000);
// emp1.showDetails();
let emp2 = new Employee("Shiva", 70000);
// emp2.showDetails();

// 6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?
// Because using class we can create any number of object and also can pass the data to do operations

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 8.	Inside the constructor, store both values using this.
// 9.	Add a method deposit(amount) that increases the balance.

class BankAccount{
    constructor(Hname, balance){
        this.Hname = Hname;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
}

// 10.	Create two bank accounts and deposit money into only one.
let b1 = new BankAccount("Prakash", 5000);
b1.deposit(30000);
// console.log(b1.balance);


//----------------------------------

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
let profile = {
    username : "sai",
    printName : function(){
        console.log(this.username);
    }
}
// 	12.	Call the method normally and observe the output.
// profile.printName();
// 	13.	Store the method in a separate variable and call it.
// let pr = profile.printName;
// pr();
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.
let pr = profile.printName.bind(profile);
// pr();



// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.

// function Vehicle(type, wheels){
//     this.type = type;
//     this.wheels = wheels;
//     this.describe = function(){
//         console.log(`${this.type} has ${this.wheels} wheels`)
//     }

// }

// let v1 = new Vehicle("Car", 4);
// let v2 = new Vehicle("Bike", 2);

// v1.describe();
// v2.describe();



// 	18.	Explain why the prototype approach is preferred.

function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
}

Vehicle.prototype.describe = function() {
    console.log(`${this.type} has ${this.wheels} wheels`);
};

let v1 = new Vehicle("Car", 4);
let v2 = new Vehicle("Bike", 2);

// v1.describe();
// v2.describe();

// Prototype = shared storage for all objects

//------------------

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.

function showBrand(brand){
    console.log(this.brand);
}

// 	20.	Create two different objects with brand values.
let obj1={
    brand: "bmw"
}
let obj2  ={
    brand : "Fortuner"
}

// 	21.	Use call to execute showBrand for both objects.

// showBrand.call(obj1);
// showBrand.call(obj2);

// 	22.	Explain what problem call is solving here.
// When a function is called normally, this is not bound to our object. call() lets us explicitly set this to the object we want.

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
function Introduce(city, role){
    console.log(`${this.name} is from ${city} work as ${role}`);
}

// 	24.	Create an object with a name property.
let p1 = {name : "Sai"};
// 	25.	Use apply to call introduce using the object and an array of arguments.
// Introduce.apply(p1, ["Guntakal", "Developer"]);
// 	26.	Explain in simple words how apply differs from call.
// both set this manually and call the function , but in call, arguments are passed one by one.
// but in apply, arguments are passed as an array

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.

function greet(){
    console.log("Hello, "+this.name);
}
// 	28.	Bind this function to an object and store the returned function in a variable.
let fn = greet.bind({name: "sai"});
// 	29.	Call the bound function later and observe the output.
fn()
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
// When functions are used later (like callbacks), they lose this
// bind creates a new function that can set this permanently