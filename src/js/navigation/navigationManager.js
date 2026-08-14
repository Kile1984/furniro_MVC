import * as pageTransition from "../views/pageTransitionView.js";
import { routerActions } from "../state/actions/routerActions.js";
import { renderApp } from "../core/render.js";
import * as navigationUI from "../shared/navigationUI.js";
import { navigationActions } from "../state/actions/navigationActions..js";
import { state } from "../state/state.js";

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
  #currentRoute;

  #handleScroll(route) {
    const { returnRoute, returnScrollY } = state.navigation;

    if (returnRoute === route) {
      window.scrollTo(0, returnScrollY);
      navigationActions.clearReturnNavigation();
      return;
    }

    if (route === "product") {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollTo(0, 0);
    navigationActions.clearReturnNavigation();
  }

  constructor() {
    this.#state = NavigationState.IDLE;
    this.#pendingRoute = null;
  }

  async #leave(route) {
    this.#transitionTo(NavigationState.LEAVING);

    navigationUI.close();

    await pageTransition.startExitAnimation();
  }

  async #load(route) {
    this.#transitionTo(NavigationState.LOADING);

    routerActions.setRoute(route);
  }

  async #render() {
    this.#transitionTo(NavigationState.RENDERING);

    renderApp();
  }

  async #enter() {
    this.#transitionTo(NavigationState.ENTERING);

    navigationUI.initialize();

    await pageTransition.startEnterAnimation();
  }

  #finishNavigation() {
    this.#transitionTo(NavigationState.IDLE);

    const pending = this.#pendingRoute;
    this.#pendingRoute = null;

    if (pending) this.navigate(pending);
  }

  async navigate(route) {
    // pending navigation
    if (this.#state !== NavigationState.IDLE) {
      this.#pendingRoute = route;
      return;
    }

    await this.#leave(route);

    await this.#load(route);

    await this.#render();

    this.#handleScroll(route);

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

    this.#state = nextState;
  }
}

export const navigationManager = new NavigationManager();
