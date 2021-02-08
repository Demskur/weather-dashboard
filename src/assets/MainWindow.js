const { BrowserWindow } = require("electron");

export class MainWindow {
  constructor() {
    this.start();
  }

  start() {
    console.log("creando mainwindow");
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      //show en false para que no se muestre enseguida
      show: false,
      backgroundColor: "#ffffff",
      useContentSize: true,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    mainWindow.loadFile("../views/index.html");
    mainWindow.webContents.executeJavaScript(`    
    console.log("probando");  
    `);
    // Se mostrara la ventana solo cuando se haya renderizado todo
    mainWindow.once("ready-to-show", () => {
      mainWindow.show();
    });

    return mainWindow;
  }
}
