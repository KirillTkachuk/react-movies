import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class AddMoviePage extends Component {
    state = {
        id: Date.now(),
        title: '',
        posterUrl: '',
        runtime: '',
        year: '',
        plot: '',
        director: '',
        actors: '',
        genres: ''
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        return (
            <div>
                <h2>Страница Добавления</h2>
                
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='title' value={this.state.title} placeholder='Название'/>
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='posterUrl' value={this.state.posterUrl} placeholder='URL Картинки' />
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='runtime' value={this.state.runtime} placeholder='Продолжительность' />
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='year' value={this.state.year} placeholder='Год создания' />
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='plot' value={this.state.plot} placeholder='Описание' />
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='director' value={this.state.director} placeholder='Режиссер' />
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='actors' value={this.state.actors} placeholder='Актер' />
                <input onChange={this.inputHandler} style={{display: 'block', margin: 'auto'}} name='genres' value={this.state.genres} placeholder='Жанр' />  
            
                {/* <button >Сохранить</button> */}
                <Link onClick={() => this.props.addMovie(this.state)} to={`/`}>Сохранить</Link>
            </div>
        );
    }
}

export default AddMoviePage;