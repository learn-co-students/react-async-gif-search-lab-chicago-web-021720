import React from 'react'

const GifSearch = props => {
    return (
        <div>
            <form onSubmit={props.handleSearchSubmit}>
                <input onChange={props.handleSearchChange} type="text" value={props.query} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default GifSearch