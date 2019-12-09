import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Song from './components/Song';

const App = () => {

  const [ state, setState ] = useState({});

  const getLyric = async(dataSearch) => {
    const { artist, song } = dataSearch;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    const res = await axios.get(url);

    setState({
      ...state,
      lyrics: res.data.lyrics
    })
  }

  return (
    <>
      <Form getLyric={ getLyric }/>
      <div className="container mt-5">
        
        <div className="row">

          <div className="col-md-6">

          </div>

            <Song lyrics={ state.lyrics }/>

        </div>
      </div>
    </>
  );

};

export default App;
