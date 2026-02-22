import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - Exemplo com array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  // 3 - Utilizando o array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando anotherNumber muda");
    }
  }, [anotherNumber]);

  // 4 - Limpeza do useEffect
  // Alguns efeitos precisam ter uma técnica de cleanup (limpeza);
  // Não fazer isso pode gerar erros ou comportamentos indesejados;
  // Exemplo: um timeout que ao mudar de página pode continuar a ser executado pela falta desta limpeza;
  useEffect(() => {
    // const timer = setTimeout(() => {
    //     // console.log("Hello World")
    //     setAnotherNumber(anotherNumber + 1)
    // }, 2000)
    // return () => clearTimeout(timer)
  }, [anotherNumber])


  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar another number
      </button>
    </div>
  );
}

export default HookUseEffect