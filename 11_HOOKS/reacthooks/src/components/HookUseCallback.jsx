/**
 * useCallback
 * 
 * O hook useCallback pode ser utilizado para duas situações. Ele memoriza uma função fazendo
 * com que ela não seja reconstruída a cada renderização de um componente.
 * 
 * O primeiro caso é quando estamos prezando pela performance e não queremos que uma função muito
 * complexa seja reconstruída toda vez.
 * 
 * Já o segundo é quando o próprio React nos indica que uma função deveria estar contida em um useCallback
 * para evitar problemas de performance.
 */

import { useCallback, useState } from "react"

import List from "./List"



const HookUseCallback = () => {

    const [counter, setCounter] = useState(0)

    /**
     * Passando a função pelo useCallback consigo impedir que essa 
     * requisição ao banco de dados (fictícia) ocorra sempre que houver alterações
     * no componente. Repare que funciona de forma bem parecida com o useEffect.
     * 
     * Dentro do array é colocada as dependências que fazem com que o useCallback seja
     * executado e, se ficar vazio, o useCallback executa apenas uma vez no carregamento
     * da página.
     */
    const getItemsFromDatabase = useCallback(() => {
        return ['a', 'b', 'c']
    }, [])

    return (
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDatabase} />
            <button onClick={() => setCounter(counter + 1)}>Alterar</button>
            <p>{counter}</p>
            <hr />

        </div>
    )
}

export default HookUseCallback