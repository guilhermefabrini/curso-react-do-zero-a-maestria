// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import {wordsList} from "./data/words";

// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  // Inicia o jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // Processar o input da letra
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // Reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {/* Aqui, estamos dizendo que será exibido o componente 
      de acordo com o valor dentro de 'gameStage' */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
