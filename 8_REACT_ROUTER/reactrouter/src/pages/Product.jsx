import { useParams } from 'react-router-dom';

const Product = () => {

    // useParams retorna um objeto e por isso conseguimos acessar usando destructuring como
    // no exemplo abaixo.
    const { id } = useParams()

    return (
        <>
            <p>ID do produto: {id}</p>
        </>
    )
}

export default Product;