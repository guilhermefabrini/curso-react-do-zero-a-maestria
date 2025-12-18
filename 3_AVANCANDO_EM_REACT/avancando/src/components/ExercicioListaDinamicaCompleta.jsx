import { useState } from "react"

const ExercicioListaDinamicaCompleta = () => {

    const [inputTexto, setInputTexto] = useState("")
    const [lista, setLista] = useState([])

    const handleAdicionarItem = () => {
        if (inputTexto === "") {
            alert("Input não pode ficar em branco")
            return
        }
        setLista([...lista, inputTexto])
        setInputTexto("")
    }

    const handleRemoverItem = (indexRemover) => {
        setLista(lista.filter((_, index) => index !== indexRemover));
    };

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
                    <li key={index}>{item} <button onClick={() => handleRemoverItem(index)}>Remover</button></li>
                ))}
            </ul>
        </div>
    )
}

export default ExercicioListaDinamicaCompleta