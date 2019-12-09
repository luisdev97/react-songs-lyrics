import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Song from './components/Song';

const App = () => {

  const [ lyrics, setLyrics ] = useState('');
  const [ artist, setArtist ] = useState('');
  const [ artistInfo, setArtistInfo ] = useState({}); 

  const getLyric = async(dataSearch) => {
    const { artist, song } = dataSearch;
    const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    const songInfo = await axios.get(urlLyrics);
    setLyrics(songInfo.data.lyrics)
    setArtist(artist);

  }

  const getArtistsInfo = async(artist) => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
    const res = await axios.get(url);
    const artistInfo = res.data.artists[0];
    setArtistInfo(artistInfo);
  }

  useEffect( () => {
    getArtistsInfo(artist);
  },[artist])


  return (
    <>
      <Form getLyric={ getLyric }/>
      <div className="container mt-5">

        <div className="row">

          <div className="col-md-6">

          </div>

            <Song lyrics={ lyrics }/>

        </div>
      </div>
    </>
  );

};

export default App;
