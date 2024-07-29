console.log('main.js');
const { app, BrowserWindow } = require('electron');
// import { app, BrowserWindow } from 'electron';
const path = require('path');   

function createWindow() {
    console.log('createWindow');
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    // win.loadFile('index.html');
    win.loadURL('http://localhost:5173').catch((err) => {
        console.error('Failed to load URL:', err);
    });
    win.webContents.on('did-finish-load', () => {
    console.log('Window loaded');
  });

  win.on('ready-to-show', () => {
    console.log('Window ready to show');
    win.show();
  });

  win.on('unresponsive', () => {
    console.log('Window is unresponsive');
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
