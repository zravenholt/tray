const { globalShortcut } = require('electron')

module.exports = function(mb) {
  globalShortcut.register('CommandOrControl+Shift+9', () => {
    if (mb.window && mb.window.isVisible()) {
      mb.hideWindow();
    } else {
      mb.showWindow();
    }
  })
}