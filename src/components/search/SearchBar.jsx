import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subredditTerm: '',
      tagTerm: ''
    }
  }

  render() {
    return (
      <div className="search"><h1>Search Bar</h1></div>
    )
  }
}

export default SearchBar