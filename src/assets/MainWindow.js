const { app, BrowserWindow } = require("electron");
const path = require("path");

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
        enableRemoteModule: false,
        //process.env.NODE_ENV !== "production" ? true : false,
        //Evita que los objetos globales puedan ser modificados desde scripts que se ejecuten en el renderer, tiene que estar en true
        contextIsolation: false,
        //preload: path.join(__dirname, "../views/GridStackRenderer.js"),
      },
    });
    //al cargar el html, este debe empezar por el nombre de la carpeta que contiene todo el codigo
    mainWindow.loadFile("src/views/index.html");
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
