const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const {spawn} = require('node:child_process')



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
  ipcMain.handle('changeImage', (theName) =>  
  {
    const a = spawn('python3',[__dirname +"./testAlgo.py", theName])
    a.stdout.on('data', function(data) { 
    res.send(data.toString()); 
} ) 
}); 

  createWindow()
})