import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {Button} from "./components/button/Button";
import {Settings} from "./components/settingsComponent/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    incCounterAC,
    InitialStateType,
    resetCounterAC,
    setDescriptionAC, setMaxAC,
    setSettingsAC, setShowSettingsAC, setStartCounterValueAC,
    showSettingsHandlerAC
} from "./store/counterReducer";

function App() {
    /*const [counterValue, setCounterValue] = useState<number>(0)
    const [errorDescription, setErrorDescription] = useState('')
    const [MAXCounterValue, setMAXCounterValue] = useState<number>(5)
    const [StartCounterValue, setStartCounterValue] = useState<number>(0)// для сброса значения счетчика
    const [showSettings, setShowSettings] = useState<boolean>(false)
    useEffect(() => {

        let maxValFromLS = localStorage.getItem('max');
        let startValFromLS = localStorage.getItem('start')

        if (maxValFromLS && startValFromLS) {
            let maxVal = JSON.parse(maxValFromLS)
            let startVal = JSON.parse(startValFromLS)

            setMAXCounterValue(maxVal)
            setStartCounterValue(startVal)
            setCounterValue(startVal)
        }

    }, [])
*/
    const dispatch = useDispatch();
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)
    const MAXCounterValue = useSelector<AppRootStateType, number>(state => state.counter.MAXCounterValue)
    const StartCounterValue = useSelector<AppRootStateType, number>(state => state.counter.StartCounterValue)
    const showSettings = useSelector<AppRootStateType, boolean>(state => state.counter.showSettings)
    const errorDescription = useSelector<AppRootStateType, string>(state => state.counter.errorDescription)

    const incCounter = () => {
        if (counterValue < MAXCounterValue) {
            dispatch(incCounterAC())
        }
    }
    const resetCounter = () => {
        dispatch(resetCounterAC())
    }
    const setSettings = (start: number, max: number) => {
        dispatch(setSettingsAC(start, max))
    }
    const setDescription = (title: string) => {
        dispatch(setDescriptionAC(title))
    }
    const showSettingsHandler = () => {
        dispatch(showSettingsHandlerAC(true))
    }
    const setStartCounterValue = (value: number) => {
        dispatch(setStartCounterValueAC(value))
    }
    const setMAXCounterValue = (value: number) => {
        dispatch(setMaxAC(value))
    }
    const setShowSettings = (value: boolean) => {
        dispatch(setShowSettingsAC(value))
    }
    return (
        <div className="App">
            {
                showSettings ? <Settings callback={setSettings}
                                         setDescription={setDescription}
                                         maxValue={MAXCounterValue}
                                         startValue={StartCounterValue}
                                         setStart={setStartCounterValue}
                                         setMax={setMAXCounterValue}
                                         showSettings={setShowSettings}/> :
                    <div className={"counter"}>
                        <Scoreboard startCounterValue={counterValue}
                                    MAXCounterValue={MAXCounterValue}
                                    errorDescription={errorDescription}/>
                        <div className={'btnsStyle'}>
                            <Button title={'inc'}
                                    callback={incCounter}
                                    isDisabled={errorDescription !== '' || counterValue === MAXCounterValue}/>
                            <Button title={'reset'}
                                    callback={resetCounter}
                                    isDisabled={errorDescription !== ''}/>
                            <Button title={"set"} callback={showSettingsHandler} isDisabled={false}/>
                        </div>
                    </div>

            }
        </div>
    );
}

export default App;
