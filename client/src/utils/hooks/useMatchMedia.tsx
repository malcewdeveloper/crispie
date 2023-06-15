import React from "react";

type IMediaQuery = Array<string>;

type IMatchedMedia = Array<boolean>;

export default function useMatchMedia(queries: IMediaQuery, defaultValues: IMatchedMedia = []): IMatchedMedia {
    const initialValues = defaultValues.length ? 
        defaultValues : 
        Array(queries.length).fill(false)


    if (typeof window === 'undefined') return initialValues;

    const mediaQueryLists = queries.map(query => window.matchMedia(query));

    const getValue = (): IMatchedMedia => {
        const matchedQueries = mediaQueryLists.map(mql => mql.matches)

        return matchedQueries
    }

    const [value, setValue] = React.useState(getValue)

    React.useLayoutEffect(() => {
        const handler = (): void => setValue(getValue);

        mediaQueryLists.forEach(mql => mql.addEventListener("change", handler));

        return (): void => mediaQueryLists.forEach(mql => mql.removeEventListener("change", handler));
    }, [])

    return value
}