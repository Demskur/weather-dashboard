import MainWindow from "./assets/MainWindow.js";
const { app } = require("electron");
// Para obtener de rutas
const path = require("path");

//Funcion que permite la recarga activa de cambios al browser lanzado en el entorno dev
if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", "bin", "electron"),
  });
}

let mainWindow;

app.on("ready", () => {
  mainWindow = new MainWindow();
});
