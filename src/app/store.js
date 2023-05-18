import { configureStore } from "@reduxjs/toolkit";
import CompanySlice from "../features/CompanySlice";
import UsersSlice from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    all: CompanySlice,
    users: UsersSlice,
  },
});
