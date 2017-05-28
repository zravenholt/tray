import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchBar from './components/search/SearchBar.jsx'
import { ipcRenderer } from 'electron'
import './styles/reset.scss'
import './styles/index.scss'

const Root = () => {
  return (
    <div className="container">
      <SearchBar />
    </div>
  )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)