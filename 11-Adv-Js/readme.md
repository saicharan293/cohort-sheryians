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