/* 
node: runtime environment, local envrironment so node-api(express.js)
node.js: runtime environment, programming language in node env
javascript: programming language(browser), web-api
ecmascript: es5, es6(const, let, arrow function, destructuring, promise, class, spread...)
*/

// bundling
// module system: common.js(require, module.export), esmodule(import export default), not supported by browser, node support common.js by default
// download the source code manually
// cdn: content delivery network
// virtual dom: tree object
// HOC hell: similar to drawback of callback hell
// compiler: translate high level code langauge code to machine code
// transpiler: transform syntax sugar to javascript code
// (sytax sugar): syntax within a programming language that is designed to make things easier to read or to express.
// It doesn't add new functionality to the language but provides an alternative syntax that is more convenient and often more readable.
// babel:
// bundler: webpack, turbopack

const App = () => {
  return React.createElement(
    "div",
    { id: "test" },
    React.createElement("b", null, "hello")
  );
  // <div><b>hello</b></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root")); // this is dom element
// root.render(React.createElement("div", { id: "test" }));
// root.render(React.createElement("div", {id: "test"}));
root.render(React.createElement(App));
