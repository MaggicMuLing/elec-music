const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  logMessage: (message) => console.log(message),
});

console.log('预加载脚本已加载');