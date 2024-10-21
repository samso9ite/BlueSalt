import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const Store = configureStore({
    reducer: {

    }, 
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false})
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;