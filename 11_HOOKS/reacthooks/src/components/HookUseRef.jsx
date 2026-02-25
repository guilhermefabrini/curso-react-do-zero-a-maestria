/**
 * useRef
 * - O useRef pode ser usado como o useState para gerenciar valores, a diferença é que ele é
 * um objeto e seu valor fica na propriedade 'current'.
 * - Outra particularidade é que ele não re-renderiza o componente ao ser alterado, sendo interessante em determinadas situações.
 * Veja abaixo um exemplo de uso.
 *
 * useRef e DOM
 *
 * O useRef também pode ser utilizado para selecionar elementos no JSX, permitindo fazer manipulação de
 * DOM ou aplicar funções como a focus (que foca o input).
 */

import { useRef, useEffect, useState } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    setText("")
    inputRef.current.focus()
  }

  return (
    <div>
      <h2>useRef</h2>
      {/* 1 - useRef */}
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
