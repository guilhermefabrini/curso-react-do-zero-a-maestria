// Ao declarar "props" como argumento da função do componente, temos acesso a um objeto
// com todas as props disponíveis que foram declaradas para este componente.
const PropsSimples = (props) => {
    return (
        <div>
            <h2>O nome do usuário é {props.name} e ele(a) tem {props.idade} anos.</h2>
        </div>
    )
}

export default PropsSimples