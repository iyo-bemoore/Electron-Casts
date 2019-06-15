const electron = require('electron');

const { app, BrowserWindow , Menu} = electron;

let mainWindow;

app.on('ready', ( ) => {
  mainWindow =  new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);
})