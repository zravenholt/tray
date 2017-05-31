import React, { Component } from 'react'
import { shell } from 'electron'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(link) {
    shell.openExternal(link);
  }

  render() {
    return (
      <div className="menu__item" style={{ cursor: "pointer" }}>
        <div className="menu__item-description">
          <div onClick={() => { this.onItemClick(this.props.target) }}>
            {this.props.title.toLowerCase()}
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem