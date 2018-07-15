import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import EditMoviePage from './EditMoviePage';

export default function MoviePage({data}) {
    return (    
        <div>
            <h2>Страница Фильма {data.title}</h2>
            <p>{data.title}</p>
            <img src={data.posterUrl}/>
            <p><i>Продолжительность:</i> {data.runtime} мин</p>
            <p><i>Год выпуска:</i> {data.year}</p>
            <p><i>Описание:</i> {data.plot}</p>
            <p><i>Год выпуска:</i> {data.director}</p>
            <p><i>Актеры:</i> {data.actors}</p>
            <p><i>Жанр:</i> {data.genres}</p>
            <p> <i>Режиссер:</i> {data.director}</p>

            <Link to={`/movie/${data.id}/edit`}>Edit</Link>
        </div>
    );
}