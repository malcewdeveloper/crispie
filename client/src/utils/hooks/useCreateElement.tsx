import React from 'react';

interface ICreateElementProps {
    [key: string]: any;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    innerHTML?: string;
    children?: React.ReactNode;
}

export default function useCreateElement(tagName: keyof JSX.IntrinsicElements | React.ComponentType<any>, props: ICreateElementProps = {}, children: React.ReactNode): React.ReactElement | null {
    const [element, setElement] = React.useState<React.ReactElement | null>(null);

    React.useEffect(() => {
        const { 
            className, 
            id, 
            style = {}, 
            innerHTML, 
            ...rest 
        } = props;

        const el = React.createElement(tagName, { className, id, style, ...rest }, children || innerHTML);
        setElement(el);

    }, []);

    return element;
}