const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const {spawn}  = require('child_process')
const electronSquirrelStartup = require('electron-squirrel-startup')



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  ipcMain.handle('changeImage', async () =>  
  {
    
    
 
 
  let theFile = undefined
    let newFile = undefined;
    const dialog = require('electron').dialog;
    // can update these extensions later to include other image types when we have an alg that works for them
      theFile = dialog.showOpenDialogSync({filters:[{ name: 'Images', extensions: ['jpg', 'jpeg'] },]});
      const python = spawn('python3',["./testAlgo.py", theFile[0]]);

      //python.stderr.on('data', (err) => {console.log(`error: + ${err}`)});
      return "output." + "jpg";
    
    
     
}); 

  createWindow()
})