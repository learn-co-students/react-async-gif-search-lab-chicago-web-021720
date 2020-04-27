import React from 'react';

export default class GifListContainer extends React.Component {

  constructor(props){
    super()
  }


  render(){
    return(
      <div>
        <ul>
        {this.props.renderGifLists()}
        </ul>
      </div>
    )
  }
}
