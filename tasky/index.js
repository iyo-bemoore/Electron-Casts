const path = require('path');
const electron = require('electron');

const { app, ipcMain } = electron;


const TimerTray = require('./app/TimerTray');
const MainWindow = require('./app/MainWindow');



let mainWindow;
app.on('ready', () => {
    //app.dock.hide();
    mainWindow = new MainWindow();
    mainWindow.loadURL(`file://${__dirname}/src/index.html`)
    
    const iconName = process.platform === 'win32' || 'linux' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
    const  tray = new TimerTray(iconPath,mainWindow);
});

ipcMain.on('update-timer', (event, timeLeft) => {
    
})