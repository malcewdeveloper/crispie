import React, { ReactElement } from "react";
import useCreateElement from "../../utils/hooks/useCreateElement";
import clsx from 'clsx';
import classes from './Button.module.scss';

export interface IBaseButton {
  children?: React.ReactNode;
  color?: 'primary' | string;
  className?: string;
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: 'contained' | 'outlined' | 'text';
  onClick?: (event?: React.MouseEvent) => void;
  href?: string;
}

const Button = (props: IBaseButton): ReturnType<React.FC> => {

  const { 
    color, 
    children, 
    className,
    disabled, 
    variant='text', 
    onClick,
    iconBefore,
    iconAfter,
    style,
    href
  } = props;

  const styles = clsx(classes.root, {
    [classes.primary]: color !== 'primary' ? false : true,
    [classes.disabled]: disabled,
    [classes.text]: variant === 'text',
    [classes.outlined]: variant === 'outlined',
    [classes.contained]: variant === 'contained',
    [className]: className
  })

  const tagNameButton = href ? 'a' : 'button';

  const buttonProps = {
    className: styles,
    href,
    style,
    onClick
  }

  const childrenButton = (
    <>
      { iconBefore && iconBefore }
      { children }
      { iconAfter && iconAfter }
    </>
  )

  const ButtonRoot = useCreateElement(tagNameButton, { ...buttonProps }, childrenButton);
  
  return ButtonRoot as ReactElement;
}

export default Button;