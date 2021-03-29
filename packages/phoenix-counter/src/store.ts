import {
  configureStore, ThunkAction, Action, EnhancedStore,
} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store: EnhancedStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
