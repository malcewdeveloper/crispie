import React from 'react';
import clsx from 'clsx';
import classes from './CardHeader.module.scss';

export interface ICardHeader {
    avatar?: React.ReactNode;
    action?: React.ReactNode;
    header?: string;
    subheader?: string;
    style?: React.CSSProperties;
}

export default function CardHeader(props: ICardHeader): ReturnType<React.FC> {

    const { 
        avatar, 
        action,
        header: headerProp, 
        subheader: subheaderProp
    } = props;

    const header = (
        <p style={{margin: 0}}>{headerProp}</p>
    );
    const subheader = (
        <p style={{margin: 0}}>{subheaderProp}</p>
    );

    const CardHeaderAvatar = (props) => {
        const { className, children } = props;
        return (
            <div className={ className }>{ children }</div>
        )
    }

    const CardHeaderContent = (props) => {
        const { className, children } = props;
        return (
            <div className={ className }>{ children }</div>
        )
    }

    const CardHeaderAction = (props) => {
        const { className, children } = props;
        return (
            <div className={ className }>{ children }</div>
        )
    }

    return (
        <div className={ classes.root }>
            {avatar && <CardHeaderAvatar className={ classes.avatar }>
                { avatar }
            </CardHeaderAvatar>}
            <CardHeaderContent className={ classes.content }>
                { header }
                { subheader }
            </CardHeaderContent>
            {action &&  <CardHeaderAction className={ classes.action }>
                { action }
            </CardHeaderAction>}
        </div>
    )
}