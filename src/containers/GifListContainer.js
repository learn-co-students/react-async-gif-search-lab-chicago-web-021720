import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            gifs: [],
            searchTerm: ""
        }
    }

    // componentDidMount(){
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=QmS2kaKpn1RQvSjQUjrIt0JH67cKOaV0&rating=g`)
    //     .then(r=>r.json())
    //     .then(gifs => {
    //         this.setState({
    //             gifs: gifs.data.slice(0, 3),
    //             searchTerm: ""
    //         })
    //     })
    // }

    renderGifList = () => {
        return this.state.gifs.map(gif => <GifList key={gif.id} gif={gif} />)
    }
    
    updateSearchTerm = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchGif = e => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=QmS2kaKpn1RQvSjQUjrIt0JH67cKOaV0&rating=g`)
        .then(r=>r.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.slice(0, 3),
                searchTerm: ""
            })
        })
    }
    

    render(){
        console.log(this.state.searchTerm)
        console.log(this.state.gifs)

        return (
        <div>
            <GifSearch updateSearchTerm={this.updateSearchTerm} searchGif={this.searchGif}/>
            {this.renderGifList()}
        </div>
        )
    }
}

