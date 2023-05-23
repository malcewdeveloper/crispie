import React from "react";
import clsx from 'clsx';
import classes from './Link.module.scss';


interface ILinkProps {
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    children?: React.ReactNode;
    color?: 'primary' | 'inherit' | string;
    component?: 'button' | string;
    className?: string;
    href?: string;
    underline?: 'always' | 'hover' | 'none';
    style?: React.CSSProperties;
}


const Link = (props: ILinkProps) => {
    const { 
        addonAfter,
        addonBefore,
        children,
        color='inherit',
        component='a',
        className,
        href, 
        underline='always',
        style
    } = props;

    const styles = clsx({
        [classes.root]: true,
        [classes.button]: !href || component === 'button',
        [classes.underlineNone]: underline === 'none',
        [classes.underlineHover]: underline === 'hover',
        [classes.underlineAlways]: underline === 'always',
        [classes.primary]: color === 'primary',
        [classes.inherit]: color === 'inherit',
        [className]: className 
    })
    
    if(!href || component && component === 'button') {
        return <button className={ styles }>{ children }</button>;
    }

    return <a href={ href } className={ styles } style={ style }>{ children }</a>;

}

export default Link;