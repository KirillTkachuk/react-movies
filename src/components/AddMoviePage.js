import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import history from '../history'
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

    submitHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/');
        this.props.addMovie(this.state)
    }
    render () {
        return (
            <div>
                <h2>Страница Добавления</h2>
                <form onSubmit={this.submitHandler}>
                    <label>Название</label>                
                    <input onChange={this.inputHandler} name='title' value={this.state.title} placeholder='Название' required/>
                    <label>URL Картинки</label>
                    <input onChange={this.inputHandler} name='posterUrl' value={this.state.posterUrl} placeholder='URL Картинки' required/>
                    <label>Продолжительность</label>
                    <input onChange={this.inputHandler} name='runtime' value={this.state.runtime} placeholder='Продолжительность' />
                    <label>Год создания</label>
                    <input onChange={this.inputHandler} name='year' value={this.state.year} placeholder='Год создания' />
                    <label>Описание</label>
                    <input onChange={this.inputHandler} name='plot' value={this.state.plot} placeholder='Описание' required/>
                    <label>Режиссер</label>
                    <input onChange={this.inputHandler} name='director' value={this.state.director} placeholder='Режиссер' />
                    <label>Актеры</label>
                    <input onChange={this.inputHandler} name='actors' value={this.state.actors} placeholder='Актер' />
                    <label>Жанр</label>
                    <input onChange={this.inputHandler} name='genres' value={this.state.genres} placeholder='Жанр' />  
                
                    <div className="buttons-wrapper">
                        <input className="save" type='submit' value="Сохранить"/>
                    </div>  
                </form>
                
                
            </div>
        );
    }
}

export default AddMoviePage;