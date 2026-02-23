/**
 * useContext
 * 
 * O useContext é utilizado para consumir um contexto, da Context API;
 * Vamos precisar criar o contexto e também o Provider;
 * Envolver os componentes que receberão os valores compartilhados;
 * E então fazer o uso do hook onde necessário.
 */
import { createContext } from "react"

export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
    const contextValue = "texting context"
    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}