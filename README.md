React Foundations: Understanding the DOM vs. React DOM
This project documents my journey from traditional JavaScript DOM manipulation to building complex, nested structures using React 18.

🚀 What I Learned
1. Traditional JS vs. React
Plain JavaScript: Uses document.createElement and appendChild. It is imperative, meaning I have to tell the browser exactly how to add each element.

React: Uses React.createElement. It is declarative, meaning I describe what the UI should look like, and React handles the rendering.

2. The Power of createRoot
ReactDOM.createRoot() is the entry point for React.

Crucial Lesson: React wipes out everything inside the root element when it renders. Any HTML already inside <div id="root"> will be replaced by the React content.

Warning Fix: I learned that you should only call createRoot once for a specific container to avoid performance warnings.

3. Creating Nested Structures
I practiced building complex HTML trees using React.createElement.

Structure: React.createElement(type, props, children)

Nesting: By passing a React.createElement as the third argument (children), I can create deep trees (e.g., Parent > Child > H1).

4. Handling Sibling Elements (Arrays)
When a parent has more than one child (siblings), we pass them as an array [].

The "Key" Prop: React requires a unique key for items in an array. This helps React identify which items have changed, been added, or been removed, making the UI updates much faster.

5. CSS Integration
I learned that props passed in React.createElement (like { id: "heading4" }) translate directly to HTML attributes.

This allows me to target elements in my index.css file just like standard HTML.

🛠️ Code Evolution Examples
Nested Sibling Structure
JavaScript
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { key: "h1" }, "Hello World"),
    React.createElement("h2", { key: "h2" }, "Hello World")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "h3" }, "Hello World"),
    React.createElement("h2", { key: "h4" }, "Hello World")
  ])
]);
⚠️ Important Pitfalls to Avoid
Duplicate Roots: Don't call createRoot multiple times on the same element; it triggers a React warning and resets the state.

Missing Keys: Always provide a key prop when rendering a list or array of elements to keep React's "Reconciliation" process happy.

Script Order: Ensure the React CDN links are loaded before your App.js file, or the browser won't know what React or ReactDOM is!