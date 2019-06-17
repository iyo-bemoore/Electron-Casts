const electron = require('electron');

const { app , BrowserWindow } = electron;


let mainWindow;
app.on('ready', () => {
   mainWindow =   new BrowserWindow({
        webPreferences : {
            nodeIntegration : true,
            backgroundThrottling : false
        },
        height : 600,
        width : 800
    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
})