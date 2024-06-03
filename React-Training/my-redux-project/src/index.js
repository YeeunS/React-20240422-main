// import createStore from "./store/createStore";
// import todos from "./reducers/todos";

// const store = createStore(todos, ["Use Redux"]);

// const unsubscribe = store.subscribe((action) => {
//   console.log("Action dispatched:", action);
//   console.log("New state:", store.getState());
// });

// store.dispatch({
//   type: "ADD_TODO",
//   text: "Read the docs",
// });

// console.log(store.getState());
// // Output: ['Use Redux', 'Read the docs']

// unsubscribe();

// store.dispatch({
//   type: "ADD_TODO",
//   text: "Write code",
// });

// console.log(store.getState());
// // Output: ['Use Redux', 'Read the docs', 'Write code']
