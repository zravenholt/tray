const menubar = require('menubar')
const path = require('path')
// const { app } = require('electron')
const configure = require('./src/helpers/configure.js')


const mb = menubar({
  alwaysOnTop: true,
  resizable: false,
  width: 800,
  height: 800
})

mb.on('ready', () => {
  console.log('Menubar app started.')
  configure(mb)
})