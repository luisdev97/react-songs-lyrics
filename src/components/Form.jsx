import React, { useState } from 'react';

const Form = ({ getLyric }) => {


    const [ dataSearch, setDataSearch ] = useState({
        artist: '',
        song: ''
    });

    const handleChange = e => {
        setDataSearch({
            ...dataSearch,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        getLyric(dataSearch);
    }

    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit={ handleSubmit }
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist name" 
                                        onChange={ handleChange }
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song name"
                                        onChange={ handleChange }
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
};

export default Form;