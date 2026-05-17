# Learn Playwright Batch 2x

[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Status](https://img.shields.io/badge/Batch-In%20Progress-orange?style=for-the-badge)]()

**The official course repository for Batch 2x — JavaScript, TypeScript, and Playwright for SDETs**

*Zero to automation hero — JavaScript fundamentals → TypeScript → Playwright → AI Agents & MCP*

[Quick Start](#-quick-start) · [Curriculum](#-curriculum-roadmap) · [Weekly Plan](#-weekly-plan) · [What You'll Build](#-what-youll-build) · [Resources](#-resources)

---

## Welcome to Batch 2x

This repository is your **week-by-week course companion** for the LearnPlaywright Batch 2x cohort by [The Testing Academy](https://thetestingacademy.com). Code shown in lectures lands here so you can read it, run it, and practice on it.

> Content gets added **as we progress through the batch** — so check back after every class.

### What you'll learn

- **JavaScript Fundamentals** — variables, control flow, arrays, functions, OOP, async
- **TypeScript** — types, interfaces, enums, generics, access modifiers, decorators
- **Playwright** — setup, locators, assertions, fixtures, POM, debugging, CI
- **Modern QA** — Playwright CLI, AI Agents, and MCP for full STLC automation

---

## 🗺️ Curriculum Roadmap

```mermaid
graph TB
    subgraph root["LearnPlaywrightBatch2x"]
        direction TB

        subgraph js["📘 JavaScript (Weeks 1–6)"]
            ch1["Ch 1: Basics ✅"]
            ch2["Ch 2: JS Concepts"]
            ch3["Ch 3: Identifiers & Literals ✅"]
            ch4["Ch 4: Operators & Concepts ✅"]
            ch5["Ch 5: Literals ✅"]
            ch6["Ch 6: Operators ✅"]
            ch7["Ch 7: If / Else"]
            ch8["Ch 8: Loops"]
            ch9["Ch 9: Arrays"]
            ch10["Ch 10: Functions"]
        end

        subgraph adv["⚙️ Advanced JS (Weeks 7–8)"]
            ch11["Ch 11: Objects"]
            ch12["Ch 12: 2D Arrays"]
            ch13["Ch 13: Callbacks"]
            ch14["Ch 14: Promises"]
            ch15["Ch 15: Async / Await"]
            ch16["Ch 16: OOP - Classes"]
            ch17["Ch 17: Inheritance"]
        end

        subgraph ts["🟦 TypeScript (Week 9)"]
            ch18["Ch 18: TS Fundamentals"]
            ch19["Ch 19: Interfaces"]
            ch20["Ch 20: Enums"]
            ch21["Ch 21: Generics"]
            ch22["Ch 22: Access Modifiers & Decorators"]
        end

        subgraph pw["🎭 Playwright (Weeks 10–12)"]
            ch23["Ch 23: PW Fundamentals"]
            cli["Lecture: Playwright CLI"]
            ai["Lecture: AI Agents"]
            mcp["Lecture: MCP Protocol"]
        end

        subgraph extras["🎯 Bonus"]
            tasks["Interview Coding Questions"]
            tests["Real-world Test Projects"]
        end
    end

    js --> adv --> ts --> pw --> extras

    style js fill:#e1f5fe,stroke:#01579b
    style adv fill:#fff3e0,stroke:#e65100
    style ts fill:#e0f7fa,stroke:#00838f
    style pw fill:#f3e5f5,stroke:#7b1fa2
    style extras fill:#e8f5e9,stroke:#2e7d32
```

---

## 📚 Current Folder Structure

```
LearnPlaywrightBatch2x/
├── Chapter_01_Basics/                  ✅ Hello World, env setup, hot code
│   ├── 01_Basics.js                    # First console.log program
│   ├── 02_JS.js                        # Variables & a simple loop
│   ├── 03_JS_Verify_Setup.js           # Verify Node.js/OS/arch
│   └── 04_HotCode.js                   # JIT & "hot" code paths
│
├── Chapter02_Javascript_Concepts/      ✅ var / let / const & hoisting
│   └── 05_JS_Basics.js
│
├── Chapter03_Identifier_Literals/      ✅ Identifiers, literals, equality
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   ├── 08_Comments.js
│   ├── js_identifier_rules.js
│   ├── VS_Code_keyboard_shortcut_windows.md
│   └── VS_Code_keyboard_shortcut_mac.md
│
│
├── Chapter_04_Javascript_Concepts/      ✅ var, let, const, scope, hoisting
│   ├── 09_var_let_const.js               # var/let/const basics & loop leaks
│   ├── 10_functions.js                   # Defining & calling functions
│   ├── 11_var_explained.js               # var: global vs function scope
│   ├── 12_let_peope_love.js              # let: block scope, re-declaration rules
│   ├── 13_const_explained.js             # const: immutability & block scope
│   ├── 14_var_functionscope.js           # var function-scoping in detail
│   ├── 15_let_scope.js                   # let block-scoping in detail
│   ├── 16_Hoisting.js                    # var hoisting with undefined
│   ├── 17_hoisting_fn.js                 # Function-scoped hoisting
│   ├── 18_let_hoisting.js                # let hoisting & Temporal Dead Zone (TDZ)
│   ├── 19_let_hoisting_block.js          # block-scoped let hoisting behavior
│   ├── 20_let_const.js                   # const TDZ demo
│   ├── 21_Jr_QA.js                       # common junior QA interview question
│
├── chapter_05_Literal/                   ✅ Literals — numbers, strings, template literals, null/undefined
│   ├── 22_Literal.js                     # typeof all literal types
│   ├── 23_null_undefined.js              # null vs undefined deep dive
│   ├── 24_null.js                        # null usage examples
│   ├── 25_Literal_All.js                 # integer & hex/octal literals
│   ├── 26_Literal_Number_all.js          # all number types, BigInt, Infinity, NaN
│   ├── 27_String.js                      # single vs double quotes
│   ├── 28_Template_Literal.js            # backticks & variable interpolation
│   └── 29_Backtick_single_double.js      # quote comparison table
│
├── chapter_06_Operator/                  ✅ Operators — arithmetic, comparison, logical, ternary
│   ├── 30_Operator.js                    # Assignment operators
│   ├── 31_Arithmetic_OP.js               # +, -, *, / basics
│   ├── 32_Modulus_OP.js                  # % remainder & odd/even check
│   ├── 33_Expo_OP.js                     # ** exponentiation
│   ├── 34_IQ.js                          # Compound assignment operators
│   ├── 35_Comparsion_OP.js               # >, <, >=, <=, ==, ===
│   ├── 36_Comparsion_Strict_loose.js     # Loose vs strict equality
│   ├── 37_IQ_Loose_Strict.js             # Tricky loose equality gotchas
│   ├── 38_Confusing_Comparsion.js        # Deep dive: == vs === edge cases
│   ├── 39_Logical_Op.js                  # &&, ||, ! logical gates
│   └── 40_String_Con_Op.js               # String concatenation with +=
│
└── README.md                           👋 You are here
```

> **Legend:** ✅ Done · 🚧 Coming soon

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 18+ (LTS recommended) | Runs all `.js` files |
| **npm** | Bundled with Node | Package manager |
| **VS Code** | Latest | Recommended editor |
| **Git** | Latest | Clone the repo |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/PramodDutta/LearnPlaywrightBatch2x.git
cd LearnPlaywrightBatch2x

# 2. Verify your setup
node Chapter_01_Basics/03_JS_Verify_Setup.js

# 3. Run your first JS program
node Chapter_01_Basics/01_Basics.js
```

### Verify it works

```bash
$ node Chapter_01_Basics/01_Basics.js
Hello The Testing Academy
```

If you see that line, you're all set! 🎉

---

## 📅 Weekly Plan

```mermaid
journey
    title Batch 2x — 12-Week Learning Journey
    section Foundations (Wk 1-2)
        Setup & Hello World: 5: Ch1
        Variables & Hoisting: 4: Ch2
        Identifiers & Literals: 4: Ch3
        Operators: 4: Ch4
    section Control Flow (Wk 3-4)
        If / Else: 4: Ch5
        Switch: 3: Ch6
        Loops: 4: Ch7
    section Data & Functions (Wk 5-6)
        Arrays: 5: Ch8
        Functions: 5: Ch9
        Strings & Objects: 4: Ch10-11
    section Advanced JS (Wk 7-8)
        2D Arrays: 3: Ch12
        Callbacks & Promises: 5: Ch13-14
        Async / Await: 5: Ch15
        OOP & Inheritance: 5: Ch16-17
    section TypeScript (Wk 9)
        TS Basics → Decorators: 5: Ch18-22
    section Playwright (Wk 10-12)
        Fundamentals: 5: Ch23
        CLI Mastery: 5: CLI
        AI Agents & MCP: 5: AI/MCP
```

| Week | Topic | Chapters | Outcome |
|------|-------|----------|---------|
| 1 | JS Basics & Setup | Ch 1 | Run Node, write first JS |
| 2 | Variables & Hoisting | Ch 2 | Master `var`/`let`/`const` |
| 3 | Identifiers, Literals, Operators | Ch 3–4 | Read/write any expression |
| 4 | Control Flow | Ch 5–7 | If/else, switch, loops |
| 5 | Arrays & Functions | Ch 8–9 | Manipulate data confidently |
| 6 | Strings & Objects | Ch 10–11 | Use JS data structures |
| 7 | Async (Callbacks → Promises) | Ch 12–14 | Handle async work |
| 8 | Async/Await + OOP | Ch 15–17 | Modern async, classes |
| 9 | TypeScript | Ch 18–22 | Type-safe automation code |
| 10 | Playwright Fundamentals | Ch 23 | First passing test |
| 11 | Playwright CLI Mastery | CLI Lecture | Codegen, debug, trace |
| 12 | AI Agents + MCP | AI/MCP Lectures | Self-healing, full STLC |

---

## 🧭 Learning Flow

```mermaid
flowchart LR
    subgraph A["Foundations"]
        A1[Basics] --> A2[Variables] --> A3[Operators]
    end
    subgraph B["Control Flow"]
        B1[If/Else] --> B2[Switch] --> B3[Loops]
    end
    subgraph C["Data Structures"]
        C1[Arrays] --> C2[Functions] --> C3[Strings] --> C4[Objects]
    end
    subgraph D["Async"]
        D1[Callbacks] --> D2[Promises] --> D3[Async/Await]
    end
    subgraph E["OOP"]
        E1[Classes] --> E2[Inheritance]
    end
    subgraph F["TypeScript"]
        F1[Types] --> F2[Interfaces] --> F3[Generics]
    end
    subgraph G["Playwright"]
        G1[Setup] --> G2[Locators] --> G3[POM] --> G4[CI/AI/MCP]
    end

    A --> B --> C --> D --> E --> F --> G

    style A fill:#e3f2fd
    style B fill:#fff8e1
    style C fill:#f3e5f5
    style D fill:#e8f5e9
    style E fill:#fce4ec
    style F fill:#e0f7fa
    style G fill:#ede7f6
```

---

## 📖 What's in Chapter 1 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `01_Basics.js` | Hello World | First `console.log`, declaring a variable |
| `02_JS.js` | Variables & Loops | Re-declaring with `let`, calling functions inside loops |
| `03_JS_Verify_Setup.js` | Environment Check | `process.platform`, `process.arch`, `process.version` |
| `04_HotCode.js` | Hot Code Paths | How V8 optimizes frequently-called functions |

### Key Concepts

```mermaid
mindmap
  root((Chapter 1))
    Setup
      Node.js install
      VS Code
      Verify with process.*
    First Program
      console.log
      Run with node file.js
    Variables
      let
      const
      var
    Hot Code
      JIT compilation
      V8 optimization
```

### Run them

```bash
node Chapter_01_Basics/01_Basics.js          # → "Hello The Testing Academy"
node Chapter_01_Basics/02_JS.js              # → counts to 100000 calling print()
node Chapter_01_Basics/03_JS_Verify_Setup.js # → prints platform / arch / node version
node Chapter_01_Basics/04_HotCode.js         # → triggers V8 hot-path optimization
```

---

## 📖 What's in Chapter 2 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `05_JS_Basics.js` | Variables & Hoisting | `var` vs `let` vs `const`, hoisting behavior |

### Run it

```bash
node Chapter02_Javascript_Concepts/05_JS_Basics.js
```

---

## 📖 What's in Chapter 3 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `06_Identifier_Rules.js` | Identifier Rules | Valid names for variables & functions |
| `07_Identifier_Part2.js` | More Identifiers | Reserved words, naming conventions |
| `08_Comments.js` | Comments | Single-line, multi-line, JSDoc style |
| `js_identifier_rules.js` | Identifier Extras | Additional identifier examples |
| `VS_Code_keyboard_shortcut_windows.md` | VS Code Shortcuts | Windows keyboard cheat sheet |
| `VS_Code_keyboard_shortcut_mac.md` | VS Code Shortcuts | Mac keyboard cheat sheet |

### Run them

```bash
node Chapter03_Identifier_Literals/06_Identifier_Rules.js
node Chapter03_Identifier_Literals/07_Identifier_Part2.js
node Chapter03_Identifier_Literals/08_Comments.js
node Chapter03_Identifier_Literals/js_identifier_rules.js
```

---

## 📖 What's in Chapter 4 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `09_var_let_const.js` | var / let / const | Differences, redeclaration, reassignment, loop leaks |
| `10_functions.js` | Functions | Defining and calling functions in JavaScript |
| `11_var_explained.js` | var Scope | Global scope vs function scope, var behavior |
| `12_let_peope_love.js` | let Scope | Block scope, re-declaration rules, loyalty of let |
| `13_const_explained.js` | const | Immutability, block scope, when to use const |
| `14_var_functionscope.js` | var Deep Dive | Function-scoped var in nested blocks |
| `15_let_scope.js` | let Deep Dive | Block-scoped let in nested blocks |
| `16_Hoisting.js` | Hoisting Basics | How var declarations are hoisted with undefined |
| `17_hoisting_fn.js` | Function Hoisting | Function-scoped hoisting behavior |
| `18_let_hoisting.js` | let Hoisting | Temporal Dead Zone (TDZ) with let |
| `19_let_hoisting_block.js` | Block Hoisting | Block-scoped let hoisting behavior |
| `20_let_const.js` | const TDZ | const temporal dead zone demo |
| `21_Jr_QA.js` | Jr QA Question | Common junior QA interview question on hoisting |

### Run them

```bash
node Chapter_04_Javascript_Concepts/09_var_let_const.js
node Chapter_04_Javascript_Concepts/10_functions.js
node Chapter_04_Javascript_Concepts/11_var_explained.js
node Chapter_04_Javascript_Concepts/12_let_peope_love.js
node Chapter_04_Javascript_Concepts/13_const_explained.js
node Chapter_04_Javascript_Concepts/14_var_functionscope.js
node Chapter_04_Javascript_Concepts/15_let_scope.js
node Chapter_04_Javascript_Concepts/16_Hoisting.js
node Chapter_04_Javascript_Concepts/17_hoisting_fn.js
node Chapter_04_Javascript_Concepts/18_let_hoisting.js
node Chapter_04_Javascript_Concepts/19_let_hoisting_block.js
node Chapter_04_Javascript_Concepts/20_let_const.js
node Chapter_04_Javascript_Concepts/21_Jr_QA.js
```

---

## 📖 What's in Chapter 5 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `22_Literal.js` | Literal Types | typeof string, number, boolean, null, undefined |
| `23_null_undefined.js` | null vs undefined | Deep dive, comparisons, when to use what |
| `24_null.js` | null Examples | Practical null usage examples |
| `25_Literal_All.js` | Integer Literals | Decimal, hex, octal, exponential notation |
| `26_Literal_Number_all.js` | All Number Types | Binary, BigInt, Infinity, NaN, Number properties |
| `27_String.js` | Strings | Single quotes vs double quotes |
| `28_Template_Literal.js` | Template Literals | Backticks, variable interpolation, real Playwright examples |
| `29_Backtick_single_double.js` | Quote Comparison | Feature table: '' / "" vs `` |

### Run them

```bash
node chapter_05_Literal/22_Literal.js
node chapter_05_Literal/23_null_undefined.js
node chapter_05_Literal/24_null.js
node chapter_05_Literal/25_Literal_All.js
node chapter_05_Literal/26_Literal_Number_all.js
node chapter_05_Literal/27_String.js
node chapter_05_Literal/28_Template_Literal.js
node chapter_05_Literal/29_Backtick_single_double.js
```

---

## 📖 What's in Chapter 6 (Available Now)

### Files

| File | Topic | What you'll learn |
|------|-------|-------------------|
| `30_Operator.js` | Assignment Operators | `=` to assign values to variables |
| `31_Arithmetic_OP.js` | Arithmetic Operators | `+`, `-`, `*`, `/` with variables |
| `32_Modulus_OP.js` | Modulus Operator | `%` remainder, odd/even check |
| `33_Expo_OP.js` | Exponentiation | `**` operator for powers |
| `34_IQ.js` | Compound Operators | `+=`, `-=`, `*=`, `/=`, `%=` shorthand |
| `35_Comparsion_OP.js` | Comparison Operators | `>`, `<`, `>=`, `<=`, `==`, `===` basics |
| `36_Comparsion_Strict_loose.js` | Loose vs Strict | `==` coercion surprises vs `===` safety |
| `37_IQ_Loose_Strict.js` | Tricky Equality | Transitivity breaks, `null`, `undefined` gotchas |
| `38_Confusing_Comparsion.js` | Edge Case Deep Dive | `[]`, `{}`, `NaN`, `null >= 0` and more |
| `39_Logical_Op.js` | Logical Operators | `&&` (AND), `||` (OR), `!` (NOT) |
| `40_String_Con_Op.js` | String Concatenation | Using `+=` to build strings |

### Run them

```bash
node chapter_06_Operator/30_Operator.js
node chapter_06_Operator/31_Arithmetic_OP.js
node chapter_06_Operator/32_Modulus_OP.js
node chapter_06_Operator/33_Expo_OP.js
node chapter_06_Operator/34_IQ.js
node chapter_06_Operator/35_Comparsion_OP.js
node chapter_06_Operator/36_Comparsion_Strict_loose.js
node chapter_06_Operator/37_IQ_Loose_Strict.js
node chapter_06_Operator/38_Confusing_Comparsion.js
node chapter_06_Operator/39_Logical_Op.js
node chapter_06_Operator/40_String_Con_Op.js
```

---

## 🔭 What's Coming Next

```mermaid
graph TD
    subgraph next["Next Up — Chapter 7: Control Flow"]
        N1[If / Else] --> N2[Switch]
        N2 --> N3[Ternary Operator]
    end

    subgraph then["Then — Chapter 8: Loops"]
        T1[For Loop] --> T2[While Loop]
        T2 --> T3[For...of / For...in]
    end

    next --> then

    style next fill:#fff3e0,stroke:#e65100
    style then fill:#e8eaf6,stroke:#3f51b5
```

---

## 🎯 What You'll Build (by the end)

```mermaid
graph LR
    Start([Start]) --> JS[Solid JavaScript foundation]
    JS --> TS[TypeScript fluency]
    TS --> PW[Playwright tests with POM]
    PW --> CI[CI/CD-ready test suites]
    CI --> AI[AI-assisted self-healing tests]
    AI --> MCP[Full STLC automation via MCP]
    MCP --> Job([SDET-ready 🎯])

    style Start fill:#e8f5e9
    style Job fill:#ffe0b2
```

By graduation you'll have:

- ✅ A complete JavaScript + TypeScript portfolio
- ✅ Production-grade Playwright test suites with the Page Object Model
- ✅ Hands-on experience with **Playwright CLI**, **codegen**, **trace viewer**
- ✅ Real projects using **AI agents** (Planner / Generator / Healer)
- ✅ End-to-end **MCP-driven STLC automation** (Playwright + Jira + reports)
- ✅ Interview prep — coding questions + Q&A banks

---

## 🧩 How Playwright Fits In (Big Picture)

```mermaid
flowchart TB
    subgraph App["Your App Under Test"]
        UI[Web UI]
        API[REST API]
    end

    subgraph PW["Playwright"]
        Browsers["Chromium · Firefox · WebKit"]
        Locators[Locators & Assertions]
        Fixtures[Fixtures & Config]
        Trace[Trace Viewer]
    end

    subgraph Smart["Smart Automation Layer"]
        Codegen[Codegen]
        Agents["AI Agents<br/>Planner · Generator · Healer"]
        MCP["MCP Servers<br/>Playwright · Jira · Docs"]
    end

    UI --> Browsers
    API --> Locators
    Browsers --> Locators --> Fixtures --> Trace
    Codegen --> Locators
    Agents --> Locators
    MCP --> Agents

    style PW fill:#f3e5f5,stroke:#7b1fa2
    style Smart fill:#e1f5fe,stroke:#01579b
```

---

## 🛠️ Useful Commands (You'll Use These Soon)

```bash
# JavaScript
node <file.js>                           # Run any chapter file

# TypeScript (Week 9+)
npx tsc <file.ts>                        # Compile TS → JS
npx ts-node <file.ts>                    # Run TS directly

# Playwright (Week 10+)
npm init playwright@latest               # Scaffold Playwright project
npx playwright test                      # Run all tests
npx playwright test --ui                 # Interactive UI mode
npx playwright test --debug              # Debug with inspector
npx playwright codegen <url>             # Record a test
npx playwright show-report               # Open HTML report
npx playwright show-trace <trace.zip>    # Open trace viewer
```

---

## 📘 Recommended Study Habit

| Day | Activity |
|-----|----------|
| **Class day** | Watch the live class, take notes |
| **Day +1** | Re-run every example from the chapter folder |
| **Day +2** | Solve 2–3 interview-style problems on the topic |
| **Day +3** | Build a tiny project applying the concept |
| **Weekend** | Recap the week — re-read code, ask doubts in the group |

> **Rule of thumb:** Don't move to the next chapter until you can explain the previous one out loud.

---

## 🔗 Resources

- 📺 [The Testing Academy YouTube](https://youtube.com/@TheTestingAcademy)
- 🌐 [thetestingacademy.com](https://thetestingacademy.com)
- 📚 [Playwright Docs](https://playwright.dev/docs/intro)
- 📚 [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 📦 [Reference Repo — Batch 1](https://github.com/PramodDutta/LearningPlaywrightBatch)

---

## 🙋 Project Info

| | |
|---|---|
| **Author** | Pramod Dutta |
| **Organization** | The Testing Academy |
| **Batch** | 2x (in progress) |
| **Stack** | JavaScript · TypeScript · Playwright · Node 18+ |

---

**Happy learning, future SDETs! 🚀**

*Code with intent. Test with confidence. Automate with joy.*

— Pramod & The Testing Academy team
