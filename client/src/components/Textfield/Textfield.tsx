import React from "react";
import TextfieldHelperText from "./components/TextfieldHelperText/TextfieldHelperText";
import TextfieldInput from './components/TextfieldInput/TextfieldInput';
import { IInputBaseProps } from '../../UI/Input/Input';
import { IInputLabelBaseProps } from "../../UI/InputLabel/InputLabel";
import { IInputHelperTextProps } from "../../UI/InputHelperText/InputHelperText";
import clsx from 'clsx';
import classes from './Textfield.module.scss';

interface ITextfieldProps extends IInputBaseProps, IInputLabelBaseProps, IInputHelperTextProps {
    autoComplete?: string;
    placeholder?: string;
    type?: 'text' | string;
    id?: string;
    defaultValue?: string | number;
    color?: 'primary' | 'danger' | 'error';
    disabled?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
    error?: boolean;
    loading?: boolean;
    label?: string;
    fullWidth?: boolean;
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    helperText?: string;
}

export default function Textfiled(props: ITextfieldProps): ReturnType<React.FC> {
    const { 
        autoComplete,
        placeholder,
        disabled, 
        id,
        defaultValue,
        type = 'text',
        style,
        loading,
        error,
        label,
        onChange,
        fullWidth,
        helperText,
        addonAfter,
        addonBefore,
        className,
        value
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
        [className]: className
        
    })

    return (
        <div className={ styles } style={ style }>
            <TextfieldInput
            addonAfter={ addonAfter }
            addonBefore={ addonBefore }
            id={ id }
            type={ type }
            autoComplete={ autoComplete }
            disabled={ disabled }
            defaultValue={ defaultValue }
            placeholder={ placeholder }
            error={ error }
            fullWidth
            onChange={ onChange }
            value={ value }
            label={ label } />
            {helperText &&
            <TextfieldHelperText error={ error }>{ helperText }</TextfieldHelperText>}
        </div>
    )
}