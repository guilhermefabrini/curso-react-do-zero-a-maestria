/**
 * useImperativeHandle
 * 
 * Com o hook useImperativeHandle temos como acionar ações em outro componente
 * de forma imperativa.
 * 
 * Como não podemos passar refs como props, precisamos usar uma função 
 * forwardRef, isso nos permite passar as referências e torna o exemplo abaixo
 * viável.
 */

import { useRef } from "react"

import SomeComponent from "./SomeComponent"

const HookUseImperativeHandle = () => {

    const componentRef = useRef()

    return (
        <div>
            <h2>useImperativeHandle</h2>
            <SomeComponent ref={componentRef} />
            <button onClick={() => componentRef.current.validade()}>Validate</button>
            <hr />
        </div>
    )
}

export default HookUseImperativeHandle