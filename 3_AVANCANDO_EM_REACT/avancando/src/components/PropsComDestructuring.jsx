// Ao invés de acessar as props através do objeto como antes, nós fazemos um destructuring e
// acessamos as propriedades diretamente.
const PropsComDestructuring = ({ marca, km, cor, carroNovo }) => {
    return (
        <div>
            <h2>Detalhes do Carro</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Km: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {carroNovo && <p>Este carro é novo!</p>}
        </div>
    )
}

export default PropsComDestructuring