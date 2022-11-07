import React from 'react';
import ReactDOM from 'react-dom/client';
import Personajes from './Components/Personajes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Aldo';

const Jsx = () => {
  return(
    <>
      <h1>Hola {name}</h1>
      <Personajes/>
    </>
  );
};

root.render(<Jsx/>);


