import React, { Component } from 'react'
import SearchBarParam from './SearchBarParam.jsx'
import SearchBarInput from './SearchBarInput.jsx'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subredditFocus: true,
      tagFocus: false,
      subredditTerm: '',
      tagTerm: ''
    }

    this.onSearchBarType = this.onSearchBarType.bind(this);
    this.onParameterChange = this.onParameterChange.bind(this);
  }

  onSearchBarType(e) {
    if (this.state.subredditFocus) {
      this.setState({
        subredditTerm: e.target.value
      }, () => { console.log(this.state) })
    } else {
      this.setState({
        tagTerm: e.target.value
      }, () => { console.log(this.state) })
    }
  }

  onParameterChange(e) {
    if (e.currentTarget.textContent === 'subreddit') {
      this.setState({
        subredditFocus: true,
        tagFocus: false
      }, () => { console.log(this.state) })
    } else if (e.currentTarget.textContent === 'tag') {
      this.setState({
        subredditFocus: false,
        tagFocus: true
      }, () => { console.log(this.state) })
    }
  }

  render() {
    return (
      <div className="search">
        <div className="search__parameters">
          <SearchBarParam 
            parameter="subreddit" 
            onParameterChange={this.onParameterChange}
            focus={this.state.subredditFocus}/>
          <div>{` | `}</div>
          <SearchBarParam 
            parameter="tag" 
            onParameterChange={this.onParameterChange}
            focus={this.state.tagFocus}/>
        </div>
        <SearchBarInput 
          onSearchBarType={this.onSearchBarType}/>
      </div>
    )
  }
}

export default SearchBar