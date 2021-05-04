import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState)
    
    const increment = () => {
        setCounter( counter + 1);
    }

    /*
    const decrement = ( factor = 1) => {
        setstate( state - factor );
    }*/

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter(initialState);
    }

    // Se devuelve un objeto, se podria regresar un arreglo [], como lo hace el hook useState
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
