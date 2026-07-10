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
    console.log(navigationManager);
    // pending navigation
    if (this.#state !== "idle") {
      this.#pendingRoute = route;
      console.log(this.#pendingRoute);
      return;
    }

    // navigation begine
    this.#transitionTo(NavigationState.LEAVING);
    // uradi leaving posao

    this.#transitionTo(NavigationState.LOADING);
    // uradi loading posao

    this.#transitionTo(NavigationState.RENDERING);
    // uradi rendering posao

    this.#transitionTo(NavigationState.ENTERING);
    // uradi entering posao

    this.#transitionTo(NavigationState.IDLE);
  }

  #transitionTo(nextState) {
    this.#state = nextState;
  }
}

export const navigationManager = new NavigationManager();
