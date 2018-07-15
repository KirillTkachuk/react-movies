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
                
                <input onChange={this.inputHandler} className='input' name='title' value={this.state.title} placeholder='Название'/>
                <input onChange={this.inputHandler} className='input' name='posterUrl' value={this.state.posterUrl} placeholder='URL Картинки' />
                <input onChange={this.inputHandler} className='input' name='runtime' value={this.state.runtime} placeholder='Продолжительность' />
                <input onChange={this.inputHandler} className='input' name='year' value={this.state.year} placeholder='Год создания' />
                <input onChange={this.inputHandler} className='input' name='plot' value={this.state.plot} placeholder='Описание' />
                <input onChange={this.inputHandler} className='input' name='director' value={this.state.director} placeholder='Режиссер' />
                <input onChange={this.inputHandler} className='input' name='actors' value={this.state.actors} placeholder='Актер' />
                <input onChange={this.inputHandler} className='input' name='genres' value={this.state.genres} placeholder='Жанр' />  
            
                <Link onClick={() => editMovie(this.state)} to={`/movie/${data.id}`}>Сохранить</Link>
                <button onClick={this.cancel}>Отменить</button>
            </div>
        );
    }
}

export default EditMoviePage;