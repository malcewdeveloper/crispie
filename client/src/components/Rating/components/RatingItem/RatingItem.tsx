import React from "react";
import RatingIcon from "../RatingIcon/RatingIcon";
import useId from "../../../../utils/hooks/useId";
import clsx from "clsx";


interface IRatingItemProps {
    classes?: any;
    disabled?: boolean;
    hover?: number;
    onChange?: (event: React.ChangeEvent) => void;
    onMouseEnter?: (newValue: number) => void;
    onMouseLeave?: () => void;
    icon?: React.ReactNode;
    itemValue?: number;
    emptyIcon?: React.ReactNode;
    readOnly?: boolean;
    ratingValue?: number;
}

export default function RatingItem(props: IRatingItemProps): ReturnType<React.FC> {
    const { 
        classes,
        disabled, 
        hover,
        readOnly,
        onChange, 
        itemValue,
        ratingValue
    } = props;

    const id = useId('input');
    
    const isFilled = itemValue <= ratingValue;
    const isChecked = itemValue === ratingValue;
    const isHovered = itemValue === hover;

    if(readOnly) {
        return (
            <span>
                <RatingIcon isFilled={ isFilled } disabled={ disabled } />
            </span>
        )
    }

    return (
        <>
            <label htmlFor={ id } className={ classes.label } aria-disabled={ disabled }>
                <RatingIcon isFilled={ isFilled } isHovered={ isHovered } disabled={ disabled } />
            </label>
            <input id={ id } onChange={ onChange } className={ classes.input } value={ itemValue } disabled={ disabled } type='radio' checked={isChecked} />
        </>
    )
}