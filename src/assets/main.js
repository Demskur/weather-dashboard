"use stric";
require("./database");
const { app, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
import { MainWindow } from "./MainWindow";
import { MenuBar } from "./MenuBar";

//habilita recarga activa de electron en entorno dev

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../../node_modules", ".bin", "electron"),
  });
}
// se almacenan en let para que el garbage colletor no me cierre nada
let window;
let menu;

function createWindow() {
  window = new MainWindow();
  menu = new MenuBar();
}
//llamara a la funcion cuando termine de cargar electron
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  console.log("Cerrando");
});

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
