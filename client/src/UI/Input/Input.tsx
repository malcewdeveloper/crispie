import React from "react";
import clsx from 'clsx';
import classes from './Input.module.scss';

export interface IInputBaseProps {
    autoComplete?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | string;
    id?: string;
    style?: React.CSSProperties;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    className?: string;
    fullWidth?: boolean;
    value?: any;
}

export default function Input(props: IInputBaseProps): ReturnType<React.FC> {
    const { 
        autoComplete,
        placeholder,
        disabled, 
        id,
        onChange,
        defaultValue,
        type = 'text',
        style,
        className,
        fullWidth,
        error,
        value
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
        [classes.error]: error,
        [className]: className
    })

    const [inputValue, setInputValue] = React.useState(value || '');
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(event);
        }else {
            setInputValue(event.target.value);
        }
    }

    return (
        <input 
        autoComplete={ autoComplete }
        disabled={ disabled }
        id={ id } 
        className={ styles } 
        type={ type }
        placeholder={ placeholder }
        onChange={ handleChange }
        value={ value && onChange ? value : inputValue }
        style={ style }
        ref={ inputRef } />
    )
}