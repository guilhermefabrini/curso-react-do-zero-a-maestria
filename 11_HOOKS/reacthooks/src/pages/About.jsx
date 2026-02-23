// useContext
import { useContext } from "react" // necessário importar para poder usar o contexto
import { SomeContext } from "../components/HookUseContext"

const About = () => {

    const { contextValue } = useContext(SomeContext)
    
    return (
        <div>
            <h2>About</h2>
            <p>Context value: {contextValue}</p>
        </div>
    )
}

export default About