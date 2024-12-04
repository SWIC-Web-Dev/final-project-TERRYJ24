const StateManager = (() => {
  let state = []; // Private state

  const subscribers = []; // To notify components of changes

  const getState = () => [...state]; // Return a copy of the state

  const setState = (newState) => {
    state = [...newState];
    subscribers.forEach((callback) => callback(state)); // Notify all subscribers
  };

  const subscribe = (callback) => {
    subscribers.push(callback); // Add new subscriber
  };

  return {
    getState,
    setState,
    subscribe,
  };
})();

export default StateManager;
