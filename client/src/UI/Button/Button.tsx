import React from "react";
import clsx from 'clsx';
import classes from './Button.module.scss';

type Color = 'primary' | string;
type Variant = 'contained' | 'outlined' | 'text';

interface IBaseButton {
  children?: React.ReactNode;
  color?: Color;
  disabled?: boolean;
  variant?: Variant;
  href?: string;
}

const Button = (props: IBaseButton): ReturnType<React.FC> => {

  const { color, children, disabled, variant, href } = props;

  const styles = clsx({
    [classes.root]: true,
    [classes.primary]: color !== 'primary' ? false : true,
    [classes.disabled]: disabled
  })
  
  return (
    <button className={ styles }>{ children }</button>
  )
}

export default Button;