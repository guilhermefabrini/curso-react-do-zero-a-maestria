/**
 * useLayoutEffect
 * 
 * É muito parecido com o useEffect, a grande diferença
 * é que este hook roda antes de renderizar o
 * componente, ou seja, ele é síncrono, bloqueando o carregamento
 * da página para o sucesso da sua funcionalidade.
 * 
 * A grande ideia é executar algo antes que o usuário veja a página.
 */

import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {

    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo!")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)

    return (
        <div>
            <h2>useLayoutEffect</h2>
            <p>Nome: {name}</p>
            <hr />
        </div>
    )
}

export default HookUseLayoutEffect