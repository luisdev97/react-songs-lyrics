import React from 'react';

const ArtistInfo = ({ info }) => {
    const { strArtistThumb, strGenre, strBiographyEN, strFacebook, strTwitter, strLastFMChart } = info
    
    if(Object.keys(info).length === 0 ) return null;

    return (

        <div className="col-md-6"> 
        <div className="card border-light">
            <div className="card-header bg-primary text-ligth font-weith-bold">
                <h3>Artist info</h3>
            </div>

            <div className="card-body">
                <img src={ strArtistThumb  } alt="Logo Artista"></img>
                <p className="card-text"><b>Genre</b> { strGenre }</p>
                <h2 className="card-text text-center">Biography</h2>
                <p className="card-text scroll">{ strBiographyEN }</p>
                <p className="card-text">

                    <a href={ `https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>

                    <a href={ `https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href={ `${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>

                </p>
            </div>
        </div>
            

        </div>
    );
};

export default ArtistInfo;