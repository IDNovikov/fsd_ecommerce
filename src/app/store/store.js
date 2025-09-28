import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/shop/products/productsSliceStore";
import cartReducer from "@/features/shop/cart/cartSliceStore";
import userReducer from "@/features/user/userSliceStore";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
