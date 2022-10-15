import React, {RefObject} from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, callback: Function): void => {

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [ref, callback]);

};

export default useOutsideClick;
