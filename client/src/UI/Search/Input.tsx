import React from "react";
import clsx from 'clsx';
import classes from './Input.module.scss';

interface IInputProps {
    placeholder?: string;
    loading?: boolean;
    disabled?: boolean;
}

export default function Input(props: IInputProps): ReturnType<React.FC> {
    const { 
        placeholder,
        loading,
        disabled
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.disabled]: disabled
    })

    return (
        <input className={ styles } type='text' placeholder={ placeholder }></input>
    )
}