# React Router DOM

## 📌 What is React Router?

React Router is a library that allows us to create **different routes/pages in a React application**.

For example:

```text
/          → Home
/about     → About
/contact   → Contact
/login     → Login
```

React Router looks at the URL and decides **which component should be displayed**.

---

# 1. Install React Router DOM

Install `react-router-dom` using:

```bash
npm i react-router-dom
```

After installing it, we can use React Router features in our application.

---

# 2. BrowserRouter

In `main.jsx`, import `BrowserRouter`:

```jsx
import { BrowserRouter } from "react-router-dom";
```

Then wrap `<App />` with `<BrowserRouter>`:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Example `main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### What does BrowserRouter do?

`BrowserRouter` enables **browser-based routing** in our React application.

Think of it as:

```text
BrowserRouter
      ↓
"React, this application will use routing."
```

It allows components inside `<App />` to use React Router features.

---

# 3. Routes

Inside `App.jsx`, we create a collection of all our routes using:

```jsx
<Routes>
  ...
</Routes>
```

Import it:

```jsx
import { Routes, Route } from "react-router-dom";
```

Example:

```jsx
function App() {
  return (
    <Routes>
      ...
    </Routes>
  );
}
```

### What is `Routes`?

`<Routes>` is a **container/collection of our routes**.

Think of it like:

```text
Routes
  │
  ├── Route
  ├── Route
  └── Route
```

---

# 4. Route

Inside `<Routes>`, we create individual routes using `<Route />`.

Example:

```jsx
<Route
  path="/"
  element={<Home />}
/>
```

A `Route` connects:

```text
URL → Component
```

For example:

```text
/ → Home
```

---

# 5. `path`

The `path` tells React Router:

> **Which URL should this route match?**

Example:

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

Here:

```jsx
path="/about"
```

means that this route matches:

```text
/about
```

So when the URL is:

```text
http://localhost:5173/about
```

React Router will match this route.

---

# 6. `element`

The `element` tells React Router:

> **What component should be rendered when this route matches?**

Example:

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

Here:

```jsx
element={<About />}
```

means:

> Render the `About` component.

---

# 7. Complete Routes Example

Suppose we have:

```text
Home
About
Contact
```

We can create:

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Routes>
  );
}

export default App;
```

Now React Router understands:

```text
URL              Component

/         →      Home
/about   →      About
/contact →      Contact
```

---

# 8. Easy Way to Remember `Route`

A `<Route />` has two important things:

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

Remember:

```text
path    = WHERE
element = WHAT
```

So:

```jsx
path="/about"
```

means:

> Where?

And:

```jsx
element={<About />}
```

means:

> What should I show?

Therefore:

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

means:

> **When the URL is `/about`, show the `<About />` component.**

---

# 9. Navigating Between Routes

After creating routes, we need a way to move from one route to another.

There are several ways to navigate.

The main ones are:

```text
<Link>
<NavLink>
useNavigate()
redirect()
<a>
```

They are not exactly the same and are used in different situations.

---

# 10. `Link`

`Link` is the most common way to navigate between routes inside a React application.

Import it:

```jsx
import { Link } from "react-router-dom";
```

Use it:

```jsx
<Link to="/about">
  About
</Link>
```

When the user clicks the link, React Router changes the route without doing a normal full-page browser reload.

Think:

```text
Click Link
    ↓
React Router
    ↓
URL changes
    ↓
Matching component renders
```

### Example Navbar

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

---

# 11. Why not use `<a>` for internal routes?

You might write:

```jsx
<a href="/about">
  About
</a>
```

This is a normal HTML link.

It works, but the browser treats it as a normal navigation.

Usually, the browser will:

```text
Click <a>
    ↓
Navigate to /about
    ↓
Reload the document
    ↓
React starts again
```

This can cause:

* React state to be reset
* Components to be unmounted and mounted again
* Additional loading/network requests
* A less smooth SPA navigation experience

For internal React Router routes, prefer:

```jsx
<Link to="/about">
  About
</Link>
```

---

# 12. When should we use `<a>`?

`<a>` is still useful.

For example, when going to an **external website**:

```jsx
<a href="https://google.com">
  Google
</a>
```

You don't need React Router to navigate to another website.

### Simple rule

```text
Internal React route
        ↓
      <Link>

External website
        ↓
       <a>
```

---

# 13. `NavLink`

`NavLink` is similar to `Link`.

Import it:

```jsx
import { NavLink } from "react-router-dom";
```

Use it:

```jsx
<NavLink to="/about">
  About
</NavLink>
```

The important difference is that `NavLink` knows whether the current route is **active**.

This makes it very useful for:

