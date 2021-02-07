const { app, BrowserWindow, Menu } = require("electron");
// Para crear rutas
const url = require("url");
// Para obtener de rutas
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", "bin", "electron"),
  });
}

let mainWindow;

const templateMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Nuevo",
        accelerator: "Ctrl+N",
        click() {},
      },
    ],
  },
];

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "./views/index.html"),
      protocol: "file",
      slashes: true,
    })
  );
  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
});
