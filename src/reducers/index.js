import * as _ from 'lodash';
import actionTypes from '../actions/actionTypes';

const initialState = {
    movies: []
  };
  
  export default function appState(state = initialState, action) {
    let stateCopy = _.cloneDeep(state);

    switch(action.type) {
      case 'SET_MOVIES':
        return _.assign({}, state, {
          movies: action.payload.movies
        });
        
      case 'EDIT_MOVIE':
        stateCopy.movies.map(movie => {
          if (movie.id === action.payload.id) {
            movie.title = action.payload.title,
            movie.posterUrl = action.payload.posterUrl,
            movie.runtime = action.payload.runtime,
            movie.year = action.payload.year,
            movie.plot = action.payload.plot,
            movie.director = action.payload.director,
            movie.actors = action.payload.actors,
            movie.genres = action.payload.genres
          }
          return stateCopy;
        });
        return stateCopy;
      case 'ADD_MOVIE':
        return _.assign({}, state, {
          movies: [
            ...state.movies,
            {
              id: action.payload.id,
              title: action.payload.title,
              posterUrl: action.payload.posterUrl,
              runtime: action.payload.runtime,
              year: action.payload.year,
              plot: action.payload.plot,
              director: action.payload.director,
              actors: action.payload.actors,
              genres: action.payload.genres 
            }
          ]
        })
      default:
        return state;
    }
  }