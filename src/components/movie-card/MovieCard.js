import React from 'react';

function MovieCard(props) {
    return <div className="movie-card">
        <div className="image-holder">
            <img src={props.url} alt=""/>
        </div>
        <div className="truncate text-gray-600">
            {props.name}
        </div>
    </div>;
}

export default MovieCard; 