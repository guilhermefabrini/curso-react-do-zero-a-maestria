/**
 * Neste componente estão explicações e exemplos para:
 * 1 - Renderização simples de lista usando key de index do map;
 * 2 - Renderização formal de lista usando key de id do dado (simulando banco de dados);
 * 3 - Funcionalidade de excluir item aleatório para demonstrar Previous State
 */

import { useState } from 'react';

const RenderizacaoDeListas = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"])

    // Exemplo com id vindo do banco para renderização de lista sem usar key com index do map:
    // Por exemplo: Imagine que o objeto abaixo são informações de usuário vindas do banco de dados
    const [usuarios, setUsuarios] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Guilherme", age: 23 },
        { id: 3, name: "Anderson", age: 55 } 
    ])

    const deletarAleatorio = () => {
        
        const numeroAleatorio = Math.floor(Math.random() * 4);

        // Exemplo de uso do previous state.
        // usar "prevAlgumaCoisa" é a convenção quando usamos previous state
        setUsuarios((prevUsuarios) => {
            return prevUsuarios.filter((usuario) => numeroAleatorio !== usuario.id)
        })
    }

    return (
        <div>
            <ul>
                {/* Importante sobre MAP: */}
                {/* O JSX é considerado um objeto, então quando a gente retorna objeto no map, usamos parenteses ao invés de chaves depois da arrow! */}
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                    // É fundamental usar key e indicar um id ao item quando estamos fazendo listas.
                    // O React necessita dessa informação para conseguir renderizar o componente corretamente.
                    // Usar o index do map não é o método recomendado e deve ser usado somente em último caso.
                ))}
            </ul>
            {/* Lista renderizando os usuarios com a key de forma apropriada: */}
            <ul>
                {usuarios.map((item) => (
                    <li key={item.id}>{item.name} | {item.age}</li>
                ))}
            </ul>
            {/* Esse botão foi adicionado para demonstrar o funcionamento de Previous state. */}
            {/* Mais informações veja os registros das aulas no Notion. */}
            <button onClick={deletarAleatorio}>Deletar usuário aleatório</button>
        </div>
    )
}

export default RenderizacaoDeListas