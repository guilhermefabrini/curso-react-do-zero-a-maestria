/**
 * useRef
 * - O useRef pode ser usado como o useState para gerenciar valores, a diferença é que ele é
 * um objeto e seu valor fica na propriedade 'current'.
 * - Outra particularidade é que ele não re-renderiza o componente ao ser alterado, sendo interessante em determinadas situações.
 * Veja abaixo um exemplo de uso.
 */

import { useRef, useEffect, useState } from "react"

const HookUseRef = () => {

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou: {numberRef.current} vezes.</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
            <hr />
        </div>
    )
}

export default HookUseRef