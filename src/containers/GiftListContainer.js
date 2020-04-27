import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GiftListContainer extends Component {
    
    constructor() {
        super()

        this.state = {
            gifURLs: []
        }

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    extractOriginalURLs(gifs) {
        return gifs.map(gif => gif.images.original.url)
    }

    handleSearchSubmit(event, searchTerm) {
        // Prevent the default form submit action
        event.preventDefault()
        
        // Fetch the data and store it in state
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(gifData => {
                const gifs = gifData.data.slice(0,3)  // Grab the first 3 gifs
                this.setState({
                    gifURLs: this.extractOriginalURLs(gifs)
                })
            })
        }
    
    // componentDidMount() {
    //     this.queryGifs('office')
    // }

    render() {
        return (
            <div>
                <GifSearch handleSearchSubmit={this.handleSearchSubmit}/>
                <GifList gifURLs={this.state.gifURLs}/>
            </div>
        )
    }
}

export default GiftListContainer
