/**
 * useMemo
 * 
 * O useMemo pode ser usado para garantir a referência de um objeto fazendo com que algo
 * possa ser atrelado a uma referência e não a um valor. Com isso, conseguimos condicionar
 * useEffects a uma variável de maneira mais inteligente.
 */

import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {

    const [number, setNumber] = useState(0)

    /**
     * O comentário abaixo desabilita o código exemplo que origina o erro que é resolvido pelo 
     * uso do useMemo. 
     */
    // const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"];
    }, [])

    useEffect(() => {

    }, [premiumNumbers])


    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
            <hr />
        </div>
    )
}

export default HookUseMemo