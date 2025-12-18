import City from '../assets/city.jpg'

const ImportandoImagens = () => {
    return (
        <div>
            <h1>Avançando em React</h1>
            {/* Importando imagem armazenada no diretório 'public': */}
            {/* Quando a imagem está em public pode ser acessada diretamente pela / como demonstrado. */}
            {/* O React facilita o uso do src para todas as imagens armazenadas dentro de public */}
            {/* Isso previne que seja necessário escrever caminhos mais complexos no atributo 'src' */}
            <div>
                <img src="/img1.jpg" alt="Um avião pousando" />
            </div>
            {/* Importando imagem armazenada no diretório 'assets': */}
            {/* Nesse caso, a imagem deverá ser importada através do import 'X' from... */}
            {/* Da mesma forma como fazemos com componente e etc... */}
            <div>
                <img src={City} alt="" />
            </div>
        </div>
    )
}

export default ImportandoImagens;