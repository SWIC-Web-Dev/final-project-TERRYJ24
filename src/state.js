class StateManager {
  static state = []; // Initialize with an empty array as the state

  // Get current state
  static getState() {
    return this.state;
  }

  // Set new state
  static setState(newState) {
    this.state = newState;
  }
}

export default StateManager;
