const heading4 = React.createElement("h1", { key: "h4", id: "heading4" }, "Hello World in separate js file111");
console.log(heading4);
const root6 = ReactDOM.createRoot(document.getElementById("root"));
console.log(root6);
const heading5 = React.createElement("h1", { key: "h5" }, "Hello World in separate js file222");
const combined = React.createElement("div", { key: "combined" }, [heading4, heading5]);
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(combined);

// ro create nested element
/*
<div id="parent">
    <div id="child">
         <h1>Hello World</h1>
    </div>
</div>


*/
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello World")));
const root5 = ReactDOM.createRoot(document.getElementById("root"));
root5.render(parent);

// suppose you have sibloing element at that time use array
/*
<div id="parent">
    <div id="child">
         <h1>Hello World</h1>
         <h2>Hello World</h2>
    </div>
</div>

*/
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello World"), React.createElement("h2", {}, "Hello World")])
);
const root7 = ReactDOM.createRoot(document.getElementById("root"));
root7.render(parent1);

// suppose you have siblinging element at that time use array
/*
<div id="parent">
    <div id="child1">
         <h1>Hello World</h1>
         <h2>Hello World</h2>
    </div>
    <div id="child2">
         <h1>Hello World</h1>
         <h2>Hello World</h2>
    </div>
</div>
*/

const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "Hello World"), React.createElement("h2", {}, "Hello World")]),
  React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "Hello World"), React.createElement("h2", {}, "Hello World")]),
]);
const root8 = ReactDOM.createRoot(document.getElementById("root"));
root8.render(parent3);
