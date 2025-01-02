export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false,
}

export type InitialStateType = {
  status: RequestStatusType
  error: string | null
  isInitialized: boolean
}

export type setLoaderACType = ReturnType<typeof setLoaderAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>
export type setAppInitializedACType = ReturnType<typeof setAppInitializedAC>

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.payload.status }
    case 'APP/SET-ERROR':
      return { ...state, error: action.payload.error }
    case 'APP/SET-INITIALIZED':
      return { ...state, isInitialized: action.payload.ini }
    default:
      return state
  }
}

type ActionsType = setLoaderACType | setAppErrorACType | setAppInitializedACType

export const setLoaderAC = (status: RequestStatusType) => {
  return {
    type: 'APP/SET-STATUS',
    payload: {
      status,
    },
  } as const
}

export const setAppErrorAC = (error: null | string) => {
  return {
    type: 'APP/SET-ERROR',
    payload: {
      error,
    },
  } as const
}

export const setAppInitializedAC = (ini: boolean) => {
  return {
    type: 'APP/SET-INITIALIZED',
    payload: {
      ini,
    },
  } as const
}
