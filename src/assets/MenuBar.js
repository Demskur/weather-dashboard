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

export default class MenuBar {
  buildMenu() {
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
  }
}
