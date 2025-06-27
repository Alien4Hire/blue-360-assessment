# Blue 360° Assessment Solutions

This repository contains complete solutions to the two problems assigned in the Blue 360° technical assessment. Each problem is organized into its own folder for clarity and separation of concerns.

---

## 📁 ProblemOne

### Task:
Transform and manipulate nested data according to specific instructions:

1. **Flatten nested arrays** into individual object entries.
2. **Sum arrays** inside the objects and store as `some_total`.
3. **Filter** to only include guests with a `guest_type` of `"guest"`.
4. **Sort** the array alphabetically by `last_name`, then `first_name`.

### How to Run:
No build setup is needed. Open `index.html` directly in your browser after running:

```bash
npm install
```

All code is written in `index.js`.

---

## 📁 ProblemTwo

### Task:
A fully functional calculator app styled using Tailwind CSS and built in **React**. It replicates the behavior of a mobile phone calculator, including support for:

- Operator chaining and order of operations
- Percent and sign toggling (`+/-`)
- Floating point numbers (rounded to 9 decimals)
- Keyboard input handling

### How to Run:

1. Navigate into the calculator app directory:

```bash
cd blue-360-assessment/ProblemTwo/calculator-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

This will launch the app in your default browser at `http://localhost:3000`.

---

## 🛠 Tech Stack

- **React** (ProblemTwo)
- **Tailwind CSS**
- **Math.js** for reliable expression evaluation
- **Vanilla JavaScript** (ProblemOne)

---

## 🧠 Author Notes

- ProblemOne focuses on **data transformation and sorting logic.**
- ProblemTwo demonstrates **robust UI logic** for calculating expressions in a mobile-friendly layout.

Each folder is self-contained and ready to run or review. No additional setup required beyond what's listed.
