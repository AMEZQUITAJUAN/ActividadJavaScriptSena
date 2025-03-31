
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");


function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (miNombre) {
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Mozilla es...por: " + miNombre;
    }
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es malo mentir: " + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
};
