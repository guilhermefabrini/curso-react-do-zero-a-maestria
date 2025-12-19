import { useState } from "react";

const RenderizacaoCondicional = () => {

    const [x] = useState(true);

    const [nome] = useState("João");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {/* Isso nada mais é que um IF escrito de forma diferente. */}
            {/* Tá dizendo que: se x E <p> forem true, exibe o texto */}
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}

            {/* Exemplo de condicional com IF ternário no JSX */}
            {/* Detalhe importante: como JSX retorna objeto, sempre temos que usar os PARENTESES!! */}
            {nome === "João" ? (
                <div>
                    <p>
                        O nome é João
                    </p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default RenderizacaoCondicional