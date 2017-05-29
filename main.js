const menubar = require('menubar')
const path = require('path')
const { ipcMain } = require('electron')
const configure = require('./src/helpers/configure.js')


const mb = menubar({
  alwaysOnTop: true,
  resizable: false,
  width: 300,
  height: 344
})

mb.on('ready', () => {
  console.log('Menubar app started.')
  configure(mb)
})
