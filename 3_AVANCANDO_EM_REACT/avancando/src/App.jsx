// Componentes de aula
import GerenciamentoDeEstados from './components/GerenciamentoDeEstados'
import ImportandoImagens from './components/ImportandoImagens'
import RenderizacaoDeListas from './components/RenderizacaoDeListas'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'
import PropsSimples from './components/PropsSimples'
import PropsComDestructuring from './components/PropsComDestructuring'
import Fragment from './components/Fragment.jsx'
import ChildrenProp from './components/ChildrenProp.jsx'
import ExecutarFuncao from './components/ExecutarFuncao.jsx'
import Mensagem from './components/Mensagem.jsx'
import MudarEstadoMensagem from './components/MudarEstadoMensagem.jsx'
// Componentes de exercícios
import ExercicioIncrementoDecremento from './components/ExercicioIncrementoDecremento'
import ExercicioMostrarEsconder from './components/ExercicioMostrarEsconder'
import ExercicioInputControlado from './components/ExercicioInputControlado'
import ExercicioListaDinamica from './components/ExercicioListaDinamica'
import ExercicioListaDinamicaCompleta from './components/ExercicioListaDinamicaCompleta'

import './App.css'
import { useState } from 'react'


function App() {

  // Props Simples
  const nome = "Guilherme";
  // Props Simples com useState:
  const [idade] = useState("34")

  // Exemplo de renderização em lista
  const carros = [
    { id: 1, marca: "Ferrari", cor: "Amarelo", carroNovo: true, km: 0 },
    { id: 2, marca: "Mercedes", cor: "Preto", carroNovo: false, km: 23213 },
    { id: 3, marca: "Jaguar", cor: "Prata", carroNovo: false, km: 1313 }
  ]

  function mostrarMensagem(){
    console.log("Evento do componente pai")
  }

  const [mensagem, setMensagem] = useState("")

  const handleMensagem = (msg) => {
    setMensagem(msg);
  }

  return (
    <>
      {/* Descomente os componentes para conferir o funcionamento. */}
      {/* EXERCÍCIOS */}
      {/* Exercícios de useState - ChatGPT */}
      {/* <ExercicioIncrementoDecremento /> */}
      {/* <ExercicioMostrarEsconder /> */}
      {/* <ExercicioInputControlado /> */}
      {/* <ExercicioListaDinamica /> */}
      {/* <ExercicioListaDinamicaCompleta /> */}
      {/* AULAS */}
      {/* <ImportandoImagens /> */}
      {/* <GerenciamentoDeEstados /> */}
      {/* <RenderizacaoDeListas /> */}
      {/* <RenderizacaoCondicional /> */}
      <PropsSimples name={nome} idade={idade} />
      <PropsComDestructuring marca="Ford" km={10000} cor="Preto" carroNovo={false} />
      {/* Reaproveitando componentes */}
      <p>Exemplo de reaproveitamento de componentes:</p>
      <PropsComDestructuring marca="Fiat" km={0} cor="Prata" carroNovo={true} />
      <PropsComDestructuring marca="Mercedes" km={4500} cor="Azul" carroNovo={false} />
      {/* Loop em array de objetos para renderização em lista */}
      <p>Loop em array de objetos para renderização em lista:</p>
      {carros.map((carro) => (
        <PropsComDestructuring key={carro.id} marca={carro.marca} km={carro.km} cor={carro.cor} carroNovo={carro.carroNovo} />
      ))}
      {/* Exemplo de uso de Fragment */}
      <Fragment propFragment="teste" />
      {/* Exemplo de uso do Children Prop */}
      {/* Sem o Children Prop, o conteúdo HTML que passamos dentro do componente não seria renderizado! */}
      <ChildrenProp myValue="Teste">
          <p>Este conteúdo só renderiza porque estamos usando o Children Prop!</p>
      </ChildrenProp>
      {/* Aula sobre como passar funções como prop! */}
      <ExecutarFuncao minhaFuncao={mostrarMensagem}/>
      {/* State Lift */}
      <Mensagem msg={mensagem} /> 
      <MudarEstadoMensagem handleMessage={handleMensagem} />
    </>
  )
}

export default App
