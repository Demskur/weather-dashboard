const { BrowserWindow } = require("electron");
// Para crear rutas
const url = require("url");

class MainWindow {
  constructur() {
    this.start();
  }

  start() {
    console.log("creando mainwindow");
    let mainWindow = new BrowserWindow({});
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../views/index.html"),
        protocol: "file",
        slashes: true,
      })
    );
    return mainWindow;
  }
}
export default MainWindow;
