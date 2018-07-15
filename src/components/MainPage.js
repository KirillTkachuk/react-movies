import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage (props) {
    return (
      <div>
            <Link className="menu-button" to={`/add`}>Добавить фильм</Link>
            <ul className="movies-list">
                { 
                    props.data.map(movie => {
                        return (
                            <li key={movie.id} className="movie-wrapper">
                                <div className="movie">
                                    <Link className='movie-link-wrap' to={`/movie/${movie.id}`}> 
                                        <h2>{movie.title}</h2>
                                        <div className='movie-img'>
                                            <img alt={movie.title} src={movie.posterUrl} />
                                        </div>
                                        <p> <i>Описание:</i> {movie.plot.substring(0, 50)}...</p>
                                        <p> <i>Год выпуска:</i> {movie.year}</p>
                                        <p> <i>Продолжительность:</i> {movie.runtime} мин</p>
                                        <p> <i>Жанр:</i> {movie.genres}</p>
                                        <p> <i>Режиссер:</i> {movie.director}</p>
                                    </Link >
                                    <Link className="edit-link" to={`/movie/${movie.id}/edit`}>Редактировать</Link>
                                </div> 
                            </li>
                            
                        )
                    })
                }
            </ul>      
      </div>
    );

}