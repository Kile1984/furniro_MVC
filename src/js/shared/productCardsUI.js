import { syncHeaderCounts } from "../controllers/headerController";
import { cartActions } from "../state/actions/cartActions";
import { productCardsView } from "../views/shared/productCardsView";

export const updateProductCartUI = function (id) {
  const cartItem = cartActions.getCartItemById(id);

  productCardsView.updateCartButton({
    id,
    quantity: cartItem?.quantity || 0,
    stock: cartItem?.properties.stock,
    isDisabled: cartItem?.quantity >= cartItem?.properties.stock,
  });

  syncHeaderCounts();
};
