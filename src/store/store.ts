import { useDispatch } from 'react-redux'
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { ThunkDispatch, thunk } from 'redux-thunk'

import { appReducer } from './reducers/appReducer'
import { authReducer } from './reducers/authReducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

// Type for Dispatch.
type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// Typed dispatch.
export const useAppDispatch = useDispatch<AppDispatchType>

// @ts-ignore
window.store = store
