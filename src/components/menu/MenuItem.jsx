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
      <div className="menu__item">
        <div className="menu__item-description">
          <div onClick={() => { this.onItemClick(this.props.target) }}>
            {this.props.name}
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem