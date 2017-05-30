import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import SocketIOClient from 'socket.io-client'
import SearchBar from './components/search/SearchBar.jsx'
import StatusBar from './components/status/StatusBar.jsx'
import Menu from './components/menu/Menu.jsx'
import { ipcRenderer } from 'electron'
import './styles/reset.scss'
import './styles/index.scss'


class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuItems: []
    }

    this.setItemsAtRoot = this.setItemsAtRoot.bind(this);
    this.socket = SocketIOClient('http://localhost:8080');
  }

  componentDidMount() {
    this.socket.on('reddit-posted', (data) => {
      this.socket.emit("retrieve posts", data)
    })

    this.socket.on('receive posts', (response) => {
      this.setState({
        menuItems: response.posts.data
      })
    })
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }
  
  setItemsAtRoot(arr) {
    this.setState({
      menuItems: arr
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar 
          setItemsAtRoot={this.setItemsAtRoot}
          socket={this.socket}/>
        {/*<StatusBar />*/}
        <Menu 
          items={this.state.menuItems}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)