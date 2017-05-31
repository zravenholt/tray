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
              title={v.title}
              target={v.target} 
              tag={v.tag}
              discussion={v.permalink}
              comments={v.comments}
            />
          )
        })}
      </div>
    )
  }
}

export default Menu 