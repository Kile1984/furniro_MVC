const NavigationState = {
  IDLE: "idle",
  LEAVING: "leaving",
  LOADING: "loading",
  RENDERING: "rendering",
  ENTERING: "entering",
};

const validTransitions = {
  [NavigationState.IDLE]: [NavigationState.LEAVING],
  [NavigationState.LEAVING]: [NavigationState.LOADING],
  [NavigationState.LOADING]: [NavigationState.RENDERING],
  [NavigationState.RENDERING]: [NavigationState.ENTERING],
  [NavigationState.ENTERING]: [NavigationState.IDLE],
};

class NavigationManager {
  #state;
  #pendingRoute;

  constructor() {
    this.#state = NavigationState.IDLE;
    this.#pendingRoute = null;
  }

  navigate(route) {
    console.log(route);
  }

  #transitionTo(nextState) {
    this.#state = nextState;
  }
}

export const navigationManager = new NavigationManager();
