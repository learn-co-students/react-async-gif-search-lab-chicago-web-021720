import React from 'react'


export default class GifList extends React.Component {

    render(){
        return <img src={this.props.gif.images.original.url} alt="image" />
    }


}