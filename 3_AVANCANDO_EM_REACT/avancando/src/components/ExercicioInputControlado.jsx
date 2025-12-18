/**
 * Nível 2. Já começa a doer um pouco
    3️⃣ Input controlado

    Crie um input de texto que:

    armazene o valor no useState

    mostre em tempo real o que o usuário digita

    exiba quantos caracteres foram digitados
*/
import { useState } from "react";

const ExercicioInputControlado = () => {

    const [inputTexto, setInputTexto] = useState("");

    const handleInput = (e) => {
        setInputTexto(e.target.value)
    }
     
    return (
        <div>
            <input 
                type="text" 
                value={inputTexto}
                onChange={handleInput}
                />
            <br />
            <p>Qtd. Caracteres: {inputTexto.length}</p>
        </div>
    )
}

export default ExercicioInputControlado;