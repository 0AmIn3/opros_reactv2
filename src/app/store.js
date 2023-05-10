import { configureStore } from "@reduxjs/toolkit";
// import goodsSlice from "../features/goods/goodsSlice";
// import likedSlice from "../features/liked/likedSlice";
// import cartSlice from "../features/cart/cartSlice";
import allSlice from "../features/goods/allSlice";

export const store = configureStore({
  reducer: {
    all: allSlice,
    // liked: likedSlice,
    // cart: cartSlice,
  },
});
