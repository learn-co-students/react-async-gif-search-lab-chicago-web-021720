import React, { Component } from 'react'
 

export default class GiftList extends Component {
    render() {
        let gifList;
        if (this.props.data[0]) {
            gifList = <div><li><img src={this.props.data[0].images.original.url}/></li><li><img src={this.props.data[1].images.original.url}/></li><li><img src={this.props.data[2].images.original.url}/></li></div>
        } 
        return(    
            <ul>
                { gifList }
            </ul>
        )
    }
}
