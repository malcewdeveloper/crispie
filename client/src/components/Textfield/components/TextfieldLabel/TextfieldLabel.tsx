import React from "react";
import InputLabel from "../../../../UI/InputLabel/InputLabel";
import { IInputLabelBaseProps } from "../../../../UI/InputLabel/InputLabel"; 
import clsx from "clsx";
import classes from './TextfieldLabel.module.scss';

interface TextfieldLabel extends IInputLabelBaseProps {

}

export default function TextfieldLabel(props: TextfieldLabel): ReturnType<React.FC> {
    const { 
        children, 
        error, 
        htmlFor 
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.error]: error
    })

    return (
        <InputLabel 
        htmlFor={ htmlFor }
        error={ error } 
        className={ styles }>{ children }</InputLabel>
    )
}