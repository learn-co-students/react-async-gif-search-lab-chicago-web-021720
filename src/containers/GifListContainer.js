import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GiftListContainer extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            query: ''
        }
    }

    onValueInput = (event) => {
        this.setState({query: event.target.value})
    }

    onSearch = (event) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=jNMIznHh1gxcgxAdCGxk0uHuYj4OOHcy&rating=g`)
        .then(resp => resp.json())
        .then(response => {
            this.setState({
                data: response.data.slice(0, 3),
                query: ''
            })
        })
        event.preventDefault()
        
    }
    render() {
        return(
            <div>
                <GifSearch searchValue={this.state.query} onSearch={this.onSearch} onValueInput={this.onValueInput}/>
                <GifList data={this.state.data}/>
            </div>
        )
    }
}