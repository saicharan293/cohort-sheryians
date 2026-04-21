# 📘 OOPs in JavaScript
---

## 🧠 What is an Object?

An **object** is used to group related properties and values.

```js
const user = {
    userName: "ABC",
    age: 24,
    hobby: "playing cricket"
};
```
_👉 Objects are useful for small data grouping._

### ⚠️ Limitation of Objects
- Not reusable
- No structure for creating multiple similar objects
- Hard to scale for large applications

👉 Solution: Use Classes

# 🏗️ 2. Classes

A **class** is a blueprint used to create multiple objects.

### 🍪 Real-world Example (Biscuit Shaper)
- Biscuit mold creates same-shaped biscuits
- All biscuits look identical
#### 👉 Class = Biscuit Shaper
#### 👉 Objects = Biscuits

---

### ⚙️ 3. Constructor

A constructor is a special method used to initialize object values.
```js
class BiscuitShaper {
    constructor(name, color, shape) {
        this.biscuitName = name;
        this.color = color;
        this.shape = shape;
    }

    printBiscuit() {
        console.log(`${this.biscuitName} biscuit is ready`);
    }
}

// Creating objects
let b1 = new BiscuitShaper("Bourbon", "cream", "rectangle");
let b2 = new BiscuitShaper("Oreo", "black", "round");

b1.printBiscuit();
```

🔑 Key Points
* Class → blueprint
* Object → instance of class
* Constructor → initializes values
* this → refers to current object
* new → creates object

---

## 📚 4. Class Example (Book)

Let’s take a more practical example using a **Book**.

```js
class Book {
    constructor(subject, price, color, author) {
        this.subject = subject;
        this.price = price;
        this.color = color;
        this.author = author;
    }

    bookMark() {
        console.log(`${this.subject} bookmarked`);
    }

    read() {
        console.log(`Reading ${this.subject}`);
    }

    details() {
        console.log(
            `Book: ${this.subject}, Author: ${this.author}, Price: ${this.price}`
        );   
     }
}

// Creating objects
let b1 = new Book("moral", 120, "blue", "abc");
let b2 = new Book("cse", 560, "red", "JK");

b1.details();
b2.details();
```
---

#### **Note:** Is This a Parameterized Constructor? ➡️ Yes it is.
---

## 🧠 Understanding `this` and Constructor

### 🔹 `this` Keyword

- `this` refers to the **current object (instance)**  
- Inside a constructor, `this` is used to assign (`binds`) values to the object  

```js
this.subject = subject;
```
### 🔹 Constructor

- `constructor` is a function that runs automatically on object creation (`new`).
- Used to initialize object properties
---
 
## 🧠 Prototypes in JavaScript

### 📌 Example

```js
class User {
    constructor() {
        this.userName = "sai";
        this.rollNo = 11;
        this.email = "shubha@gmail.com";
    }
}

// Adding methods using prototype
User.prototype.diet = function () {
    console.log("eat good food");
};

User.prototype.exercise = function () {
    console.log("do it");
};

let h1 = new User();
let h2 = new User();

h1.diet();
```

## 🔍 What is Prototype?
* Every JavaScript object has a prototype
* Prototype acts like shared memory
* Methods defined on prototype are shared among all objects

### 🔹 Simple Idea

👉 Prototype = **shared space for methods**

Think like this:

- You have 100 users  
- All users can **eat** and **exercise**  
- Instead of storing these functions 100 times ❌  
- Store them **once** and share ✅  

👉 That shared place is called **prototype**

---

## 🏠 Real-Life Example

Imagine a **gym**

- Each person = object  
- Gym trainer = shared knowledge  

👉 Everyone goes to the same trainer to learn  

✔️ Trainer = Prototype  
✔️ People = Objects  

---

## 💻 Your Code Example

```js
class User {
    constructor() {
        this.userName = "sai";
        this.rollNo = 11;
    }
}

User.prototype.diet = function () {
    console.log("eat good food");
};
```
## 🧠 Prototype (Feynman Method – Super Simple)

