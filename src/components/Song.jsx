import React from 'react';

const Song = ({ lyrics }) => {
    if(!lyrics ) return null;

    return (
        <div className="col-md-6">
            <h2>Lyrics song</h2>
            <p className="letra">{ lyrics }</p>
        </div>
    );
};

export default Song;