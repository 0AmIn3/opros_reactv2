import { configureStore } from "@reduxjs/toolkit";
// import goodsSlice from "../features/goods/goodsSlice";
// import likedSlice from "../features/liked/likedSlice";
// import cartSlice from "../features/cart/cartSlice";
import CompanySlice from "../features/CompanySlice";
import answersSlice from "../features/answers/answersSlice";
import UsersSlice from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    all: CompanySlice,
    answers: answersSlice,
    users: UsersSlice,
  },
});
