/**
 *  > Crie:
    um input
    um botão “Adicionar”
    uma lista que mostra os itens adicionados
    > Extras obrigatórios:
    não permitir adicionar string vazia
    limpar o input após adicionar
 */

import { useState } from "react";

const ExercicioListaDinamica = () => {

    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    const handleAdicionarItem = () => {
        if (inputTexto === "") {
            alert("Itens em branco não podem ser adicionados à lista.");
            return
        }
        setLista([...lista, inputTexto])
        setInputTexto("")
    }

    return (
        <div>
            <input 
                type="text" 
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                />

            <br />
            <br />

            <button onClick={handleAdicionarItem}>Adicionar Item Lista</button>

            <br />
            <br />

            <h3>Lista de Itens</h3>
            <ul>
                {/* Se usa map para renderizar e não forEach porque o React precisa de um método
                que retorne algo no final da execução. Por isso o map! */}
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExercicioListaDinamica