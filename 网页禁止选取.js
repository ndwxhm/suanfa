function disableCtrlKey(event) {
    if (event.ctrlKey) {
        return false;
    }
}

function stop() {
    return false;
}

document.oncontextmenu = stop;
document.onkeydown = disableCtrlKey;
document.onmousemove = stop;
document.ondragstart = stop;
document.onselectstart = stop;
document.onselect = document.selection.empty();
document.oncopy = document.selection.empty();
document.onbeforecopy = stop;