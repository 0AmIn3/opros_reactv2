import { configureStore } from "@reduxjs/toolkit";
import CompanySlice from "../features/CompanySlice";
import UsersSlice from "../features/users/UsersSlice";
import SampleSlice from "../features/sample/SampleSlice";

export const store = configureStore({
  reducer: {
    all: CompanySlice,
    users: UsersSlice,
    sample: SampleSlice
  },
});
