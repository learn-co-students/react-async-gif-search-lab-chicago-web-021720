import React, { Component } from 'react'


class GifSearch extends Component {
    
    constructor() {
        super()

        this.state = {
            searchValue: ''
        }

        this.onChange = this.onChange.bind(this)

    }

    onChange(event) {
        this.setState({
            searchValue: event.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={event => this.props.handleSearchSubmit(event, this.state.searchValue)}>
                <label htmlFor="search">Enter a Search Term:</label>
                <input id="search" type="text" value={this.state.searchValue} onChange={this.onChange}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default GifSearch