### 🔹 What is Prototype?

👉 Prototype = **shared place where methods live**

If an object doesn’t have something, JavaScript looks in the **prototype**.

---

## 🧩 Simple Idea

- Object → has its own data  
- Prototype → has shared methods  

---

## 🔍 How JavaScript Works

When you call:

```js
h1.diet();
```

## ⚠️ Bugs When Storing Properties in Prototype

### 🔹 Problem

👉 Prototype is **shared memory**  
👉 So if you store properties there, **all objects share the same data**

---

## 💥 Bug 1: Shared Data Issue

```js
function User() {}

User.prototype.name = "sai";

let h1 = new User();
let h2 = new User();

console.log(h1.name); // sai
console.log(h2.name); // sai
```
## 💥 Bug 2: Confusing Override
```js
h1.name = "chandan";

console.log(h1.name); // chandan
console.log(h2.name); // sai
```
### 👉 Now:

* h1 has its own property
* h2 still uses prototype


## 💥 Bug 3: Dangerous with Arrays/Objects
```json
function User() {}

User.prototype.hobbies = [];

let h1 = new User();
let h2 = new User();

h1.hobbies.push("cricket");

console.log(h2.hobbies); // 😱 ["cricket"]
```
#### 👉 WHY?
* Array is shared in prototype
* Both objects use same reference
---

# **This** keyword

👉 **`this` depends on HOW a function is called, not where it is written**

---

## 🌍 1. Global Scope

```js
console.log(this);
```
Output: 👉 Browser → window
## 2. Normal Function (ES5)

```js
function test() {
  console.log(this);
}

test();
// Output : window
```
👉 this = window (called without owner)

```js
const obj = {
  name: "Chandan",
  say: function () {
    console.log(this.name);
  }
};

obj.say();
```

👉 this = obj (obj is the owner for method)

## ❗ 4. Function Detached from Object

```js
const obj = {
  name: "Chandan",
  say: function () {
    console.log(this.name);
  }
};

const fn = obj.say;
fn();
// window
```

👉 this = window (context lost)

## 🪶 5. Arrow Function (ES6)
```js
const obj = {
  name: "Chandan",
  say: () => {
    console.log(this.name);
  }
};

obj.say();
```
* 👉 this = window
* 👉 Arrow uses creation scope, not caller

## 🔁 6. Function Inside Method
```js
const obj = {
  name: "Chandan",
  outer: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

obj.outer();
```

* 👉 this = window
* 👉 Inner function loses context

## ⚡ 7. Arrow Inside Method

```js
const obj = {
  name: "Chandan",
  outer: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj.outer();
```
* 👉 this = obj
* 👉 Arrow copies parent this

## ⏱️ 8. setTimeout Case
```js
const obj = {
  name: "Chandan",
  say: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  }
};

obj.say();
```
* 👉 this = window
* 👉 Callback called as normal function

### ✅ Fix
```js
setTimeout(() => {
  console.log(this.name);
});
```
👉 this = obj

## 🔄 9. Function Returning Function

```js
const obj = {
  name: "Chandan",
  outer: function () {
    return function () {
      console.log(this.name);
    };
  }
};

obj.outer()();
```
* 👉 this = window
* 👉 Returned function loses context

## ⚡ 10. Function Returning Arrow
```js
const obj = {
  name: "Chandan",
  outer: function () {
    return () => {
      console.log(this.name);
    };
  }
};
obj.outer()();
```

* 👉 this = obj
* 👉 Arrow locks parent this

## ❌ 11. Arrow Returning Arrow

```js
const obj = {
  name: "Chandan",
  outer: () => {
    return () => {
      console.log(this.name);
    };
  }
};

obj.outer()();
```
👉 this = window

👉 Both arrows use global this

## 📦 12. Method from Returned Object
```js
const obj = {
  outer: function () {
    return {
      name: "Inner",
      say: function () {
        console.log(this.name);
      }
    };
  }
};

obj.outer().say();
```
👉 this = returned object

