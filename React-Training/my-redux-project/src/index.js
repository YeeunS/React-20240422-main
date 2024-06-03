import createStore from "./store/createStore";
import todos from "./reducers/todos";

// Create the store with the todos reducer and an initial state
const store = createStore(todos, ["Use Redux"]);

// Subscribe to state changes
const unsubscribe = store.subscribe((action) => {
  console.log("Action dispatched:", action);
  console.log("New state:", store.getState());
});

// Dispatch an action to add a new todo item
store.dispatch({
  type: "ADD_TODO",
  text: "Read the docs",
});

// Log the current state
console.log(store.getState());
// Output: ['Use Redux', 'Read the docs']

// Unsubscribe from state changes
unsubscribe();

// Dispatch another action to verify the listener is not called anymore
store.dispatch({
  type: "ADD_TODO",
  text: "Write code",
});

// Log the final state
console.log(store.getState());
// Output: ['Use Redux', 'Read the docs', 'Write code']
