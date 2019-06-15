const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow , ipcMain } = electron;
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
ffmpeg.setFfprobePath(ffprobePath);
ffmpeg.setFfmpegPath(ffmpegPath);


let mainWindow

app.on('ready', ()=> {
   // creates a new browser window on desktop  - pass pregit config core.whitespace cr-at-eolference object to use require.
    mainWindow =  new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
      }});

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

// ipc Main app  receives  the event 
ipcMain.on('video:submit', (event, path) => {
    ffmpeg.ffprobe(path, function(err, metadata) {
        //console.log("Video duration is ",metadata.format.duration+" s" );
    // send the data back to the webpage
        mainWindow.webContents.send('video:metadata',metadata.format.duration);  
    });
});

