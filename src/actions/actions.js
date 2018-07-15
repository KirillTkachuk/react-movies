
export function setMovies (movies) {
    return {
        type: 'SET_MOVIES',
        payload: {
            movies
        }
    }
}

export function editMovie (movie) {
    return {
        type: 'EDIT_MOVIE',
        payload: {
            id: movie.id,
            title: movie.title,
            posterUrl: movie.posterUrl,
            runtime: movie.runtime,
            year: movie.year,
            plot: movie.plot,
            director: movie.director,
            actors: movie.actors,
            genres: movie.genres
        }
    }
}

export function addMovie (movie) {
    return {
        type: 'ADD_MOVIE',
        payload: {
            id: movie.id,
            title: movie.title,
            posterUrl: movie.posterUrl,
            runtime: movie.runtime,
            year: movie.year,
            plot: movie.plot,
            director: movie.director,
            actors: movie.actors,
            genres: movie.genres
        }
    }
}