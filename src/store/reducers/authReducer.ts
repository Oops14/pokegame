import { setAppErrorACType, setLoaderACType } from './appReducer'

const LOGIN = 'login/SET-IS-LOGGED-IN'

const initialStateFromStorage = JSON.parse(localStorage.getItem('isLoggedIn') || 'false')

const LoginInitialState = {
  isLoggedIn: initialStateFromStorage,
}

export type LoginInitialStateType = {
  isLoggedIn: boolean
}

export const authReducer = (
  state: LoginInitialStateType = LoginInitialState,
  action: AuthActionsType
): LoginInitialStateType => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.value))
      return { ...state, isLoggedIn: action.payload.value }
    default:
      return state
  }
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({ type: LOGIN, payload: { value } }) as const

export const logoutAC = () => {
  localStorage.removeItem('isLoggedIn')
  return { type: LOGIN, payload: { value: false } } as const
}

// types
type AuthActionsType = ReturnType<typeof setIsLoggedInAC> | setLoaderACType | setAppErrorACType
