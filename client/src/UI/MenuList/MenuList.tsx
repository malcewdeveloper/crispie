import React from "react";
import Typography from "../Typography/Typography";
import clsx from 'clsx';
import classes from './MenuList.module.scss';


interface IMenuListProps {
    children?: React.ReactNode;
    className?: string;
    header?: string;
    style?: React.CSSProperties;
}

export default function MenuList(props: IMenuListProps): ReturnType<React.FC> {
    
    const { 
        children, 
        className, 
        header, 
        style 
    } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <ul className={ styles } style={ style }>
            {header && <Typography variant='h4' style={{ padding: '6px 16px 16px' }}>{ header }</Typography>}
            { children }
        </ul>
    )
}
