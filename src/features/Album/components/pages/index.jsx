import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
const albumList = [
    {id: '1', name: '1',thumbnaiUrl:'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: '2', name: '2',thumbnaiUrl:'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: '3', name: '3',thumbnaiUrl:'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: '4', name: '4',thumbnaiUrl:'https://images.pexels.com/photos/1738675/pexels-photo-1738675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
];

    return (
        <div>
            <h1>Album</h1>
            <AlbumList albumList = {albumList}/>
        </div>
    );
}

export default AlbumFeature;