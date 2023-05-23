import React from "react"

export default function useClickOutside(callback: () => void) {
    const ref = React.useRef<HTMLDivElement>(null);


    const handleClickOutside = (event: React.MouseEvent) => {
        if(ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    }

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside as unknown as EventListener);

        return () => {
            document.removeEventListener('click', handleClickOutside as unknown as EventListener);
        }
    }, []);

    return ref;
}