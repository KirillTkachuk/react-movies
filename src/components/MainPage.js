import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage (props) {
    return (
      <div>
            <Link to={`/add`}>Add</Link>
            <ul style={{display: 'flex', alignItems: 'center', flexFlow: 'column'}}>
                { 
                    props.data.map(movie => {
                        return (
                            <li key={movie.id} style={{listStyle: 'none', width: '60%'}}>
                                <Link style={{display: 'block'}} to={`/movie/${movie.id}`}> 
                                    <h2>{movie.title}</h2>
                                    <img alt={movie.title} src={movie.posterUrl} />
                                    <p> <i>Описание:</i> {movie.plot}</p>
                                    <p> <i>Год выпуска:</i> {movie.year}</p>
                                    <p> <i>Продолжительность:</i> {movie.runtime} мин</p>
                                    <p> <i>Жанр:</i> {movie.genres}</p>
                                    <p> <i>Режиссер:</i> {movie.director}</p>
                                </Link >
                                <Link to={`/movie/${movie.id}/edit`}>Edit</Link>
                                <hr/>
                            </li>
                            
                        )
                    })
                }
            </ul>      
      </div>
    );

}