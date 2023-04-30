import React from 'react';
import RatingItem from './components/RatingItem/RatingItem';
import useId from '../../utils/hooks/useId';
import clsx from 'clsx';
import { MdStar, MdStarBorder } from 'react-icons/md';
import classes from './Rating.module.scss';


export interface IRatingProps {
    disabled?: boolean;
    defaultValue?: number;
    onChange?: (event: React.ChangeEvent, value: number) => void;
    onMouseMove?: (newValue: number) => void;
    onMouseLeave?: () => void;
    readOnly?: boolean;
    value?: number;
    max?: number;
}

export default function Rating(props: IRatingProps): ReturnType<React.FC> {
    const { 
        disabled, 
        defaultValue, 
        onChange,
        value: valueProp, 
        readOnly,
        max = 5
    } = props;

    const styles = clsx(classes.root, {
        [classes.readOnly]: readOnly,
        [classes.disabled]: disabled
    })

    const [valueChange, setValueChange] = React.useState(valueProp || defaultValue);
    const [{ hover, blur }, setState] = React.useState({
        hover: -1,
        blur: -1
    });

    let value = valueChange;
    if(hover !== -1) {
        value = hover;
    }

    const rootRef = React.useRef<HTMLSpanElement>();

    const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {                     //Данный блок кода не отрабатывает как надо
        if(readOnly || disabled) return;                                                        //если очень быстро водить мышкой
                                                                                                //то выбранное количество звезд может измениться
        const rootNode = rootRef.current;                                                       //в консоль вылетает предупреждение от react 
        const { right, left } = rootNode.getBoundingClientRect(); 

        const childNode = rootNode.firstChild as HTMLElement;
        const { width } = childNode.getBoundingClientRect();                                    //При наведение rerender всех звезд

        let percent = (event.clientX - left) / (width * max);        
        let newHover = Math.round(percent * max);
        
        setState((prev) => prev.blur === newHover && prev.hover === newHover ? prev : { hover: newHover, blur: newHover })
    };

    const handleMouseLeave = () => {
        if(readOnly || disabled) return;

        setState({
            hover: -1,
            blur: -1
        });
        
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(readOnly || disabled) return

        let newValue = event.target.value === '' ? null : parseFloat(event.target.value);

        if(hover !== -1) {
            newValue = hover;
        }

        setValueChange(newValue);
        
        if(onChange) {
            onChange(event, newValue);
        }
    };

    return (
        <span ref={ rootRef } className={ styles } onMouseMove={ handleMouseMove } onMouseLeave={ handleMouseLeave }>
            {Array.from(new Array(max)).map((_, index) => {
                const itemValue = index + 1;

                return <RatingItem 
                    classes={ classes } 
                    key={ itemValue } 
                    disabled={ disabled }
                    ratingValue={ value } 
                    itemValue={ itemValue }
                    onChange={ handleChange } />
            })}
        </span>
    )
}