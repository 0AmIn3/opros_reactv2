import { configureStore } from "@reduxjs/toolkit";
// import goodsSlice from "../features/goods/goodsSlice";
// import likedSlice from "../features/liked/likedSlice";
// import cartSlice from "../features/cart/cartSlice";
import allSlice from "../features/allSlice";
import answersSlice from "../features/answers/answersSlice";

export const store = configureStore({
  reducer: {
    all: allSlice,
    answers: answersSlice,
    // cart: cartSlice,
  },
});
