function turnOff(element) {
    console.log(element);

    if (element.innerText == "Login") {
        console.log;
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
        console.log;
    }
}

/*eliminar boton verde al tocarlo*/
function hide(element) {
    element.remove();
}