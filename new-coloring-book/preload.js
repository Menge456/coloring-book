const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  //you do args by doing {args: }
  changeImage: () => {
   
    ipcRenderer.invoke('changeImage', {})
  }
  // we can also expose variables, not just functions
})