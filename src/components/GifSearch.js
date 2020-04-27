import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSearch}>
              <label>
                Search Keyword:
                <input type="text" value={this.props.searchValue} onChange={this.props.onValueInput} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
    }
}