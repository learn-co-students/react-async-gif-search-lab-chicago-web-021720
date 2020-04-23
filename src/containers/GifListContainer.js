import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: [],
            query: 'fish',
            loading: true
        }
    }

    getGifs() {
        const url = `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=WXuAlVeEpk6qfzGla29iPGPl7L0M7iuq`
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const gifUrls = data.data.map(gifData => gifData.images.original.url)
            this.setState({
                gifs: gifUrls,
                loading: false
            })
        })
    }

    componentDidMount() {
        this.getGifs()
    }

    handleSearchChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSearchSubmit = event => {
        event.preventDefault()
        this.getGifs()
    }

    render() {
        return (
            <div>
                <GifSearch
                    query={this.state.query}
                    handleSearchSubmit={this.handleSearchSubmit}
                    handleSearchChange={this.handleSearchChange}
                />
                {this.state.loading ? <p>Loading...</p> : <GifList gifs={this.state.gifs} />}
            </div>
        )
    }
}

export default GifListContainer

// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=WXuAlVeEpk6qfzGla29iPGPl7L0M7iuq