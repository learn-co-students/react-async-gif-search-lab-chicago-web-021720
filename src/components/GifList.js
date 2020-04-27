import React, { Component } from 'react'


class GifList extends Component {
    
    renderGifs() {
        return this.props.gifURLs.map(gifURL => <img src={gifURL} />)
    }
    
    render() {
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}

export default GifList
