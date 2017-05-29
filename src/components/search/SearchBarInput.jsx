import React, { Component } from 'react'

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.storeReference = this.storeReference.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.textInput.focus();
  }

  storeReference(v) {
    this.textInput = v;
    this.textInput.focus();
  }

  render() {
    return (
      <div className="search__input-container">
        <form>
          <input 
          className="search__input-bar"
          value={this.props.inputValue}
          onChange={ (e) => { this.props.updateParentSearch(e.target.value) } }
          ref={this.storeReference}>
          </input>
        </form>
      </div> 
    )
  }
}

export default SearchInput