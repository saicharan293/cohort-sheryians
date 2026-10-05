# React Router DOM — Beginner Friendly Notes

React Router DOM is used to create **multiple pages/routes** in a React application without completely reloading the browser.

For example:

```text
/           → Home
/about      → About
/products   → Products
/contact    → Contact
```

---

# 1. Installation

Install React Router DOM using npm:

```bash
npm i react-router-dom
```

After installation, we can start creating routes.

---

# 2. BrowserRouter

First, wrap the main application with `BrowserRouter`.

### `main.jsx`

```jsx
import { BrowserRouter } from "react-router-dom";
import App from "./App";

<BrowserRouter>
  <App />
</BrowserRouter>
```

### What is `BrowserRouter`?

`BrowserRouter` enables **browser-based routing** in our React application.

Without it, React Router cannot properly handle routes.

### Mental Model

```text
BrowserRouter
      ↓
Enables routing
      ↓
App
```

---

# 3. Routes

Inside `App.jsx`, we use `Routes`.

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>

    </Routes>
  );
}

export default App;
```

### What is `Routes`?

`Routes` is a **container for all our routes**.

Think of it as:

```text
Routes
 ├── Route
 ├── Route
 ├── Route
 └── Route
```

---

# 4. Route

A `Route` connects a **URL path** with a **React component**.

Example:

```jsx
<Route path="/" element={<Home />} />
```

There are two important things here:

```text
path
 ↓
WHERE?

element
 ↓
WHAT?
```

### `path`

Defines the URL.

```jsx
path="/about"
```

Means:

```text
http://localhost:5173/about
```

### `element`

Defines which component should be displayed.

```jsx
element={<About />}
```

So:

```jsx
<Route path="/about" element={<About />} />
```

means:

> When the URL is `/about`, show the `About` component.

---

# 5. Basic Routing Example

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

Now we have:

```text
/          → Home
/about     → About
/contact   → Contact
```

### Mental Model

```text
URL
 ↓
path
 ↓
Route
 ↓
element
 ↓
Component
```

---

# 6. Link

To navigate between pages inside a React application, we can use `Link`.

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

When the user clicks:

```text
About
  ↓
/about
  ↓
About component
```

### Why use `Link`?

`Link` allows React Router to change the page **without doing a full browser reload**.

For internal React routes, prefer:

```jsx
<Link to="/about">About</Link>
```

instead of:

```html
<a href="/about">About</a>
```

---

# 7. NavLink

`NavLink` is similar to `Link`, but it also knows whether the current route is active.

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/about">About</NavLink>
```

It is especially useful for:

* Navbar
* Sidebar
* Menu
* Navigation links

Example:

```jsx
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/products">Products</NavLink>
```

### Link vs NavLink

```text
Link
 ↓
Normal navigation


NavLink
 ↓
Navigation + active route information
```

Use `NavLink` when you want to style the **currently active page**.

---

# 8. useNavigate()

Sometimes we want to navigate using JavaScript instead of clicking a link.

For this, we use `useNavigate()`.

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/dashboard")}>
      Login
    </button>
  );
}
```

When the button is clicked:

```text
Click
 ↓
navigate("/dashboard")
 ↓
/dashboard
```

### When is `useNavigate()` useful?

It is useful when navigation happens after an action.

For example:

```text
Login successful
      ↓
navigate("/dashboard")
```

or:

```text
Form submitted
      ↓
navigate("/success")
```

or:

```text
Logout
      ↓
navigate("/login")
```

---

# 9. redirect()

`redirect()` is another way to navigate, but it is mainly used with React Router's **loaders and actions**.

Example:

```jsx
import { redirect } from "react-router-dom";

return redirect("/login");
```

For beginners, you will usually use:

```jsx
useNavigate()
```

for navigation inside components.

### Simple difference

```text
useNavigate()
 ↓
Navigation inside component


redirect()
 ↓
Mostly used with loaders/actions
```

---

# 10. `<a>` Tag vs `<Link>`

Normal HTML anchor:

```html
<a href="/about">About</a>
```

React Router:

```jsx
<Link to="/about">About</Link>
```

For internal React routes, prefer `Link`.

### Why?

`<a>` uses normal browser navigation and can cause the entire page to reload.

`Link` works with React Router and performs client-side navigation.

---

## When should I use `<a>`?

`<a>` is perfectly fine for external websites.

```html
<a href="https://google.com">
  Google
</a>
```

### Simple rule

```text
Internal React route
        ↓
      Link


External website
        ↓
        <a>
```

---

# 11. Dynamic Routes

A **Dynamic Route** is a route where part of the URL can change.

Example:

```jsx
<Route path="/rd/:any" element={<RandomAbout />} />
```

Here:

```text
/rd/:any
    ↑
Dynamic value
```

`:any` can have different values.

For example:

```text
/rd/hello
/rd/react
/rd/123
/rd/about
```

All of these can match:

```jsx
<Route path="/rd/:any" element={<RandomAbout />} />
```

---

# 12. useParams()

We can get the dynamic value using `useParams()`.

```jsx
import { useParams } from "react-router-dom";

function RandomAbout() {
  const { any } = useParams();

  return <h1>{any}</h1>;
}
```

Suppose the URL is:

```text
/rd/react
```

Then:

```jsx
any
```

will contain:

```text
react
```

Another example:

```text
URL:
/rd/hello

