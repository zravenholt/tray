import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'
import Nightmare from 'nightmare'

// initialize web crawling

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagNodes: []
    }

  }

  render() {
    return (
      // <div>Hello Electron</div>   
      <div>{this.state.tagNodes[0].innerText || 'hello electron'}</div>   
    )
  }


}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)