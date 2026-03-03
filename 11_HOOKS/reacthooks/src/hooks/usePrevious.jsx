/**
 * useDebugValue
 * 
 * - É um hook utilizado para debug. Recomenda-se o uso justamente em custom hooks como este.
 * - Ele adiciona uma área no React Dev Tools e estará no componente em que o hook é utilizado.
 */

import { useEffect, useRef, useDebugValue } from 'react' 

export const usePrevious = (value) => {
    const ref = useRef;

    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---")
    useDebugValue("O número anterior é: " + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current

}