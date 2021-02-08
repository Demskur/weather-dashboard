"use stric";
const { app } = require("electron");
import { MainWindow } from "./MainWindow";
import { MenuBar } from "./MenuBar";

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
