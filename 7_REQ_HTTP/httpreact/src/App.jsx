import './App.css'

import { useState, useEffect } from 'react';

// 4 - Custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  // 4 - Custom hoook
  const { data: items } = useFetch(url);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - Resgatando dados (GET)
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
  //   fetchData();
  // }, []);

  // 2 - Adição de produtos (POST)
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Normalmente, criamos um objeto para enviar os dados ao back-end
    // Como a chave name e price tem o mesmo nome dos states, não é necessário fazer isso:
    // name: name
    // price: price
    // Nesse caso, podemos fazer o objeto como está abaixo e o javascript liga uma coisa com a outra.
    const products = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    })
    // 3 - Carregamento dinâmico
    // transforma a resposta em um objeto json contendo o item adicionao
    const addedProduct = await res.json();
    // o primeiro argumento de um 'set' é sempre o previous state, que nada mais é do que a versão atual do state.
    // o que fazemos abaixo é pegar a versão atual da lista de produtos e adicionar à ela o valor novo cadastrado.
    setProducts((prevProducts) => [...prevProducts, addedProduct])

    // limpa os campos do formulário após o cadastro
    setName("")
    setPrice("")
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>   
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>  
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div> 
    </div>
  )
}

export default App
