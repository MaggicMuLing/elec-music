// Electron 主进程入口文件
import { app, BrowserWindow, globalShortcut } from 'electron';
import { join } from 'path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const isDev = !app.isPackaged;
// 在开发环境中抑制安全警告
if (isDev) {
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
}
function createWindow() {
    const preloadPath = join(__dirname, '../preload.cjs');
    console.log('预加载脚本路径:', preloadPath);
    console.log('当前 __dirname:', __dirname);
    console.log('预加载脚本文件是否存在:', existsSync(preloadPath));
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: false, // 出于安全考虑，禁用 nodeIntegration
            contextIsolation: true, // 修改 contextIsolation 为 true
            preload: preloadPath, // 修正预加载脚本路径，指向项目根目录
            sandbox: false, // 允许预加载脚本运行
        },
    });
    if (isDev) {
        win.loadURL('http://localhost:5173');
    }
    else {
        win.loadFile(join(__dirname, '../dist/index.html'));
    }
    win.webContents.once('did-finish-load', () => {
        win.webContents.openDevTools(); // 确保在内容加载完成后打开开发者工具
    });
    // 监听预加载脚本错误
    win.webContents.on('preload-error', (event, preloadPath, error) => {
        console.error('预加载脚本错误:', preloadPath, error);
    });
}
app.whenReady().then(() => {
    createWindow();
    // 注册快捷键打开开发者工具
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        const win = BrowserWindow.getFocusedWindow();
        if (win) {
            win.webContents.openDevTools();
        }
    });
    console.log('快捷键 CommandOrControl+Shift+I 已注册');
});
app.on('window-all-closed', () => {
    // @ts-ignore
    if (process.platform !== 'darwin')
        app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
console.log('主进程文件已加载', __dirname);
