import { useState } from "react";

const ExercicioMostrarEsconder = () => {

    const textoPadrao = "Faça um botão que alterne entre mostrar e esconder este texto. O texto do botão deve alternar entre mostrar/esconder também."

    const [texto, setTexto] = useState(textoPadrao);
    const [btnLabel, setBtnLabel] = useState("Esconder");

    const handleTexto = () => {
        if (btnLabel === "Esconder") {
            setTexto("");
            setBtnLabel("Mostrar")
        } 
        if (btnLabel === "Mostrar") {
            setTexto(textoPadrao)
            setBtnLabel("Esconder")
        }
    }

    return (
        <div>
            <p>{texto}</p>
            <button onClick={handleTexto}>{btnLabel}</button>
        </div>
    )
}

export default ExercicioMostrarEsconder;