import { useState } from "react"
import "./MeuFormulario.css"

const MeuFormulario = ({user}) => {

    // Inputs controlados


    // Gerenciamento de dados
    const [nome, setNome] = useState(user ? user.nome : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulário")
        console.log(nome, email)

        // 7 - Limpando formulários
        setNome("")
        setEmail("")
    }

    return (
        <div>
            {/* 1 - Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        placeholder="Digite o seu nome" 
                        onChange={handleNome} 
                        value={nome}
                        />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    {/* Simplificação de manipulação de state */}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Digite o seu e-mail" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                        />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MeuFormulario