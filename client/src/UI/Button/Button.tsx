import React from "react";
import clsx from 'clsx';
import classes from './Button.module.scss';

export interface IBaseButton {
  children?: React.ReactNode;
  color?: 'primary' | string;
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
}

const Button = (props: IBaseButton): ReturnType<React.FC> => {

  const { 
    color, 
    children, 
    disabled, 
    variant='text', 
    iconBefore,
    iconAfter,
    style,
    href
  } = props;

  const styles = clsx({
    [classes.root]: true,
    [classes.primary]: color !== 'primary' ? false : true,
    [classes.disabled]: disabled,
    [classes.text]: variant === 'text',
    [classes.outlined]: variant === 'outlined',
    [classes.contained]: variant === 'contained'
  })
  
  return (
    href ?
    <a className={ styles } href={ href } style={ style }>
      { iconBefore && iconBefore }
      { children }
      { iconAfter && iconAfter }
    </a> :
    <button className={ styles } style={ style }>
      { iconBefore && iconBefore }
      { children }
      { iconAfter && iconAfter }
    </button>
  )
}

export default Button;