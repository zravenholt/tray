import React, { Component } from 'react'
import MenuItem from './MenuItem.jsx'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menu">
        {this.props.items.map((v) => {
          return ( 
            <MenuItem 
              name={v.innerText}
              target={v.target} 
            />
          )
        })}
      </div>
    )
  }
}

export default Menu 