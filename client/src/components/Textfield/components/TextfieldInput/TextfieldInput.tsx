import React from 'react';
import clsx from 'clsx';
import Input from '../../../../UI/Input/Input';
import TextfieldHelperText from '../TextfieldHelperText/TextfieldHelperText';
import TextfieldLabel from '../TextfieldLabel/TextfieldLabel';
import { IInputBaseProps } from '../../../../UI/Input/Input';
import classes from './TextfieldInput.module.scss';
import InputAddon from '../../../../UI/InputAddon/InputAddon';


interface ITextfieldInputProps extends IInputBaseProps {
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    label?: string;
}

export default function TextfieldInput(props: ITextfieldInputProps): ReturnType<React.FC> {
    const { 
        autoComplete,
        placeholder,
        disabled, 
        id,
        defaultValue,
        type = 'text',
        style,
        error,
        fullWidth,
        addonAfter,
        addonBefore,
        label,
        onChange,
        value
    } = props;

    const handleFocus = (event: React.FocusEvent<HTMLElement>) => {
        
    }

    const styles = clsx({
        [classes.root]: true,
        [classes.fullWidth]: fullWidth,
        [classes.addonBefore]: addonBefore,
        [classes.addonAfter]: addonAfter,
    })

    return (
        <div className={ styles } onFocus={ handleFocus }>
            {addonBefore && 
            <InputAddon position='start'>{ addonBefore }</InputAddon>}
            <Input
            autoComplete={ autoComplete }
            disabled={ disabled }
            placeholder={ placeholder }
            id={ id }
            defaultValue={ defaultValue }
            type={ type }
            style={ style }
            error={ error }
            fullWidth={ fullWidth }
            onChange={ onChange }
            value={ value } />
            {label && 
            <TextfieldLabel
            color='primary'
            disabled={ disabled }
            htmlFor={ id }
            error={ error }>{ label }</TextfieldLabel>}
            {addonAfter && 
            <InputAddon position='end'>{ addonAfter }</InputAddon>}
        </div>
    )
}