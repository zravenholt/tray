import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

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
  }

  setItemsAtRoot(arr) {
    this.setState({
      menuItems: arr
    }, () => { console.log('root state is', this.state) })
  }

  render() {
    return (
      <div className="container">
        <SearchBar 
          setItemsAtRoot={this.setItemsAtRoot}/>
        {/*<StatusBar />
        <Menu />*/}
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)