import { useEffect, useState } from "react";

const UseEffectExample02 = () => {
  let [numero1, setNumero1] = useState(0);
  let [numero2, setNumero2] = useState(0);
  let [maior, setMaior] = useState(0);

  const pegaMaior = (n1: number, n2: number): number => {
    return n1 > n2 ? n1 : n2;
  };

  useEffect(() => {
    document.title = `${numero1 + numero2} cliques`;
    setMaior(pegaMaior(numero1, numero2));
  }, [numero1, numero2]);

  return (
    <div>
      <h1>UseEffect02</h1>
      <p>{`Número 1: ${numero1} | Número 2: ${numero2}`}</p>
      <p>{`O maior número é: ${maior}`}</p>
      <br />
      <button onClick={() => setNumero1(numero1 + 1)}>ADD N1</button>
      <button onClick={() => setNumero2(numero2 + 1)}>ADD N2</button>
    </div>
  );
};

export default UseEffectExample02;
