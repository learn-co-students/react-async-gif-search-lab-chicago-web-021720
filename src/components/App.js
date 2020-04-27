import React from 'react'
import GifListContainer from './GifList';
import SearchBar from './GifSearch';

import NavBar from './NavBar'

// the App component should render out the GifListContainer component

export default class App extends React.Component {

  constructor(props){
    super()
    this.state = {
      gifList: '',
      query: 'dolphin'
    }
    this.renderGifLists = this.renderGifLists.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchLists = () => {
    const api_key = `LnAhdkCsalXn7OOljGscDZTPsALWKP8d`;
    const query = this.state.query;
    const URL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&rating=g`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data.data[0].images);
        const newImages = data.data.map(image => image.images.fixed_width);
        this.setState({gifList: newImages});
        }
      );
  }

  componentDidMount(){
    this.fetchLists();
  }

    renderGifLists = () => {
      return Array.from(this.state.gifList).map((image,index) => <li><img src={image.url} key={index} alt='gif'/></li>);
    }

    handleChange = event => {
      this.setState(Object.assign({},this.state,{query: event.target.value}))
    }

    handleSubmit = event => {
      event.preventDefault();
      this.fetchLists();
    }
render(){
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < SearchBar handleSubmit={this.handleSubmit} query={this.state.query} handleChange={this.handleChange}/>
        <GifListContainer renderGifLists={this.renderGifLists}/>
    </div>
  )
}
}
