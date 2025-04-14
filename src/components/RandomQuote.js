import React, { useState } from 'react';

const quotes = [
  "A vida é 10% o que acontece com você e 90% como você reage.",
  "Seja a mudança que você deseja ver no mundo.",
  "A persistência realiza o impossível.",
  "Acredite em você e tudo será possível.",
  "Nada é em vão, se não é benção, é lição."
];

function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Citação do Dia ✨</h2>
      <p style={{ fontStyle: 'italic' }}>{quote}</p>
      <button onClick={handleClick}>Nova citação</button>
    </div>
  );
}

export default RandomQuote;
