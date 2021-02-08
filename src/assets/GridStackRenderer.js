//De esta manera cargo todoooo segun https://www.npmjs.com/package/gridstack#demo-and-examples
const { GridStack } = require("gridstack");
require("../../node_modules/gridstack/dist/h5/gridstack-dd-native.js");
//Otra forma mas resumida
//const GridStack = require("../../node_modules/gridstack/dist/gridstack-h5.js");
let grid;
let items;

function loadGridstack() {
  grid = GridStack.init({
    acceptWidgets: true,
    dragIn: ".newWidget", // class that can be dragged from outside
    dragInOptions: {
      revert: "invalid",
      scroll: false,
      appendTo: "body",
      helper: "clone",
    },
    removable: "#trash", // drag-out delete class
    removeTimeout: 100,
  });
  items = [
    { x: 0, y: 0, w: 4, h: 2, content: "1" },
    {
      x: 4,
      y: 0,
      w: 4,
      h: 4,
      noMove: true,
      noResize: true,
      locked: true,
      content:
        'I can\'t be moved or dragged!<br><ion-icon name="ios-lock" style="font-size:300%"></ion-icon>',
    },
    {
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      noResize: true,
      content:
        '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon><p class="card-text text-center" style="margin-bottom: 0">...but don\'t resize me!',
    },
    { x: 10, y: 0, w: 2, h: 2, content: "4" },
    { x: 0, y: 2, w: 2, h: 2, content: "5" },
    { x: 2, y: 2, w: 2, h: 4, content: "6" },
    { x: 8, y: 2, w: 4, h: 2, content: "7" },
    { x: 0, y: 4, w: 2, h: 2, content: "8" },
    { x: 4, y: 4, w: 4, h: 2, content: "9" },
    { x: 8, y: 4, w: 2, h: 2, content: "10" },
    { x: 10, y: 4, w: 2, h: 2, content: "11" },
  ];
  grid.load(items);
}

try {
  loadGridstack();
} catch (e) {
  console.log(e);
}
