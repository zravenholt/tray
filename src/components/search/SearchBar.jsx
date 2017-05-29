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

    this.updateParentSearch = this.updateParentSearch.bind(this);
    this.onParameterChange = this.onParameterChange.bind(this);
    this.updateInputBarValue = this.updateInputBarValue.bind(this);
  }

  componentDidMount() {
    // document.body.addEventListener()
  }

  updateParentSearch(term) {
    if (this.state.subredditFocus) {
      this.setState({
        subredditTerm: term
      }, () => { console.log(this.state) })
    } else {
      this.setState({
        tagTerm: term
      }, () => { console.log(this.state) })
    }
  }

  onParameterChange(e) {
    if (e.currentTarget.textContent === 'subreddit') {
      this.setState({
        subredditFocus: true,
        tagFocus: false
      })
    } else if (e.currentTarget.textContent === 'tag') {
      this.setState({
        subredditFocus: false,
        tagFocus: true
      })
    }
  }

  updateInputBarValue() {
    return this.state.subredditFocus ? this.state.subredditTerm : this.state.tagTerm;
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
          updateParentSearch={this.updateParentSearch}
          subredditFocus={this.state.subredditFocus}
          inputValue={this.updateInputBarValue()}/>
      </div>
    )
  }
}

export default SearchBar