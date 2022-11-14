const initialState = {
    counterValue: 0,
    errorDescription: 'enter value',
    MAXCounterValue: 5,
    StartCounterValue: 0,
    showSettings: false
}

export type InitialStateType = {
    counterValue: number
    errorDescription: string
    MAXCounterValue: number
    StartCounterValue: number
    showSettings: boolean
}
type IncCounterACType = ReturnType<typeof incCounterAC>
type ResetCounterACType = ReturnType<typeof resetCounterAC>
type SetSettingsACType = ReturnType<typeof setSettingsAC>
type SetDescriptionACType = ReturnType<typeof setDescriptionAC>
type ShowSettingsHandlerACType = ReturnType<typeof showSettingsHandlerAC>
type SetStartCounterValueACType = ReturnType<typeof setStartCounterValueAC>
type SetMaxACType = ReturnType<typeof setMaxAC>
type SetShowSettingsACType = ReturnType<typeof setShowSettingsAC>
type ActionType =
    IncCounterACType
    | ResetCounterACType
    | SetSettingsACType
    | SetDescriptionACType
    | ShowSettingsHandlerACType
    | SetStartCounterValueACType
    | SetMaxACType
    | SetShowSettingsACType


export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            return {...state, counterValue: state.counterValue + 1}
        case "RESET-COUNTER":
            return {...state, counterValue: state.StartCounterValue}
        case "SET-SETTINGS":
            return {...state, counterValue: action.start, MAXCounterValue: action.max, StartCounterValue: action.start}
        case "SET-DESCRIPTION":
            return {...state, errorDescription: action.title}
        case "SHOW-SETTINGS":
            return {...state, showSettings: action.isShow}
        case "SET-START":
            return {...state, StartCounterValue: action.value}
        case "SET-MAX":
            return {...state, MAXCounterValue: action.value}
        case "SET-SHOW-SETTINGS":
            return {...state, showSettings:action.value}
        default:
            return state
    }
}

export const incCounterAC = () => ({
    type: "INCREMENT-COUNTER" as const
})
export const resetCounterAC = () => ({
    type: "RESET-COUNTER" as const
})
export const setSettingsAC = (start: number, max: number) => ({
    type: "SET-SETTINGS" as const,
    start,
    max
})
export const setDescriptionAC = (title: string) => ({
    type: "SET-DESCRIPTION" as const,
    title
})
export const showSettingsHandlerAC = (isShow: boolean) => ({
    type: "SHOW-SETTINGS" as const,
    isShow
})
export const setStartCounterValueAC = (value: number) => ({
    type: "SET-START" as const,
    value
})
export const setMaxAC = (value: number) => ({
    type: "SET-MAX" as const,
    value
})
export const setShowSettingsAC = (value: boolean) => ({
    type: "SET-SHOW-SETTINGS" as const,
    value
})