### why?
```js
obj.outer()
```
returns entire object, so this = obj, next 
👉 Let’s store it:

```js
const result = obj.outer();
```

Now:

```js
result = {
  name: "Inner",
  say: function () {...}
}
```

```js
result.say();
```
👉 Who is calling say()?, 

result object (caller)

this = obj

#### ✅ Final Output
**Inner**


## ❗ 13. Detached Returned Method
```js
const fn = obj.outer().say;
fn();
```
👉 this = window

## 🚨 Common Pitfalls
* ❌ Arrow as object method
* ❌ Returning normal function
* ❌ Passing method as callback
* ❌ Nested normal functions

## Call Apply Bind

```javascript

const obj = {
  name: "Chandan",
  say: function () {
    console.log(this.name);
  }
};

const fn = obj.say;
fn(); // ❌ this = window
```

### 👉 Problem:

Function lost its owner → this became wrong

### 🎯 Solution

👉 We need a way to manually control this

👉 That’s exactly what:

* call
* apply
* bind
---

## 🔧 1. call()
📌 Definition

👉 Calls a function immediately and sets this

#### 🧪 Example
```javascript
const obj = { name: "Chandan" };

function say(age) {
  console.log(this.name, age);
}

say.call(obj, 25);
// Chandan 25
```

#### Note: 
Normal function has this value as window, to attach an object to it, we use call(object, --arg1)

“Hey function, run now, and treat obj as your owner”.
---

## 🔧 2. apply()

👉 Same as call, but arguments are passed as array

```javascript
fn.apply(thisArg, [arg1, arg2])
```

### 🧪 Example

```javascript
say.apply(obj, [25]); //Chandan 25
```
---
### 🧠 Difference from call
| Method | Arguments       |
| ------ | --------------- |
| call   | comma separated |
| apply  | array           |

## 🔧 3. bind()

### 📌 Definition

* 👉 Does NOT call immediately
* 👉 Returns a new function with fixed **this**

### ✅ Syntax
```javascript
const newFn = fn.bind(thisArg);
newFn();
```

### 🧪 Example
```javascript
const boundFn = say.bind(obj);
boundFn(25); //Chandan 25
```

🔥 Key Differences

| Feature              | call   | apply | bind         |
| -------------------- | ------ | ----- | ------------ |
| Executes immediately | ✅      | ✅     | ❌            |
| Returns function     | ❌      | ❌     | ✅            |
| Arguments            | normal | array | normal later |


## Class Expression

“Class must be declared before you use it — no exceptions”

```javascript
let Animal = class {
    constructor(){
        this.name = "dog";
        this.breed = "Husky";
    }
}

let animal1 = new Animal();
```
### 🎯 Difference in ONE LINE
👉
* var → usable before (but undefined)
* class → NOT usable before (error)

# 🧠 JavaScript Hoisting (with Classes)

---

## 🔑 What is Hoisting?

👉 JavaScript moves declarations to the top before execution

BUT…

👉 Not all declarations behave the same way

---

## 🌍 Execution Phases

1. **Creation Phase (Hoisting)**
   - JS scans code
   - Registers variables, functions, classes

2. **Execution Phase**
   - Runs code line by line

---

## 🟡 `var` Hoisting

```js
console.log(x); // undefined
var x = 10;
```

## 🔵 Class Hoisting

```javascript
const a = new Animal(); // ❌ Error
class Animal {}
// ReferenceError: Cannot access 'Animal' before initialization
```

👉 Behavior:

* Hoisted but NOT initialized
* Same as let / const
* Exists in TDZ

### 🔁 Class Expression with let

```js
let Animal = class {};
const a = new Animal(); // ReferenceError
```
* 👉 Same behavior as class declaration
* 👉 TDZ applies

### 🔁 Class Expression with var
```js
var Animal = class {};
const a = new Animal(); // TypeError: Animal is not a constructor
```

👉 Hoisted as:
```js
var Animal = undefined;
```

### 🧠 Error Comparison Table

