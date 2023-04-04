import React from "react";
import InputHelperText from "../../../../UI/InputHelperText/InputHelperText";
import { IInputHelperTextProps } from "../../../../UI/InputHelperText/InputHelperText";
import clsx from "clsx";
import classes from './TextfieldHelperText.module.scss';


interface ITextfieldHelperTextProps extends IInputHelperTextProps {

}

export default function TextfieldHelperText(props: ITextfieldHelperTextProps): ReturnType<React.FC> {

    const { error, children } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <InputHelperText className={ styles } error={ error }>{ children }</InputHelperText>
    )
}