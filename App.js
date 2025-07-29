/**
 *
 * <div id="parent">
 *       <div id="child">
 *           <h1>I'm h1 tag</h1>
 *           <h2>I'm h2 tag</h1>
 *       </div>
 * </div>
 *
 *
 * ReactElement(Object) ==> HTML (Browser Understands)
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h1", {}, "I'm h1 tag"),
  ]) //sibling children
);
2;
//lil complex to code that's why jsx

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, // {Atributes such as Id, classes}
  "Hello World from React!"
); // create element using React

console.log(heading); //gives react element - Object
const root = ReactDOM.createRoot(document.getElementById("root")); // create root using ReactDOM

root.render(heading);
root.render(parent);
