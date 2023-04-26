import React from 'react';
import clsx from 'clsx';
import Card from '../../UI/Card/Card';
import CardMedia from '../../UI/CardMedia/CardMedia';
import CardContent from '../../UI/CardContent/CardContent';
import CardActions from '../../UI/CardActions/CardActions';
import Typography from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import classes from './CardItem.module.scss';

interface ICardItem {
    actions?: React.ReactNode;
    title?: string;
    image?: string;
    id?: number;
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
        id,
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
            <Link href={`/goods/${id}`}>
                <CardMedia image={ image } alt={ title } />
            </Link>
            <CardContent>
                <Typography component='div'>{ title }</Typography>
                <Typography component='p' style={{
                    color: '#888'
                }}>{ merchant }</Typography>
                <div>☆☆☆☆☆</div> 
                <Typography variant='h5'>{ price + '₽' }</Typography>
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