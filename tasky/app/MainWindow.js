const electron = require('electron'); 
const { BrowserWindow  } = electron;

class MainWindow extends BrowserWindow {
   
     constructor(){
         super({
            webPreferences: {
                nodeIntegration: true,
                // page will run at full speed when blurred, 
                backgroundThrottling : false
            },
            height: 500,
            width: 300,
            frame: false,
            resizable: false,
            show: false,
        });
        this.on('blur', this.onBlur.bind(this)); 
     };
     onBlur(){
         this.hide();
     };
}

module.exports = MainWindow