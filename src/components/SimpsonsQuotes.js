import React from 'react';

function Simpsons({ simpsons }) {
  return (
    <div>
      <h1>
        <strong>{simpsons[0].character}</strong>
      </h1>
      <img src={simpsons[0].image} alt={simpsons[0].character} />
      <blockquote> {simpsons[0].quote}</blockquote>
    </div>
  );
}

export default Simpsons;