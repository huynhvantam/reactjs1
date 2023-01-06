import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <p>{album.thumbnaiUrl}</p>
        </div>
    );
}

export default Album;