const Menu = require("electron");
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
class MenuBar {
  constructor() {}

  buildMenu() {
    debugger;
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
  }
}
