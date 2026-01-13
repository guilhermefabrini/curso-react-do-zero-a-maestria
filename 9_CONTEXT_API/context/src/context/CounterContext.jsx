/**
 * Notas pessoais:
 * Pelo o que entendi, esta funcionalidade de context permite criar um tipo de variável global
 * que declaramos aqui (através desse código abaixo) e podemos usar seu valor em toda a aplicação.
 * 
 * No exemplo deste código, o valor de counter que está sendo declarado neste useState pode ser
 * acessado ou manipulado de qualquer outro local da aplicação através do context.
 */

// 1 - Criar context
import { createContext, useState } from "react";

export const CounterContext = createContext()

// 2 - Criar provider
export const CounterContextProvider = ({children}) => {
    
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )

}