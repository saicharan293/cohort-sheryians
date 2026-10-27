# ContextAPI
- To centralize the data, so that any component can get the data without depending on the parent element


# React: Parent-Child Communication

## Overview

This project demonstrates how a child component communicates with its parent using **props and callback functions** in React.

The parent (`App`) manages the submitted theme, while the child (`Navbar`) manages the input field.

## How It Works

1. The user types a theme into the input field in `Navbar`.
2. The child's local state, `newTheme`, updates as the user types.
3. When the form is submitted, the child calls `props.changeTheme(newTheme)`.
4. The callback passes the input value to the parent.
5. The parent updates its `theme` state using `setTheme(newTheme)`.
6. React re-renders the UI to display the updated theme.
7. The child clears its input using `setNewTheme('')`.

## Input State Flow

```text
User types "Dark"
       |
       v
Navbar (Child)
newTheme = "Dark"
       |
       v
User submits the form
props.changeTheme(newTheme)
       |
       v
App (Parent)
setTheme("Dark")
       |
       v
UI updates
"Theme is Dark"
       |
       v
Navbar clears the input
setNewTheme("")
```

## Understanding the Two Separate States

There are two state variables in two different components. Each has its own responsibility.

### 1. Child State — `newTheme`

```jsx
const [newTheme, setNewTheme] = useState('');
```

- Stores the value currently being typed into the input.
- Updates whenever the user types.
- Clears after the form is submitted.
- Belongs to the `Navbar` component.

### 2. Parent State — `theme`

```jsx
const [theme, setTheme] = useState('');
```

- Stores the submitted theme.
- Updates when the child calls the `changeTheme` callback.
- Controls the theme displayed in the heading.
- Belongs to the `App` component.

**Example:**

If the current submitted theme is `Dark` and the user starts typing `Light`, the input shows `Light`, but the heading still displays `Theme is Dark`.

Only after the user submits the form does the parent state update to `Light`.

**Remember:**
- `newTheme` = draft input value.
- `theme` = submitted value.

The two states are independent. Updating one does not automatically update the other.

## Minimal Code Example

### Parent Component — `App.jsx`

```jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [theme, setTheme] = useState('');

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />
    </div>
  );
};

export default App;
```

### Child Component — `Navbar.jsx`

```jsx
import React, { useState } from 'react';

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState('');

  return (
    <div className="nav">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme);
          setNewTheme('');
        }}
      >
        <input
          type="text"
          placeholder="Enter theme"
          value={newTheme}
          onChange={(e) => setNewTheme(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
```

## Key React Concepts

- **`useState`:** Stores and updates a component's state.
- **Props:** Pass data or functions from parent to child.
- **Callback Function:** Allows a child to communicate with its parent by invoking a function received through props.
- **Controlled Component:** The input value is controlled by React state using `value` and `onChange`.
- **Lifting State Up:** Keeps shared state in the parent component so it can manage and display the submitted theme.
- **One-Way Data Flow:** Props flow from parent to child, while callbacks enable communication back up.

## Important Note

React does not automatically transfer a child's state to its parent. Instead, the child explicitly passes its current input value by calling a callback function supplied through props.

The callback function executes in the parent and updates the parent's state.

This pattern is called **callback-based child-to-parent communication using lifting state up**.

### Quick Summary

**Props flow down. Callbacks communicate back up. Each component manages its own state.**