* Navbar
* Sidebar
* Dashboard menu
* Navigation menu

---

## Example of `NavLink`

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  About
</NavLink>
```

If the current URL is:

```text
/about
```

then:

```text
isActive = true
```

So the link can have different styling.

### Simple difference

```text
Link
 ↓
Normal navigation

NavLink
 ↓
Navigation + knows whether it is active
```

---

# 14. `useNavigate()`

Sometimes we don't want navigation to happen because the user clicked a link.

Instead, we want JavaScript to navigate after something happens.

For this, React Router provides:

```jsx
useNavigate()
```

Import it:

```jsx
import { useNavigate } from "react-router-dom";
```

Example:

```jsx
function Login() {

  const navigate = useNavigate();

  function handleLogin() {

    // login logic...

    navigate("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}
```

When login succeeds:

```text
Login successful
       ↓
navigate("/dashboard")
       ↓
Dashboard
```

### When is `useNavigate()` useful?

For example:

```text
Form submitted
      ↓
navigate("/success")
```

or:

```text
Login successful
      ↓
navigate("/dashboard")
```

or:

```text
Logout
  ↓
navigate("/login")
```

### Simple rule

```text
User clicks a navigation link
        ↓
      Link

JavaScript needs to navigate
        ↓
   useNavigate()
```

---

# 15. `redirect()`

React Router also provides:

```jsx
redirect()
```

Example:

```jsx
import { redirect } from "react-router-dom";

return redirect("/login");
```

`redirect()` is generally used with React Router's **loaders/actions**.

For example, you may want to redirect a user to `/login` if they are not authenticated.

As a beginner, you don't need to use `redirect()` immediately.

Just remember:

```text
redirect()
    ↓
Used mainly for router loaders/actions
```

---

# 16. `Link` vs `NavLink` vs `useNavigate` vs `a`

| Method          | Main purpose                       |
| --------------- | ---------------------------------- |
| `<Link>`        | Normal internal navigation         |
| `<NavLink>`     | Internal navigation + active route |
| `useNavigate()` | Navigation from JavaScript         |
| `redirect()`    | Redirect from loaders/actions      |
| `<a>`           | Normal browser/external navigation |

---

# 17. Which One Should I Use?

### Normal navigation

Use:

```jsx
<Link to="/about">
  About
</Link>
```

### Navbar / Sidebar

Use:

```jsx
<NavLink to="/about">
  About
</NavLink>
```

### Navigate after an action

Use:

```jsx
navigate("/dashboard");
```

with:

```jsx
useNavigate()
```

### Redirect from a loader/action

Use:

```jsx
redirect("/login");
```

### External website

Use:

```jsx
<a href="https://google.com">
  Google
</a>
```

---

# 18. Complete Flow

The basic React Router structure can be visualized like this:

```text
main.jsx
   │
   ↓
BrowserRouter
   │
   ↓
App.jsx
   │
   ↓
Routes
   │
   ├── Route → /
   │           ↓
   │          Home
   │
   ├── Route → /about
   │           ↓
   │          About
   │
   └── Route → /contact
               ↓
              Contact
```

Navigation happens through:

```text
Link
   ↓
NavLink
   ↓
useNavigate()
```

---

# 🧠 Quick Revision

## Installation

```bash
npm i react-router-dom
```

## `main.jsx`

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

`BrowserRouter` enables routing for the application.

---

## `App.jsx`

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/about"
    element={<About />}
  />

</Routes>
```

`Routes` = collection/container of routes.

`Route` = defines one route.

---

## Route

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

Remember:

```text
path    → WHERE
element → WHAT
```

---

## Navigation

### Link

```jsx
<Link to="/about">
  About
</Link>
```

Normal internal navigation.

### NavLink

```jsx
<NavLink to="/about">
  About
</NavLink>
```

Navigation where we also care about the active route.

### useNavigate

```jsx
const navigate = useNavigate();

navigate("/about");
```

Navigation using JavaScript.

### redirect

```jsx
redirect("/login");
```

Redirect from router loaders/actions.

### `<a>`

```jsx
<a href="https://google.com">
  Google
</a>
```

Normal browser/external navigation.

---

# ⭐ Beginner Mental Model

Remember these concepts in this order:

```text
1. BrowserRouter
       ↓
   Enables routing

2. Routes
       ↓
   Collection of routes

3. Route
       ↓
   URL → Component

4. Link
       ↓
   Normal internal navigation

5. NavLink
       ↓
   Navigation + active route

6. useNavigate
       ↓
   Navigation using JavaScript

7. redirect
       ↓
   Redirect from loaders/actions
```

The most important concept to remember is:

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

means:

> **"When the URL is `/about`, render the `<About />` component."**
