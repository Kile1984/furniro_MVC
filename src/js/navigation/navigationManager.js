const NavigationState = {
  IDLE: "idle",
  LEAVING: "leaving",
  LOADING: "loading",
  RENDERING: "rendering",
  ENTERING: "entering",
  ERROR: "error",
};

const validTransitions = {
  [NavigationState.IDLE]: [NavigationState.LEAVING],
  [NavigationState.LEAVING]: [NavigationState.LOADING],
  [NavigationState.LOADING]: [NavigationState.RENDERING, NavigationState.ERROR],
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

  async #leave() {
    this.#transitionTo(NavigationState.LEAVING);
  }

  async #load(route) {
    this.#transitionTo(NavigationState.LOADING);
  }

  async #render() {
    this.#transitionTo(NavigationState.RENDERING);
  }

  async #enter() {
    this.#transitionTo(NavigationState.ENTERING);
  }

  #finishNavigation() {
    this.#transitionTo(NavigationState.IDLE);
  }

  async navigate(route) {
    // pending navigation
    if (this.#state !== NavigationState.IDLE) {
      this.#pendingRoute = route;
      return;
    }

    await this.#leave();

    await this.#load(route);

    await this.#render();

    await this.#enter();

    this.#finishNavigation();
  }

  #transitionTo(nextState) {
    const allowedTransitions = validTransitions[this.#state];

    if (!allowedTransitions.includes(nextState)) {
      throw new Error(
        `Invalid transition from "${this.#state}" to "${nextState}"`,
      );
    }
    console.log(allowedTransitions, nextState);
    this.#state = nextState;
  }
}

export const navigationManager = new NavigationManager();
