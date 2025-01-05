export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
}

export type InitialStateType = {
  status: RequestStatusType
  error: string | null
}

export type setLoaderACType = ReturnType<typeof setLoaderAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.payload.status }
    case 'APP/SET-ERROR':
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}

type ActionsType = setLoaderACType | setAppErrorACType

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
