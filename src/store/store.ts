import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";
const rootReducer = combineReducers({
    counter:counterReducer
})

let preloadedMax;
let preloadedStart;
let maxValFromLS = localStorage.getItem('max');
let startValFromLS = localStorage.getItem('start')
if(maxValFromLS && startValFromLS){
    preloadedMax=JSON.parse(maxValFromLS)
    preloadedStart=JSON.parse(startValFromLS)
}

export const store = legacy_createStore(rootReducer, preloadedMax, preloadedStart)
export type AppRootStateType = ReturnType<typeof rootReducer>
store.subscribe(()=>{
    localStorage.setItem('start', JSON.stringify(store.getState().counter.StartCounterValue))
    localStorage.setItem('max', JSON.stringify(store.getState().counter.MAXCounterValue))
})
// @ts-ignore
window.store = store;