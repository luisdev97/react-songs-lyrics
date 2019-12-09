import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';

const App = () => {

  const [ state, setState ] = useState({});

  const getLyric = async(dataSearch) => {
    const { artist, song } = dataSearch;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    const res = await axios.get(url);

    setState({
      ...state,
      lyric: res.data.lyrics
    })
  }

  return (
    <>
      <Form getLyric={ getLyric }/>
    </>
  );

};

export default App;
