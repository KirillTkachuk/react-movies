import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import './App.css'

import MainPage from './MainPage'
import MoviePage from './MoviePage'
import EditMoviePage from './EditMoviePage'
import AddMoviePage from './AddMoviePage'

import {setMovies, editMovie, addMovie} from '../actions/actions'

class App extends Component {
  componentDidMount () {
    fetch('http://localhost:3004/movies')
      .then(res => res.json())
      .then(movies => {
        this.props.setMovies(movies)
      })
   
  }
  render() {
    return (
      <div className="App">
         <Link to={`/`}>Главная страница</Link>
        {
          this.props.movies.length > 0 ?
          <div>         
            <Route exact path="/" render={props => <MainPage {...props} data={this.props.movies}/>} />

            <Route exact path={`/movie/:movieId`} render={props => {
              let movie = this.props.movies.find(movie => movie.id == props.match.params.movieId);
              return <MoviePage {...props} data={movie}/>
            }}/>

            <Route exact path={`/movie/:movieId/edit`} render={props => {
              let movie = this.props.movies.find(movie => movie.id == props.match.params.movieId);
              return <EditMoviePage {...props} data={movie} editMovie={this.props.editMovie}/>
            }}/>   

            <Route exact path={`/add`} render={props => {
              return <AddMoviePage {...props} addMovie={this.props.addMovie}/>
            }}/>    
          </div> : <div/>
        }
        
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setMovies: movies => {
      dispatch(setMovies(movies));
    },
    editMovie: movie => {
      dispatch(editMovie(movie));
    },
    addMovie: movie => {
      dispatch(addMovie(movie));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
