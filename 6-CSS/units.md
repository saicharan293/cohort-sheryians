
# CSS Units – Quick Notes

CSS units define the size of elements, text, spacing, and layout. They are mainly divided into **Absolute** and **Relative** units.

---

## 1. Absolute Units

Fixed size units. Not responsive.

| Unit | Meaning               | Example            |
| ---- | --------------------- | ------------------ |
| `px` | Pixels (most common)  | `width: 200px;`    |
| `cm` | Centimeters           | `width: 5cm;`      |
| `mm` | Millimeters           | `width: 10mm;`     |
| `in` | Inches                | `width: 2in;`      |
| `pt` | Points (1/72 of inch) | `font-size: 12pt;` |
| `pc` | Picas (12 points)     | `font-size: 1pc;`  |

📌 **Use case:** Precise control (mostly `px`). Not ideal for responsive design.

---

## 2. Relative Units

Based on another value (parent, root, or viewport). Good for responsive design.

### A. Font-Relative Units

| Unit  | Relative To             | Example              |
| ----- | ----------------------- | -------------------- |
| `em`  | Parent font size        | `font-size: 2em;`    |
| `rem` | Root (`html`) font size | `font-size: 1.5rem;` |
| `ex`  | Height of "x" character | `font-size: 2ex;`    |
| `ch`  | Width of "0" character  | `width: 30ch;`       |

`ch` : here, ch represents characters. so if it is applied to any element, it restricts the element's width to specified number of characters only.

📌 `rem` is preferred for consistent scaling.

---

### B. Viewport Units

| Unit   | Relative To             | Example          |
| ------ | ----------------------- | ---------------- |
| `vw`   | 1% of viewport width    | `width: 50vw;`   |
| `vh`   | 1% of viewport height   | `height: 100vh;` |
| `vmin` | Smaller of `vw` or `vh` | `width: 50vmin;` |
| `vmax` | Larger of `vw` or `vh`  | `width: 50vmax;` |

📌 Useful for full-screen layouts.

---

### C. Percentage

| Unit | Relative To    | Example       |
| ---- | -------------- | ------------- |
| `%`  | Parent element | `width: 50%;` |

📌 Common for flexible layouts.

---

## 3. Flex Units

| Unit | Used In  | Example                           |
| ---- | -------- | --------------------------------- |
| `fr` | CSS Grid | `grid-template-columns: 1fr 2fr;` |

📌 Distributes available space proportionally.

---

# ✅ Best Practices

* Use `rem` for font sizes.
* Use `%`, `vw`, `vh`, or `fr` for responsive layouts.
* Avoid excessive use of absolute units like `cm`, `mm`, `in`.
* Prefer relative units for scalability.

# refer this for responsiveness brief
https://medium.com/@prajapatiankur8349/how-to-create-responsive-websites-like-a-pro-2193ff6ab574