import { useState } from "react";

export default function App(){
  const [contador, setContador] = useState(0)
  // const listarProdutos;

  function incrementar(){
    setContador(contador + 1);
    }

  return (
    <div>
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <button onClick={incrementar}>
        Incrementar
      </button>
      
      <hr />

      <h4>Lista de Produtos</h4>
      {listarProdutos.map(produto => {})}
    </div>
  );
}