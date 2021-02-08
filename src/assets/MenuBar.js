const { Menu } = require("electron");
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

export class MenuBar {
  constructor() {
    this.buildMenu();
  }

  buildMenu() {
    if (process.env.NODE_ENV !== "production") {
      templateMenu.push({
        label: "DevTools",
        submenu: [
          {
            label: "Mostrar/Ocultar DevTools",
            accelerator: "Ctrl+D",
            click(item, focusedWindows) {
              focusedWindows.toggleDevTools();
            },
          },
          {
            role: "reload",
          },
        ],
      });
    }
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
  }
}
