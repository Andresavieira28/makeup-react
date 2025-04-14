import React, { useState } from 'react';

function ContadorSimples() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador 🧮</h2>
      <p style={{ fontSize: '1.5rem' }}>Valor atual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(0)} style={{ marginLeft: '10px' }}>
        Resetar
      </button>
    </div>
  );
}

export default ContadorSimples;
