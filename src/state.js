// src/state.js
const StateManager = (() => {
  let state = []; // Initialize the state variable

  // Return the state manager object with methods to get, set, and subscribe to the state
  return {
    getState: () => state,
    setState: (newState) => {
      state = newState;
    },
    subscribe: (callback) => {
      callback(state);
    },
  };
})();

export default StateManager; // Correct default export
