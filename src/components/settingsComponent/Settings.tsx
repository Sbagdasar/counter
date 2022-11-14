import React, {ChangeEvent, FocusEvent, useState} from 'react';
import {Button} from "../button/Button";
import s from "./Settings.module.css";
import '../../App.css'

type SettingsPropsType = {
    callback: (start: number, max: number) => void
    setDescription: (title: string) => void
    maxValue:number
    startValue:number
    setStart:(value:number)=>void
    setMax:(value:number)=>void
    showSettings?:(value:boolean)=>void
}
export const Settings: React.FC<SettingsPropsType> = ({maxValue, startValue,...props}) => {
    const [btnState, setBtnState] = useState(true)

    const startOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = +e.currentTarget.value
        if (startValue < 0 || startValue>=maxValue) {
            props.setDescription('Incorrect  value')
            props.setStart(startValue)
            setBtnState(true)
        }else {
            props.setDescription(`enter values and press 'set'`)
            setBtnState(false)
            props.setStart(startValue)
        }

    }
    const maxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = +e.currentTarget.value

        if (maxValue < 0 || maxValue <= startValue) {
            props.setDescription('Incorrect  value')
            setBtnState(true)
           props.setMax(maxValue)
        }else {
            props.setDescription(`enter values and press 'set'`)
            setBtnState(false)
            props.setMax(maxValue)
        }

    }
    const setSettings = () => {
        props.showSettings?.(false) // проверка на undefined
        props.callback(startValue, maxValue)
        props.setDescription('')
        /*localStorage.setItem('start', JSON.stringify(startValue))
        localStorage.setItem('max', JSON.stringify(maxValue))*/

    }
    const setErrorTitle = (e: FocusEvent<HTMLInputElement>) => {
        setBtnState(false)
        props.setDescription(`enter values and press 'set'`)
    }
    return (
        <div className={s.settingsMain}>
            <div className={s.inputContainer}>
                <div className={s.inputsStyle}>
                    <label id={'maxVal'}>max-value: </label>
                    <input type="number"
                           name={'maxVal'}
                           value={maxValue}
                           onChange={maxOnChangeHandler}
                           onFocus={setErrorTitle}
                           className={maxValue<0 || maxValue<=startValue? s.errInpValue:''}/>
                </div>

                <div className={s.inputsStyle}>
                    <label id={'startVal'}>start value: </label>
                    <input type="number"
                           name={'startVal'}
                           value={startValue}
                           onChange={startOnChangeHandler}
                           onFocus={setErrorTitle}
                           className={startValue<0 || maxValue<=startValue? s.errInpValue:''}/>
                </div>
            </div>
            <div className={s.btnSettingStyle}>
                <Button title={'set'} callback={setSettings} isDisabled={btnState}/>
            </div>
        </div>
    );
};

