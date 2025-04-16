import { configureStore } from '@reduxjs/toolkit';
import bettingReducer from "../features/betting/bettingSlice"

export const store = configureStore({
  reducer: {
    betting: bettingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;