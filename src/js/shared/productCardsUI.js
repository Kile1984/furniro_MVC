import { syncHeaderCounts } from "../controllers/headerController";
import { cartActions } from "../state/actions/cartActions";
import { productCardsView } from "../views/shared/productCardsView";
import { productsActions } from "../state/actions/productsActions.js";

export const updateProductCartUI = function (id) {
  const cartItem = cartActions.getCartItemById(id);
  const product = productsActions.getProductById(id);

  productCardsView.updateCartButton({
    id,
    quantity: cartItem?.quantity ?? 0,
    stock: product.properties.stock,
    isDisabled: (cartItem?.quantity ?? 0) >= product.properties.stock,
  });

  syncHeaderCounts();
};
