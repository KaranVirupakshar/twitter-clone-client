import React, {useEffect, useState} from "react";
const MovieApiClient = () => {


    const [movies, setMovies] = useState([]);
    useEffect(() =>
            fetch('http://localhost:4005/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    const deleteMovie = (movie) =>
        fetch(`http://localhost:4005/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
     .then(response => response.json())
            .then(movies => setMovies(movies));


    const [movie, setMovie] = useState({title: '', rating: 2.5});
    const onMovieTitleChange = (event) =>
        setMovie({...movie, title: event.target.value});
    const createMovieClickHandler = () =>
        fetch('http://localhost:4005/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>

                            {movie.title} {movie.rating}

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
