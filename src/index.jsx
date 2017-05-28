import React from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'

// ipc

const App = () => {
  return (
    <div>Hello Electron!</div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)