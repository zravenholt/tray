import axios from 'axios'
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

    this.postRedditPosts = this.postRedditPosts.bind(this);
    this.onParameterChange = this.onParameterChange.bind(this);
    this.updateInputBarValue = this.updateInputBarValue.bind(this);
    this.updateParentSearch = this.updateParentSearch.bind(this);
    this.onTabOrEnter = this.onTabOrEnter.bind(this);
  }

  componentDidMount() {
    let timeout = null;

    document.body.onkeyup = (e) => {
      clearTimeout(timeout)
      timeout = setTimeout(this.postRedditPosts, 2000);
    }

    document.body.onkeydown = this.onTabOrEnter;
  }

  onTabOrEnter(e) {
    if (e.keyCode === 9) {
      this.setState({
        subredditFocus: !this.state.subredditFocus,
        tagFocus: !this.state.tagFocus
      })
    }

    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('onkeyup');
    document.body.removeEventListener('onkeydown', this.onTabOrEnter);
  }
  
  postRedditPosts() {
    let tag = this.state.tagTerm.toLowerCase();

    this.props.socket.emit('retrieve posts', {
      subreddit: this.state.subredditTerm,
      tag: tag
    });

    axios.post(`http://localhost:8080/api/posts`, {
      subreddit: this.state.subredditTerm,
      tag: tag
    });
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

  updateParentSearch(term) {
    if (this.state.subredditFocus) {
      this.setState({
        subredditTerm: term
      })
    } else {
      this.setState({
        tagTerm: term
      })
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
          updateParentSearch={this.updateParentSearch}
          subredditFocus={this.state.subredditFocus}
          inputValue={this.updateInputBarValue()}/>
      </div>
    )
  }
}

export default SearchBar