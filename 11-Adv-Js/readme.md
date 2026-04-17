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
