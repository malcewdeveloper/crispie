import React from "react";

let count = 0;

export default function useId(prefix = '') {
    const [id, setId] = React.useState('');

    React.useEffect(() => {
        count++;
        setId(prefix + count);
    }, [prefix]);

    return id;
}