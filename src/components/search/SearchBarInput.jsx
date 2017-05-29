import React, { Component } from 'react'

class SearchInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search__input-container">
        <form>
          <input className="search__input-bar"></input>
        </form>
      </div> 
    )
  }
}

export default SearchInput