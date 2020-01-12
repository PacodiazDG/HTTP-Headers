const codeenableContextMenu = `
function enableContextMenu(aggressive = false) {
    void(document.ondragstart = null);
    void(document.onselectstart = null);
    void(document.onclick = null);
    void(document.onmousedown = null);
    void(document.onmouseup = null);
    void(document.body.oncontextmenu = null);
    enableRightClickLight(document);
    if (aggressive) {
        enableRightClick(document);
        removeContextMenuOnAll("body");
        removeContextMenuOnAll("img");
        removeContextMenuOnAll("td");
    }
}

function removeContextMenuOnAll(tagName) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        enableRightClick(elements[i]);
    }
}

function enableRightClickLight(el) {
    el || (el = document);
    el.addEventListener("contextmenu", bringBackDefault, true);
}

function enableRightClick(el) {
    el || (el = document);
    el.addEventListener("contextmenu", bringBackDefault, true);
    el.addEventListener("dragstart", bringBackDefault, true);
    el.addEventListener("selectstart", bringBackDefault, true);
    el.addEventListener("click", bringBackDefault, true);
    el.addEventListener("mousedown", bringBackDefault, true);
    el.addEventListener("mouseup", bringBackDefault, true);
}

function restoreRightClick(el) {
    el || (el = document);
    el.removeEventListener("contextmenu", bringBackDefault, true);
    el.removeEventListener("dragstart", bringBackDefault, true);
    el.removeEventListener("selectstart", bringBackDefault, true);
    el.removeEventListener("click", bringBackDefault, true);
    el.removeEventListener("mousedown", bringBackDefault, true);
    el.removeEventListener("mouseup", bringBackDefault, true);
}

function bringBackDefault(event) {
    event.returnValue = true;
    (typeof event.stopPropagation === 'function') && event.stopPropagation();
    (typeof event.cancelBubble === 'function') && event.cancelBubble();
}
enableContextMenu();`;

const Debugging7control1s = `
console.log("#1");
var myobj = JSON.parse('${localStorage.getItem("varcommand")}');
Object.keys(myobj.vars).forEach(function(key) {
  for (var b in window) {
    if (window.hasOwnProperty(b)) {
      if (b.indexOf(myobj.vars[key]) !== -1) {
        eval("" + b + "=undefined;")
        console.log("undefined " + b + "!!!")
        eval("delete " + b + ";")
        eval("console.log(" + b + ");")
      }
    }
    eval(myobj.vars[key] + "=undefined;")
  }
});
`;
const Debugging7control2s =`console.log("#2");
var myobj = JSON.parse('${localStorage.getItem("varcommand")}');
Object.keys(myobj.vars).forEach(function(key) {
  eval(myobj.vars[key] + "=undefined;")
  eval("console.log(" + myobj.vars[key] + ");")
});`
export function enableContextMenus() {
   return codeenableContextMenu;
}

export function Debugging7control1() {
   return Debugging7control1s;
}

export function Debugging7control2() {
   return Debugging7control2s;
}