any:
hello
```

### Mental Model

```text
/rd/:any
    ↓
Dynamic URL value
    ↓
useParams()
    ↓
Get the value
```

---

# 13. Nested Routes

A **Nested Route** means a route is placed inside another route.

Example:

```jsx
<Route path="/products" element={<Product />}>
  <Route path="men" element={<Men />} />
</Route>
```

Here:

```text
/products
    ↓
 Product
    ↓
 Outlet
    ↓
 men
    ↓
 Men
```

The final URL is:

```text
/products/men
```

---

# 14. Parent Route

This is the parent route:

```jsx
<Route path="/products" element={<Product />}>
```

It says:

```text
/products
    ↓
Product component
```

---

# 15. Child Route

This is the child route:

```jsx
<Route path="men" element={<Men />} />
```

Because it is inside `/products`, React Router combines them:

```text
/products
    +
men
    ↓
/products/men
```

Notice that we write:

```jsx
path="men"
```

not:

```jsx
path="/men"
```

For nested routes, the child path is normally written as a **relative path**.

---

# 16. `<Outlet />`

The parent component needs `<Outlet />` to display the child route.

### `Product.jsx`

```jsx
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Products</h1>

      <Outlet />
    </div>
  );
}

export default Product;
```

`<Outlet />` tells React Router:

> "Render the child route here."

So when we visit:

```text
/products/men
```

React Router renders:

```text
Product
   ↓
<Outlet />
   ↓
Men
```

The result can look like:

```text
Products

Men Products
```

---

# 17. What Happens Without `<Outlet />`?

Suppose we have:

```jsx
function Product() {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
```

Even though the route matches:

```text
/products/men
```

there is no `<Outlet />`.

Therefore, the `Men` component has no place to render inside `Product`.

Add:

```jsx
<Outlet />
```

to provide that location.

---

# 18. Dynamic Route vs Nested Route

### Dynamic Route

```jsx
<Route path="/rd/:any" element={<RandomAbout />} />
```

Purpose:

> Part of the URL can change.

Examples:

```text
/rd/hello
/rd/react
/rd/123
```

---

### Nested Route

```jsx
<Route path="/products" element={<Product />}>
  <Route path="men" element={<Men />} />
</Route>
```

Purpose:

> One route is placed inside another route.

Example:

```text
/products/men
```

---

# 19. Complete Example

Here is everything together:

```jsx
import {
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>

        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic Route */}
        <Route
          path="/rd/:any"
          element={<RandomAbout />}
        />

        {/* Nested Route */}
        <Route
          path="/products"
          element={<Product />}
        >
          <Route
            path="men"
            element={<Men />}
          />
        </Route>

      </Routes>
    </>
  );
}
```

And the `Product` component:

```jsx
import { Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Products</h1>

      <Outlet />
    </div>
  );
}
```

---

# 20. React Router Mental Model

Try to remember React Router like this:

```text
BrowserRouter
      ↓
Enables routing
      ↓
Routes
      ↓
Contains Route
      ↓
Route
   ┌──┴───┐
 path   element
  ↓        ↓
URL    Component
```

For navigation:

```text
Link
 ↓
Normal internal navigation


NavLink
 ↓
Navigation + active route


useNavigate()
 ↓
Navigation using JavaScript


redirect()
 ↓
Mostly loaders/actions
```

For dynamic routes:

```text
/rd/:any
    ↓
useParams()
    ↓
Get dynamic value
```

For nested routes:

```text
/products
    ↓
Product
    ↓
<Outlet />
    ↓
Men
```

---

# Quick Cheat Sheet

| Feature         | Purpose                            |
| --------------- | ---------------------------------- |
| `BrowserRouter` | Enables React Router               |
| `Routes`        | Container for routes               |
| `Route`         | Connects URL with component        |
| `path`          | Defines the URL                    |
| `element`       | Defines the component              |
| `Link`          | Internal navigation                |
| `NavLink`       | Internal navigation + active state |
| `useNavigate()` | Navigate using JavaScript          |
| `redirect()`    | Redirect mainly in loaders/actions |
| `<a>`           | Normal/external browser navigation |
| `useParams()`   | Get dynamic URL values             |
| `Outlet`        | Display nested child routes        |

---

# Most Important Things to Remember

### 1. Route

```jsx
<Route path="/about" element={<About />} />
```

```text
path    → WHERE
element → WHAT
```

### 2. Link

```jsx
<Link to="/about">About</Link>
```

Used for internal navigation.

### 3. Dynamic Route

```jsx
<Route path="/rd/:any" element={<RandomAbout />} />
```

Use:

```jsx
useParams()
```

to get the dynamic value.

### 4. Nested Route

```jsx
<Route path="/products" element={<Product />}>
  <Route path="men" element={<Men />} />
</Route>
```

Use:

```jsx
<Outlet />
```

inside `Product`.

### Final Mental Model

```text
                React Router
                     │
             ┌───────┴────────┐
             ↓                ↓
        Navigation          Routes
        ┌──┬───┐              │
        │  │   │              ↓
      Link NavLink       ┌────Route────┐
           │             │             │
      useNavigate       path         element
                         │             │
                         ↓             ↓
                        URL        Component
                                      │
                         ┌────────────┴───────┐
                         ↓                    ↓
                  Dynamic Route          Nested Route
                    :any                  Outlet
                      ↓                     ↓
                 useParams()              Child
```
