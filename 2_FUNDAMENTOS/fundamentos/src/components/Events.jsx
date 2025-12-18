const Events = () => {

    const handleMyEvent = () => {
        console.log("Evento ativado")
    }

    return (
        <div>
            <div>
                {/* ABAIXO DEMONSTRAÇÃO DE FORMAS DE ATIVAR ONCLICKS (EVENTOS) */}
                {/* MODO POR FUNÇÃO (RECOMENDADO) */}
                {/* Só se coloca parenteses ao chamar a função quando há necessiade da funçaõ ser
                disparada ao executar o código. Nesse caso, como queremos executar ao clique, não
                usamos o parenteses ao chamar a função no onClick. */}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                {/* MODO DIRETO (RECOMENDADO PARA COISAS SIMPLES COMO ABAIXO) */}
                {/* Pode ser usado caso a quantidade de código seja reduzida como no caso abaixo */}
                <button onClick={() => console.log("Ativou!")}>Clique aqui também!</button>
            </div>
            <div>
                {/* MODO DIRETO COM MUITA LÓGICA (NÃO RECOMENDADO - MÁ PRÁTICA) */}
                {/* Não é recomendado porque mistura muito código com o HTML. */}
                <button onClick={() => {
                    let istrue = true;
                    if (istrue) {
                        console.log("Isso não deveria existir!!!")
                    }
                }}>Clique aqui de novo!</button>
            </div>
        </div>
    )
}

export default Events;