| Scenario                          | Error Type     | Reason            |
| --------------------------------- | -------------- | ----------------- |
| Access `let` before declaration   | ReferenceError | TDZ               |
| Access `const` before declaration | ReferenceError | TDZ               |
| Access `class` before declaration | ReferenceError | TDZ               |
| Use `var` before declaration      | No error       | undefined         |
| `new undefined()`                 | TypeError      | not a constructor |
---

## Inheritance in **JavaScript**

> Inheritance = Objects reusing properties/methods of other objects via links (not copying).

* If an object doesn’t have something → it looks up the chain
* This chain is called the prototype chain


### 🧩 Key Concepts
### 1. __ proto __
* Actual hidden link between objects
* Points to another object

```js
dog.__proto__ = animal;
```


### 2. prototype
> Property of constructor functions / classes
> Used to define shared methods
```js
function User() {}
User.prototype.sayHi = function() {};
```

### Object Creation
```js
function User(name) {
  this.name = name;
}

const u1 = new User("A");
```
__Internally...__
```js
u1.__proto__ === User.prototype
```

### 🔍 Property Lookup

When accessing:
```js
u1.sayHi();
```
JS does:

1. Check u1 → ❌
2. Check User.prototype → ✅
3. Execute method


```javascript
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}
```

### 🔗 What does extends do?

#### This line:

```js
class Dog extends Animal
```
#### 👉 secretly creates this link:

```js
Dog.prototype.__proto__ === Animal.prototype
```

### 🔁 Method Lookup Chain
```js
d → Dog.prototype → Animal.prototype → Object.prototype
```

### 🧪 So this works:
```js
const d = new Dog();

d.bark(); // from Dog
d.eat();  // from Animal
```

### 🔥 Method Overriding
```js
class B extends A {
  say() {
    console.log("B");
  }
}
```

Rule:
> JS stops at the first match in the chain

## JavaScript `super`

## Core idea

`super` is a way to access the parent’s constructor or methods.

It is used inside a child class to:

- Call the parent constructor.
- Call parent methods.

## Where `super` is used

| Context | Purpose |
|---|---|
| Constructor | Call parent constructor |
| Method | Call parent method |

## 1. `super()` in constructor

### Why it exists

When you use `extends`, the child class depends on the parent.

So JavaScript requires this rule:

> Before using `this`, call the parent constructor.

### Example

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal constructor
    this.breed = breed;
  }
}

const d = new Dog("Tommy", "Labrador");
console.log(d);
```

### 🔍 What happens internally
```js
super(name)
```
👉 is basically:

“Run Animal constructor with this”

⚠️ Important Rule

❗ You MUST call super() before using this

### ❌ Wrong
```js
class Dog extends Animal {
  constructor(name) {
    this.name = name; // ❌ Error
  }
}
```
### ✅ Correct
```js
class Dog extends Animal {
  constructor(name) {
    super(name); // ✅ required
    this.name = name;
  }
}
```

### ⚡ 2. `super.method()` in Methods
---

✅ Why it exists

When you override a method but still want parent behavior.

### 🧪 Example
```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // 👈 call parent method
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
```

### ✅ Output
```js
Animal speaks
Dog barks
```

🔍 What super.speak() means

👉 It means:
```js
Animal.prototype.speak.call(this)
```


### ⚠️ Key Insight

> super does NOT change this

### 🧪 Example
```js
class A {
  show() {
    console.log(this.value);
  }
}

class B extends A {
  value = 20;

  show() {
    super.show();
  }
}

const b = new B();
b.show();
```
### ✅ Output
```js
20
```

### 🔍 Why?
* super.show() comes from A.prototype
* But this = b
* So this.value = 20
---

### 🧠 4. super in Arrow Functions (Important Edge Case)
---
⚠️ Arrow functions don’t have their own this

But they inherit this and super from surrounding scope

### 🧪 Example
```js
class A {
  say() {
    console.log("A");
  }
}

class B extends A {
  say() {
    const arrow = () => super.say();
    arrow();
  }
}

new B().say();
```
✅ Output
```js
A
```