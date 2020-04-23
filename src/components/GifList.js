import React from 'react'

class GifList extends React.Component {
    renderGifs() {
        return this.props.gifs.map(gif => <li><img src={gif} alt="gif"/></li>)
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