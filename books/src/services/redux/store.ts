import { configureStore } from '@reduxjs/toolkit'
import auth, { refreshTokenFunction } from './reducer/auth'

export const store = configureStore({
  reducer: {
      auth: auth
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.dispatch(refreshTokenFunction())