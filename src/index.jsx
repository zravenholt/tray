import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { ipcRenderer } from 'electron'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagNodes: []
    }
    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
  }

  getPosts() {
    axios.get('http://localhost:8080/api/posts/hiphopheads/fresh').then((res) => {
      console.log('res is', res);
    })
  }

  render() {
    return (
      <div>Hello Electron</div>   
      // <div>{this.state.tagNodes[0].innerText || 'hello electron'}</div>   
    )
  }


}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)