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

const guessesQty = 3

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    // Capturar categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    // Capturar palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }

  // Inicia o jogo
  const startGame = () => {
    // Capturar palavra e categoria
    const { word, category } = pickWordAndCategory()
    // Transformar palavra em letras
    let wordLetters = word.split("")
    
    // Transformando todas as letras em minúsculo
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    // Setar estados
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    
    setGameStage(stages[1].name)
  }

  // Processar o input da letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    
    // Verifica se a letra já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)

    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])

  }

  /**
   * O useEffect monitora um dado (aquele informado no array) e executa a lógica definida quando ele sofre uma
   * alteração.
   */
  useEffect(() => {
    if (guesses <= 0) {
      /**
       * Quando o jogo termina é necessário limpar todos os states para
       * que seja todos os states zerados ao iniciar um novo jogo.
       */
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses])

  // Reiniciar o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {/* Aqui, estamos dizendo que será exibido o componente 
      de acordo com o valor dentro de 'gameStage' */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
       />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App
