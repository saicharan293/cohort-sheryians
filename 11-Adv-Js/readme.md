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
