const createStore = (reducer, preloadedState = {}, enhancer = {}) => {
  const store = {};
  store.state = preloadedState;
  store.listeners = []; // Array to hold subscription callbacks

  // Function to get the current state
  store.getState = () => store.state;

  // Function to dispatch actions and update state
  store.dispatch = (action) => {
    store.state = reducer(store.state, action);

    // Notify the state change
    store.listeners.forEach((listener) => listener(action));
    return action;
  };

  // Function to subscribe to state changes
  store.subscribe = (listener) => {
    store.listeners.push(listener); // Add the listener to the array

    return () => {
      store.listeners = store.listeners.filter((a) => a !== listener); // Remove the listener from the array
    };
  };

  return store;
};

export default createStore;
