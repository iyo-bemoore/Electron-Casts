const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;
const TimerTray = require('./app/TimerTray');


let mainWindow;
let tray;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        height: 500,
        width: 300,
        frame: false,
        resizable: false,
        show: false,
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`)

    const iconName = process.platform === 'win32' || 'linux' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

    tray = new TimerTray(iconPath,mainWindow);
        
})