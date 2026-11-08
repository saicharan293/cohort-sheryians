## 1. How to Run Script Outside the Browser

- Normally, JavaScript runs inside a browser.
- To run JavaScript **outside the browser**, we use **Node.js**.
- Node.js provides a runtime environment to execute JS on a computer/server.

**Example:**

```bash
node app.js

```

---

## 2. What Are Packages

- **Packages** are reusable pieces of code written by other developers.
- They help avoid writing everything from scratch.
- Examples: `express`, `nodemon`, `mongoose`

---

## 3. How to Install Packages

- Node.js uses **npm (Node Package Manager)**.
- First initialize a project:

```bash
npm init -y

```

- Install a package:

```bash
npm install express

```

- Install as a development dependency:

```bash
npm install nodemon --save-dev

```
---

## 4. Difference Between Installing Packages With and Without `npm init -y`

There are two ways to start a Node.js project.

### Method 1: With `npm init -y`

```bash
npm init -y
npm install express
```

**What happens?**

- `npm init -y` creates a `package.json` file before installing Express.
- `npm install express` installs Express inside the `node_modules` folder.
- Express is recorded as a dependency inside `package.json`.
- A `package-lock.json` file is also created.

### Method 2: Without `npm init -y`

```bash
npm install express
```

**What happens?**

- We directly install Express without explicitly initializing the project.
- Modern npm versions generally create a basic `package.json` automatically.
- Express is installed inside the `node_modules` folder.
- Express is recorded as a dependency inside `package.json`.
- A `package-lock.json` file is also created.

### Main Differences

| With `npm init -y` | Without `npm init -y` |
|---|---|
| Project is explicitly initialized first. | Project initialization is skipped explicitly. |
| `package.json` is created before installation. | npm generally creates it during installation. |
| Default project details are generated. | npm uses default project details when creating the file. |
| Packages are installed afterward. | Packages are installed directly. |

**Important Points:**

- `npm init -y` is not mandatory for installing or running Express.
- Both methods can run an Express server successfully.
- `package.json` is important for managing dependencies, project details, and scripts.
- If `package.json` is missing, Node.js can still execute the application if Express is installed and accessible through `node_modules`.

**Conclusion:** `npm init -y` initializes the project explicitly, whereas installing Express directly allows npm to handle the initial project setup automatically in modern npm versions.

---

## 5. How to Use Packages

- Installed packages are used with `require()` or `import`.

**Example:**

```jsx
const express =require("express");

```

- The package functionality can now be used in the file.

---

## 6. What Is a Server

- A **server** is a program that:
    - Listens for client requests
    - Processes those requests
    - Sends back responses
- Servers usually run on a **port number** (e.g., 3000).

---

## 7. Create Server with Express (Basic Code)

### Step 1: Install Express

```bash
npm install express

```

### Step 2: Basic Server Code

```jsx
const express = require("express");

const app = express();



// server listen
app.listen(3000,() => {
console.log("Server started on port 3000");
});

```

### Step 3: Run Server

```bash
node index.js

```

