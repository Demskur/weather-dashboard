"use stric";
const { app } = require("electron");
const path = require("path");
import { MainWindow } from "./MainWindow";
import { MenuBar } from "./MenuBar";

//habilita recarga activa de electron en entorno dev
if (process.env.NODE_ENV === "development") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", "bin", "electron"),
  });
}

function createWindow() {
  const window = new MainWindow();
  const menu = new MenuBar();
}

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
