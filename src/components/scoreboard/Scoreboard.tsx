import React from 'react';
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    startCounterValue: number
    MAXCounterValue: number
    errorDescription: string
}
export const Scoreboard = (props: ScoreboardPropsType) => {

    return (
        <div className={s.tablo}>
            {
                props.errorDescription === '' ?
                    <span className={props.startCounterValue < props.MAXCounterValue ? s.blackCounter : s.redCounter}>
                        {props.startCounterValue}
                    </span>
                    : <span className={props.errorDescription==='Incorrect  value'? s.redCounter: s.blackCounter}>{props.errorDescription}</span>
            }

        </div>
    );
};
