import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    isDisabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={s.btnStyle} onClick={props.callback} disabled={props.isDisabled}>
            {props.title}
        </button>
    );
};
