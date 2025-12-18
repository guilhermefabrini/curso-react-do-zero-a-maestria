// Na aula, o professor fez esse exemplo em Events.jsx, eu preferi criar outro componente
// para documentar melhor...

const FuncoesDeRenderizacao = () => {
    
    // A intenção é renderizar algo com base em alguma condição.
    // Observe que no exemplo abaixo, o conteúdo que será renderizado será definido
    // de acordo com o valor de 'x'

    const renderizarAlgumaCoisa = (x) => {
        if (x) {
            return <h1>X é True, então renderizo isso aqui.</h1>
        } else {
            return <h1>X é False, então toma esse.</h1>
        }
    }

    return (
        <div>
            {renderizarAlgumaCoisa(true)}
            {renderizarAlgumaCoisa(false)}
        </div>
    )
}

export default FuncoesDeRenderizacao;