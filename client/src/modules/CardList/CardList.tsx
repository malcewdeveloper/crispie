import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardListContent from "./components/CardListContent/CardListContent";
import fetchProducts from "./api/fetchProducts";
import Typography from "../../UI/Typography/Typography";
import { IProduct } from "../../interfaces/interfaces";
import clsx from "clsx";
import classes from './CardList.module.scss';


interface ICardListProps {
    children?: React.ReactNode;
    className?: string;
    category?: string;
}

export default function CardList(props: ICardListProps): ReturnType<React.FC> {
    const { 
        children, 
        className,
        category
    } = props;

    const styles = clsx(classes.root, {
        [className]: className
    });

    const [products, setProducts] = React.useState<IProduct[]>();

    React.useEffect(() => {
        async function fetchProductsProduct() {
            const products = await fetchProducts(category);

            setProducts(products);
        }
        fetchProductsProduct();
    }, []);

    if(!products) {
        return null
    }

    return (
        <div className={ styles } style={{ marginTop: '30px', marginBottom: '30px' }}>
            <Typography variant='h3' style={{ marginBottom: '15px' }}>{ category }</Typography>
            <CardListContent>
                { products.map(good => <CardItem 
                                        key={ good.id } 
                                        id={good.id}
                                        title={ good.title } 
                                        price={ good.price } 
                                        rating={ good.rating } 
                                        merchant={ good.merchant } 
                                        image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAEECAYAAAAiWHg1AAAAAXNSR0IArs4c6QAAE5dJREFUeF7tnQez3TQThh1a6KH3GiD0/v//Ab0mAQIJkITee8k375kxo2xWx2ufk/XC92jmDuXKlvzsvtJqJfseeOmll84NFAhAoCSBAwi0pF3oFAQ2BBAojgCBwgQQaGHj0DUIIFB8AAKFCSDQwsahaxBAoPgABAoTQKCFjUPXIIBA8QEIFCaAQAsbh65BAIHiAxAoTACBFjYOXYMAAsUHIFCYAAItbBy6BgEEig9AoDABBFrYOHQNAggUH4BAYQIItLBx6BoEECg+AIHCBBBoYePQNQggUHwAAoUJINDCxqFrEECg+AAEChNAoIWNQ9cggEDxAQgUJoBACxuHrkEAgeIDEChMAIEWNg5dgwACxQcgUJgAAi1sHLoGAQSKD0CgMAEEWtg4dA0CCBQfgEBhAgi0sHHoGgQQKD4AgcIEEGhh49A1CCBQfAAChQkg0MLGoWsQQKD4AAQKE0CghY1D1yCAQPEBCBQmgEALG4euQQCB4gMQKEwAgRY2Dl2DAALFByBQmAACLWwcugYBBIoPQKAwAQRa2Dh0DQIIFB+AQGECCLSwcegaBBAoPgCBwgQQaGHj0DUIIFB8AAKFCSDQwsahaxBAoPgABAoTQKCFjUPXIIBA8QEIFCaAQAsbh65BAIHiAxAoTACBFjYOXYMAAsUHIFCYAAItbBy6BgEEig9AoDABBFrYOHQNAggUH4BAYQIItLBx6BoEECg+AIHCBBBoYePQNQggUHwAAoUJINDCxqFrEECg+AAEChNAoIWNQ9cggEDxAQgUJoBACxuHrkEAgeIDEChMAIEWNg5dgwACxQcgUJgAAi1sHLoGAQSKD0CgMAEEWtg4dA0CCBQfgEBhAgi0sHHoGgQQKD4AgcIEEGhh49A1CCBQfAAChQkg0MLGoWsQQKD4AAQKE0CghY1D1yCAQPEBCBQmgEALG4euQQCB4gMQKEwAgRY2Dl2DAALFByBQmAACLWwcugYBBIoPQKAwAQRa2Dh0DQIIFB+AQGECCLSwcegaBBAoPgCBwgQQaGHj0DUIIFB8AAKFCSDQwsahaxBAoPgABAoTQKCFjUPXIIBA8QEIFCaAQAsbh65BAIHiAxAoTACBFjYOXYMAAsUHIFCYAAItbBy6BgEEig9AoDABBFrYOHQNAggUH4BAYQIItLBx6BoEygn0hhtuGK655prhiiuuGC6//PLh999/H37++efhxx9/3PxzSbnkkkuGm266aTh48ODmvufOnRt+/fXX4Zdfftnc848//lhy28016uPNN9+8ua9+VHTfn376afjhhx+Gv/76a/G9/w0Xiq2e/8orr9w8v/77t99+++f5Zb+l5bLLLhuuv/76jT/Idrq3eH733XfDN998s5itbHbttdcOV1999XDppZcOf/7558Zmspf+vVIpIVCBP3z48MYYBw4c2MpHEN9///3h77//nuR41VVXDQ8++OCgf24rMsonn3wyfPXVV5P3HCvceOONw7333rsR6Laifn700Ucbh/ovFQlSNptiq2f+7LPPNnyjRaJ54IEHBg3WU3aTL2gwjBQJUv6gvveKBuyPP/54MyFUKKsLVCPZI488shkdo0VO/+GHHw7ffvtt95LbbrttI6A5RTPp22+/PTkyP/TQQ5POY9v9/vvvhw8++CA0sMzp8xp1b7/99uGee+6Z1bRm0uPHj29m121Fs+Wjjz46OVC395D4NQhsK3fddddw5513hvt8+vTp4cyZM+H6F6viqgLV7PP000/PMkYL4tixY+5Ip5lYol9SFPpKpL1y//33D7fccsuSW2/CqHfeeWfRtVUu0qymAWpJ0cD6+uuvdwcpzWxPPPHEIn+QzWQ7rywZrHWfTz/9dDh79uySR93bNasK9Mknn3TDDY224xpO6xrNsvqxRTPeG2+8ccH/f/755y+Ykcd1p+4rQ8oZFKYqnLKlF5Jdd911w5EjRy6oL8eT+DRLKlxWKCVH9u6tmf/rr7/emwEzb6Qo57nnnrtAQCNbhYXiILaHDh3arBttUdSjSMIrurdlJra6RksEsdXgK8HZer2BVX146qmnXJvJF9Tndj1qK24Tfgb71QTaA6c1hZIAtvRCYRuKKGGh9UtblFgQaC8ZpFBNIVtbesJ/7LHHNgmLtvQcQ2tprXc0CLRFDvfqq69m2Hbvbdxxxx3D3XfffcHzvPXWWy7b3sylKEJCbosXNkuQurdNtEmcmmnHpNx4H+++GlA1sLZF68x33333Aj7e0kUiPnr06N5ZRm+4mkAlIompLVOzixe6WoHIcG3iQsZ98803t64rFQ7r3m15+eWXz/tvCe6FF1447/9pPSXhawbpFY3e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' 
                                        style={{ width: '252px' }} />) }
            </CardListContent>
        </div>
    )
}