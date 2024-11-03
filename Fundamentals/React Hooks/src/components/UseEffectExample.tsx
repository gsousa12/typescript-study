import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [imagem, setImagem] = useState();

  // Função para buscar a imagem
  const fetchImagem = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((obj) => {
        setImagem(obj.message);
        console.log("Requisição concluída");
      });
  };

  // Chama fetchImagem ao montar o componente
  useEffect(() => {
    fetchImagem();
  }, []);

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={fetchImagem}>Renderizar</button>
      <img src={imagem} width={400} height={400} alt="Random Dog" />
    </div>
  );
};

export default UseEffectExample;
