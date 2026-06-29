import { filterDrawerView } from "../views/shop/filterDrawerView";

export const controlFilter = function ({ target }) {
  const { name, value, checked, type } = target;
  console.log(name, value, checked, type);
  console.log(target.checked);
};
