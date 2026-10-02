# React `useEffect`

While learning `useState`, I understood that when state changes, React re-renders the component.

Then I had another question:

> **What if I want to do something when a particular state changes?**

For example, in this component I have:

```jsx
const [count, setCount] = useState(0);
const [title, setTitle] = useState('');
```

I want to run some code whenever `title` changes.

That's where `useEffect` comes in.

## Basic `useEffect`

```jsx
useEffect(() => {
  console.log("use effect when title change");
}, [title]);
```

There are two important parts here:

```text
useEffect(
    code to run,
    [values the effect depends on]
)
```

The first part tells React **what code I want to run**.

The second part tells React **which values this effect depends on**.

---

## Why is there an array?

The `[]` is a JavaScript **array**.

An array allows us to provide a list of values.

For example:

```jsx
[title]
```

contains one value:

```text
title
```

And:

```jsx
[title, count]
```

contains two values:

```text
title
count
```

This is useful because an effect can depend on more than one value.

For example:

```jsx
useEffect(() => {
  console.log("something changed");
}, [title, count]);
```

Here the effect depends on both `title` and `count`.

So the array is basically a way of giving React a **list of values to keep track of for this effect**.

---

## Why is it called a "dependency array"?

The word **dependency** becomes easier if I ask:

> **What does this effect depend on?**

Consider:

```jsx
useEffect(() => {
  console.log("title changed");
}, [title]);
```

The effect depends on `title`.

Therefore:

```jsx
[title]
```

is called the **dependency array**.

If I have:

```jsx
[title, count]
```

then the effect depends on both `title` and `count`.

So:

```text
[title]
        ↓
The effect depends on title

[title, count]
        ↓
The effect depends on title and count
```

---

## What does React do with the dependencies?

Suppose initially:

```text
title = ""
```

React renders the component.

Then I type into the input:

```text
title = "Hello"
```

The value of `title` changed.

React sees that `title` is one of the dependencies:

```jsx
[title]
```

So the effect runs:

```jsx
console.log("use effect when title change");
```

If I type another character:

```text
title = "Hello!"
```

`title` changed again, so the effect runs again.

The basic flow is:

```text
User types
    ↓
setTitle()
    ↓
title changes
    ↓
React re-renders
    ↓
React checks the dependency
    ↓
title changed
    ↓
useEffect runs
```

---

## What happens when `count` changes?

My component also has:

```jsx
const [count, setCount] = useState(0);
```

When I click the button:

```jsx
setCount(count + 1);
```

`count` changes, so React re-renders the component.

But my effect has:

```jsx
[title]
```

as its dependency array.

`title` did not change.

Therefore, this effect does not run again just because `count` changed.

```text
title changes → effect runs

count changes → this effect does not run
```

This helped me understand that the dependency array is not just some special syntax.

It tells React:

> **"These are the values this effect depends on."**

---

## What if there are multiple dependencies?

I can provide multiple values in the array:

```jsx
useEffect(() => {
  console.log("something changed");
}, [title, count]);
```

Now the effect depends on:

```text
title
count
```

So if either one changes, the effect can run again.

```text
title changes
     ↓
effect runs

OR

count changes
     ↓
effect runs
```

---

## What if the array is empty?

We can also write:

```jsx
useEffect(() => {
  console.log("effect");
}, []);
```

There are no dependencies in the array.

This means the effect doesn't depend on any changing state or prop.

A common use case is running something when the component initially appears, such as loading initial data.

---

## What if I don't provide the array?

We can also write:

```jsx
useEffect(() => {
  console.log("effect");
});
```

Now there is no dependency array.

The effect runs after every render.

So these three cases are different:

```jsx
// No dependency array
useEffect(() => {
  // runs after every render
});
```

```jsx
// Empty dependency array
useEffect(() => {
  // runs after the initial render
}, []);
```

```jsx
// Dependency array
useEffect(() => {
  // runs when title changes
}, [title]);
```

---

## My mental model

I find it easier to think about `useEffect` like this:

```text
useEffect
    ↓
"What additional work should I do?"
    ↓
Dependency array
    ↓
"What values does this work depend on?"
```

For my example:

```jsx
useEffect(() => {
  console.log("use effect when title change");
}, [title]);
```

I'm basically telling React:

> **"Whenever `title` changes, run this code."**

---

## Interview Understanding

If asked:

**"What is the dependency array in `useEffect`?"**

A good answer is:

> **"The dependency array is an array of values that the effect depends on. React checks those values between renders and re-runs the effect when a dependency changes. For example, `[title]` means the effect depends on `title`."**

If asked:

**"Why is it an array?"**

I would explain:

> **"Because an effect can depend on multiple values. For example, `[title, count]` tells React that the effect depends on both `title` and `count`."**

---

## One thing to remember

Don't think of:

```jsx
[title]
```

as:

> "Run the effect because there is an array."

Think of it as:

> **"This effect depends on `title`."**

The array is simply the way we give React the **list of dependencies** for that effect.