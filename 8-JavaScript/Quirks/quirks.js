const quirksData = [

  {
    category: "Type Coercion",
    items: [
      { title: '5 + "5"', code: '5 + "5"', result: '"55"', explanation: 'If one operand is string, + performs concatenation.' },
      { title: '5 - "2"', code: '5 - "2"', result: '3', explanation: 'Minus forces numeric conversion.' },
      { title: '"5" * "2"', code: '"5" * "2"', result: '10', explanation: 'Multiplication forces numeric conversion.' },
      { title: 'true + 1', code: 'true + 1', result: '2', explanation: 'true becomes 1.' },
      { title: 'false + 1', code: 'false + 1', result: '1', explanation: 'false becomes 0.' },
      { title: 'null + 1', code: 'null + 1', result: '1', explanation: 'null converts to 0 in numeric context.' },
      { title: 'undefined + 1', code: 'undefined + 1', result: 'NaN', explanation: 'undefined becomes NaN in numeric context.' },
      { title: '+true', code: '+true', result: '1', explanation: 'Unary + converts to number.' },
      { title: '+null', code: '+null', result: '0', explanation: 'null converts to 0.' },
      { title: '+undefined', code: '+undefined', result: 'NaN', explanation: 'undefined converts to NaN.' }
    ]
  },

  {
    category: "Equality Quirks",
    items: [
      { title: '5 == "5"', code: '5 == "5"', result: 'true', explanation: 'Loose equality allows type coercion.' },
      { title: 'false == 0', code: 'false == 0', result: 'true', explanation: 'false converts to 0.' },
      { title: '"" == 0', code: '"" == 0', result: 'true', explanation: 'Empty string converts to 0.' },
      { title: 'null == undefined', code: 'null == undefined', result: 'true', explanation: 'Special rule: equal only to each other.' },
      { title: 'null == 0', code: 'null == 0', result: 'false', explanation: 'null does not equal 0.' },
      { title: 'undefined == 0', code: 'undefined == 0', result: 'false', explanation: 'undefined does not equal 0.' },
      { title: '[] == false', code: '[] == false', result: 'true', explanation: '[] becomes "" → 0.' },
      { title: '[] == 0', code: '[] == 0', result: 'true', explanation: '[] → "" → 0.' },
      { title: 'NaN == NaN', code: 'NaN == NaN', result: 'false', explanation: 'NaN is never equal to itself.' },
      { title: 'NaN === NaN', code: 'NaN === NaN', result: 'false', explanation: 'Still false even with strict equality.' }
    ]
  },

  {
    category: "Truthy / Falsy",
    items: [
      { title: 'Boolean([])', code: 'Boolean([])', result: 'true', explanation: 'Empty array is truthy.' },
      { title: 'Boolean({})', code: 'Boolean({})', result: 'true', explanation: 'Empty object is truthy.' },
      { title: 'Boolean("false")', code: 'Boolean("false")', result: 'true', explanation: 'Non-empty string is truthy.' },
      { title: 'Boolean("0")', code: 'Boolean("0")', result: 'true', explanation: 'Non-empty string is truthy.' },
      { title: 'Boolean("")', code: 'Boolean("")', result: 'false', explanation: 'Empty string is falsy.' },
      { title: 'if([])', code: 'if([]) console.log("runs")', result: 'runs', explanation: 'Empty array is truthy.' }
    ]
  },

  {
    category: "Reference Comparison",
    items: [
      { title: '[] === []', code: '[] === []', result: 'false', explanation: 'Different object references.' },
      { title: '{} === {}', code: '{} === {}', result: 'false', explanation: 'Different object references.' },
      { title: 'const a=[]; const b=a; a===b', code: 'const a=[]; const b=a; a===b', result: 'true', explanation: 'Same reference.' }
    ]
  },

  {
    category: "typeof Weirdness",
    items: [
      { title: 'typeof null', code: 'typeof null', result: '"object"', explanation: 'Historical bug in JavaScript.' },
      { title: 'typeof NaN', code: 'typeof NaN', result: '"number"', explanation: 'NaN is technically a number.' },
      { title: 'typeof []', code: 'typeof []', result: '"object"', explanation: 'Arrays are objects.' },
      { title: 'typeof function(){}', code: 'typeof function(){}', result: '"function"', explanation: 'Functions have special typeof result.' }
    ]
  },

  {
    category: "Floating Point Issues",
    items: [
      { title: '0.1 + 0.2', code: '0.1 + 0.2', result: '0.30000000000000004', explanation: 'Binary floating-point precision issue.' }
    ]
  },

  {
    category: "Hoisting",
    items: [
      { title: 'var hoisting', code: 'console.log(a); var a=5;', result: 'undefined', explanation: 'var is hoisted but initialized as undefined.' },
      { title: 'let hoisting', code: 'console.log(b); let b=5;', result: 'ReferenceError', explanation: 'Temporal Dead Zone for let.' }
    ]
  },

  {
    category: "Array Oddities",
    items: [
      { title: '[1,2] + [3,4]', code: '[1,2] + [3,4]', result: '"1,23,4"', explanation: 'Arrays convert to string before addition.' },
      { title: '[1] == 1', code: '[1] == 1', result: 'true', explanation: '[1] → "1" → 1.' }
    ]
  },

  {
    category: "NaN & isNaN",
    items: [
      { title: 'isNaN("hello")', code: 'isNaN("hello")', result: 'true', explanation: 'isNaN coerces before checking.' },
      { title: 'Number.isNaN("hello")', code: 'Number.isNaN("hello")', result: 'false', explanation: 'Does not coerce.' }
    ]
  },

  {
    category: "Automatic Semicolon Insertion",
    items: [
      { title: 'return newline object', code: 'return\n{ name:"JS" }', result: 'undefined', explanation: 'Semicolon inserted after return.' }
    ]
  }

];
const container = document.querySelector(".container");

quirksData.forEach(section => {
    const sectionEl = document.createElement("section");

    const sectionTitle = document.createElement("h2");

    sectionTitle.classList.add("section-title");
    sectionTitle.innerText = section.category;
    
    
    sectionEl.appendChild(sectionTitle);

    const grid = document.createElement("div");

    grid.classList.add("card-grid");

    section.items.forEach ( item =>{
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <button class = "card-header">
                <span>${item.title}</span>
                <span class="badge ${item.difficulty?.toLowerCase()}">${item.difficulty || ""}</span>
                <span class="toggle">+</span>
            </button>
            <div class="card-body">
                <pre><code>${item.code}</code></pre>
                <p class="output"><strong>Output:</strong> ${item.result}</p>
                <p>${item.explanation}</p>
                <button class="copy-btn">Copy Code</button>
            </div>
        `
        grid.appendChild(card);
    })

    sectionEl.appendChild(grid);
    container.appendChild(sectionEl);
})

document.addEventListener("click", e => {
  const header = e.target.closest(".card-header");
  if (header) {
    const card = header.closest(".card");
    card.classList.toggle("active");
  }
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("copy-btn")) {
    const code = e.target.closest(".card")
      .querySelector("code").innerText;

    navigator.clipboard.writeText(code);

    e.target.innerText = "Copied!";
    setTimeout(() => e.target.innerText = "Copy Code", 1000);
  }
});

// Search
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
  });
});