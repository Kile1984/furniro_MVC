import { state } from "../state/state.js";
import { views } from "../views/views.js";

console.log(views);

export const renderApp = function () {
  views[state.currentRoute]?.render();
};
