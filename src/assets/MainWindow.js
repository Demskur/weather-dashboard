const { BrowserWindow } = require("electron");
// Para crear rutas
const url = require("url");

export default class MainWindow {
  constructur() {}

  start() {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./views/index.html"),
        protocol: "file",
        slashes: true,
      })
    );
  }
}
