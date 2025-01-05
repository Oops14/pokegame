import { useDispatch } from 'react-redux'
import { UnknownAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { ThunkDispatch, thunk } from 'redux-thunk'

import { appReducer } from './reducers/appReducer'
import { authReducer } from './reducers/authReducer'
import { pokemonReducer } from '@/store/reducers/pokemonReducer.ts'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  pokemon: pokemonReducer,
})

export const store = legacy_createStore(rootReducer as any, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

// Type for Dispatch.
type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, UnknownAction>

// Typed dispatch.
export const useAppDispatch = useDispatch<AppDispatchType>

// @ts-ignore
window.store = store
