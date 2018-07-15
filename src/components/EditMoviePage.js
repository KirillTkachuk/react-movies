import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class EditMoviePage extends Component {
    state = {
        id: this.props.data.id,
        title: this.props.data.title,
        posterUrl: this.props.data.posterUrl,
        runtime: this.props.data.runtime,
        year: this.props.data.year,
        plot: this.props.data.plot,
        director: this.props.data.director,
        actors: this.props.data.actors,
        genres: this.props.data.genres
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    cancel = () => {
        const {id, title, posterUrl, runtime, year, plot, director, actors, genres} = this.props.data;
        this.setState({
            id,
            title,
            posterUrl,
            runtime,
            year,
            plot,
            director,
            actors,
            genres
        })
    }

    render () {
        const {data, editMovie} = this.props;
        return (
            <div>
                <h2>Страница Редактирования</h2>
                
                <label>Название</label>
                <input onChange={this.inputHandler} name='title' value={this.state.title} placeholder='Название'/>
                <label>URL Картинки</label>
                <input onChange={this.inputHandler} name='posterUrl' value={this.state.posterUrl} placeholder='URL Картинки' />
                <label>Продолжительность</label>
                <input onChange={this.inputHandler} name='runtime' value={this.state.runtime} placeholder='Продолжительность' />
                <label>Год создания</label>
                <input onChange={this.inputHandler} name='year' value={this.state.year} placeholder='Год создания' />
                <label>Описание</label>
                <input onChange={this.inputHandler} name='plot' value={this.state.plot} placeholder='Описание' />
                <label>Режиссер</label>
                <input onChange={this.inputHandler} name='director' value={this.state.director} placeholder='Режиссер' />
                <label>Актеры</label>
                <input onChange={this.inputHandler} name='actors' value={this.state.actors} placeholder='Актеры' />
                <label>Жанр</label>
                <input onChange={this.inputHandler} name='genres' value={this.state.genres} placeholder='Жанр' />  

                <div className="buttons-wrapper">
                    <Link className="save" onClick={() => editMovie(this.state)} to={`/movie/${data.id}`}>Сохранить</Link>
                    <button className='cancel' onClick={this.cancel}>Отменить</button>
                </div>    
            </div>
        );
    }
}

export default EditMoviePage;