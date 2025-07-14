const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1700,
    height: 850,
    frame: false,
    transparent: true,
    alwaysOnTop: false,
    title: "BookDocks UI",
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

//   win.loadFile('index.html');
  win.loadURL('http://localhost:8080');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});


console.log('To find issues press: Ctrl + LShift + I')