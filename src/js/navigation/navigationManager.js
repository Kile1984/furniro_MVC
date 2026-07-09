const NavigationState = {
  IDLE: "idle",
  LEAVING: "leaving",
  LOADING: "loading",
  RENDERING: "rendering",
  ENTERING: "entering",
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
