// Para usar o useState e outros hooks, devemos importar do React como abaixo.
import { useState } from "react";

const GerenciamentoDeEstados = () => {
    // let algumDado = 10;

    // Para usar o useState nós criamos um destructuring de array passando na posição 0 a variável a ser
    // controlada e na posição 1 uma função responsável por alterar o valor dessa variável. O valor 
    // passado como argumento na função useState() será o valor inicial da variável setada na posição 0.
    // Ou seja, no exemplo abaixo, estamos dizendo que a variável numero é igual a 15 inicialmente. E se
    // quisermos alterar seu valor, realizamos essa alteração com a função setNumero(), passando como 
    // argumento o valor que será alterado. 
    const [numero, setNumero] = useState(15);

    return (
        <div>
            <div>
                {/* EXEMPLO DE GERENCIAMENTO DE ESTADO ERRADO */}
                {/* Exemplo abaixo não funciona porque o React não consegue enxergar essa mudança na variável. O componente não é re-renderizado quando o botão é clicado. Por causa disso
                que é necessário usar o hook do useState. Ele faz com que o React perceba que houve mudança em um valor e re-renderiza o componente com a mudança realizada. */}
                {/* <p>Valor: {algumDado}</p> */}
                {/* <button onClick={() => (algumDado = 15)}>Mudar Variável</button> */}
            </div>
            <div>
                {/* EXEMPLO DE GERENCIAMENTO DE ESTADO CORRETO: */}
                <p>Valor: {numero}</p>
                <button onClick={() => setNumero(25)}>Mudar variável</button>
            </div>
        </div>
    )
}

export default GerenciamentoDeEstados;