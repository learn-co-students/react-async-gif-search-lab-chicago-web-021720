import React from 'react'


export default class GifSearch extends React.Component {
    render(){
      return <form onSubmit={this.props.searchGif}>
          <input onChange={e => this.props.updateSearchTerm(e)} type='text' placeholder='search gifs' />
          <input type="submit" />
      </form>
    }
}