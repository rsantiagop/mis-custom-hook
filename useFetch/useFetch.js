import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);
 
    const [state, setState] = useState({
        data: null, 
        loading: true,
        error: null
    });

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(res => res.json())
            .then(data => {
                
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }                

            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo obtener la info'
                })
            })
            ;
    }, [url]); // Se ejecuta unicamente cuando el url cambia
    
    return state;
}

