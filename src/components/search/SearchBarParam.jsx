import React, { Component } from 'react'

class SearchBarParam extends Component {
  constructor(props) {
    super(props)

    this.registerClass = this.registerClass.bind(this);
  }

  registerClass(focus) {
    console.log(this.props.focus);
    return focus ? "search__parameter--click" : ""
  }

  render() {
    return (
      <div 
        className={this.registerClass(this.props.focus)}
        onClick={this.props.onParameterChange}>
        {this.props.parameter}
      </div>
    )
  }
}

export default SearchBarParam