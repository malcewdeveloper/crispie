import React from 'react';
import clsx from 'clsx';
import Card from '../../UI/Card/Card';
import CardMedia from '../../UI/CardMedia/CardMedia';
import CardContent from '../../UI/CardContent/CardContent';
import CardActions from '../../UI/CardActions/CardActions';
import classes from './CardItem.module.scss';

interface ICardItem {
    actions?: React.ReactNode;
    title?: string;
    image?: string;
    merchant?: string;
    price?: number;
    rating?: number;
    hoverable?: boolean;
    style?: React.CSSProperties;
}

export default function CardItem(props: ICardItem): ReturnType<React.FC> {

    const { 
        actions,
        title, 
        image, 
        merchant, 
        price, 
        rating, 
        hoverable,
        style
    } = props;

    const styles = clsx({
        [classes.root]: true
    })

    return (
        <Card className={ styles } style={ style }>
            <CardMedia image={ image } alt={ title } />
            <CardContent>
                <div>{ title }</div> 
                <p>{ merchant }</p>
                <div>☆☆☆☆☆</div> 
                <h5>{ price }</h5>
            </CardContent>
            {actions && <CardActions style={{
                position: 'absolute', 
                right: '0px', 
                top: '0px', 
                display: 'flex', 
                flexDirection: 'column'
            }}>
                { actions }
            </CardActions>}
        </Card>
    )
}