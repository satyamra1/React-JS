## 📘 React.js - Complete Basic Notes

React is a JavaScript library for building user interfaces, maintained by Meta (Facebook). It enables efficient UI development through reusable components.

---

### ⚛️ 1. What is React?

- A JavaScript library for building fast, interactive UIs.
- Component-based, declarative, and virtual DOM-driven.

---

### 📦 2. Project Setup

#### Using Create React App:

```bash
npx create-react-app my-app
cd my-app
npm start
````

#### Or with Vite (faster):

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

---

### 🧩 3. JSX - JavaScript XML

* Syntax extension allowing HTML-like code in JavaScript.
* Babel compiles JSX into `React.createElement()`.

```jsx
const element = <h1>Hello, React!</h1>;
```

---

### 🧱 4. Components

#### Functional Component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Class Component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

### 🪝 5. React Hooks (Functional Components)

| Hook          | Description                               |
| ------------- | ----------------------------------------- |
| `useState`    | Manage local state                        |
| `useEffect`   | Side effects (e.g., API calls)            |
| `useContext`  | Access context                            |
| `useRef`      | Access DOM refs or store mutable value    |
| `useReducer`  | Alternative to useState for complex logic |
| `useMemo`     | Memoizes a computed value                 |
| `useCallback` | Memoizes a function                       |

---

### ⚙️ 6. State & Props

* **State**: Local data managed in a component.
* **Props**: Data passed from parent to child.

```jsx
const [count, setCount] = useState(0);
```

---

### 🔁 7. Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

### 🔄 8. Lists and Keys

```jsx
const items = ['Apple', 'Banana'];
items.map((item, index) => <li key={index}>{item}</li>);
```

---

### 🔄 9. Forms in React

```jsx
const [name, setName] = useState("");

<form onSubmit={handleSubmit}>
  <input value={name} onChange={(e) => setName(e.target.value)} />
</form>
```

---

### 📁 10. Folder Structure (Common)

```
src/
├── components/
├── pages/
├── App.js
├── index.js
```

---

### 🌐 11. React Router (Routing)

Install:

```bash
npm install react-router-dom
```

Usage:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

---

### 📦 12. State Management (Redux or Context)

#### Using Context API

```jsx
const UserContext = createContext();
<UserContext.Provider value={user}>...</UserContext.Provider>
```

---

### 📡 13. API Calls (useEffect + fetch/axios)

```jsx
useEffect(() => {
  fetch('https://api.example.com')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

---

### 🧪 14. Testing

Install:

```bash
npm install --save-dev jest @testing-library/react
```

Example Test:

```jsx
test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
```

---

### 🎨 15. Styling in React

* **CSS Modules**
* **Styled-components**
* **Tailwind CSS**
* **SASS / SCSS**
* **Inline styles**

Example:

```jsx
<div style={{ backgroundColor: 'red' }}>Hello</div>
```

---

### 🚀 16. Deployment

#### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add in `package.json`:

```json
"homepage": "https://yourusername.github.io/repo-name"
```

Scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

#### Vercel / Netlify

* Drag and drop your `build` folder
* Or connect GitHub repo for CI/CD

---

### ✅ React Interview Tip

Be strong in:

* **JSX & Virtual DOM**
* **Hooks (especially `useState`, `useEffect`)**
* **State vs Props**
* **Conditional Rendering**
* **Performance optimization (memo, lazy loading)**



