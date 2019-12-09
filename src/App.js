import React, { useState, useEffect } from 'react';
import Form from './components/Form';

const App = () => {

  const [ state, setState ] = useState({});

  const getLyric = dataSearch => {
    console.log(dataSearch);
  }

  return (
    <>
      <Form getLyric={ getLyric }/>
    </>
  );

};

export default App;
