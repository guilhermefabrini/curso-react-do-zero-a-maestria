import { useState } from "react";

const ExercicioIncrementoDecremento = () => {

    const [valor, setValor] = useState(0)

    const handleIncrement = () => {
        if (valor == 10) {
            alert("Você chegou no limite!");
        } else {
            setValor(valor + 1)
        }
    }

    const handleDecrement = () => {
        if (valor <= 0) {
            alert("Valor não pode ser negativo.")
        } else {
            setValor(valor - 1)
        }
    }

    return (
        <div>
            <p>Contador = {valor}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default ExercicioIncrementoDecremento;