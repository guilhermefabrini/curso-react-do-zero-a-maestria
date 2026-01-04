import { useState } from "react"
import "./MeuFormulario.css"

const MeuFormulario = ({user}) => {

    // Inputs controlados


    // Gerenciamento de dados
    const [nome, setNome] = useState(user ? user.nome : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio: "")
    const [funcao, setFuncao] = useState(user ? user.funcao: "")

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulário")
        console.log(nome, email, bio, funcao)

        // 7 - Limpando formulários
        setNome("")
        setEmail("")
        setBio("")
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
                {/* Aula textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea 
                        name="bio" 
                        placeholder="Descrição do usuário"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                        ></textarea>
                </label>
                {/* Aula Selects no React */}
                <label>
                    <span>Função no Sistema</span>
                    <select name="funcao" onChange={(e) => setFuncao(e.target.value)} value={funcao}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>

                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MeuFormulario