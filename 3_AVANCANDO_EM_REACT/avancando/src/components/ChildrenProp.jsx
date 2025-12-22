const ChildrenProp = ({children, myValue}) => {
    return (
        <div>
            <h2>Este é o título do container que carrega a Children Prop</h2>
            {children}
            <h3>Exemplo de valor: {myValue}</h3>
        </div>
    )
}

export default ChildrenProp