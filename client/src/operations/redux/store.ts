import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./EventSlice"

export const store = configureStore({
    reducer: {
      EventSlice: EventSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;