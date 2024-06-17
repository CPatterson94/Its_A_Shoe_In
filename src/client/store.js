import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api/api";
import dataReducer from "./redux/slices/dataSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
