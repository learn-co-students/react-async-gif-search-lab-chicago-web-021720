import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props){
    super()
  }
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" name="query" value={this.props.query} onChange={this.props.handleChange}/>
      <button type="submit" name="submit" value="submit">Search for Gif</button>
      </form>
    )
  }
}
