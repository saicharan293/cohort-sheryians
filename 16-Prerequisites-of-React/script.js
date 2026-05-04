// ==============================
// ✅ 1. NAMED IMPORT
// ==============================
// Used when a file exports multiple things.
// You must use exact names inside {}.

import { add, subtract, PI } from './math.js';


// ==============================
// ✅ 2. DEFAULT IMPORT
// ==============================
// Used when a file has ONE main export.
// No {} needed, and you can rename it freely.

import greet from './message.js';


// ==============================
// ✅ 3. NAMED IMPORT (same file)
// ==============================
// You can import named exports separately,
// but usually we combine them in one line.

import { appName } from './message.js';


// ==============================
// ⚠️ 4. RENAME IMPORT
// ==============================
// Used when:
// - Name conflicts
// - You want better readability

import { add as sum } from './math.js';


// ==============================
// ⚠️ 5. IMPORT EVERYTHING (*)
// ==============================
// Imports all exports as one object.
// Access using dot notation.
// Not recommended for large apps.

import * as mathAll from './math.js';


// ==============================
// 🎯 DOM ACCESS
// ==============================

const output = document.getElementById("output");


// ==============================
// 🔥 USING IMPORTED FUNCTIONS
// ==============================

// Named import usage
const result1 = add(5, 3);

// Named import usage
const result2 = subtract(10, 4);

// Renamed import usage
const result3 = sum(2, 2);

// Import * usage
const result4 = mathAll.add(7, 1);


// ==============================
// 🧠 RENDER OUTPUT
// ==============================

output.innerHTML = `
  <p>${greet("Chandan")}</p>   <!-- default export -->
  <p>App: ${appName}</p>       <!-- named export -->
  <p>Add: ${result1}</p>
  <p>Subtract: ${result2}</p>
  <p>Renamed Add (sum): ${result3}</p>
  <p>Import * (mathAll.add): ${result4}</p>
  <p>PI value: ${PI}</p>
`;


// ==============================
// 🚨 BEST PRACTICE NOTE
// ==============================
// In real projects, DON'T import the same file multiple ways.
// Example: math.js is imported 3 times here ❌
//
// ✅ Better approach:
//
// import { add, subtract, PI } from './math.js';
// import greet, { appName } from './message.js';
//
// Keep it clean and consistent.