let conectado = sessionStorage.getItem('conectado');//como se está conectando eso desde el inicio de sesión?
estaConectado();
function estaConectado() {
    if (!conectado) {
        window.location = 'index.html';
    }
}

window.onload = setup;

function setup() {
    function cerrarSesion() {
        sessionStorage.clear();
        window.location = 'index.html';
    }
    const usuarioActivo = sessionStorage.getItem('nombre1');
    const labelNombre = document.querySelector('#usuarioNombreActivo');
    labelNombre.innerHTML = usuarioActivo;
    document.querySelector('#btnCerrarSesion').addEventListener('click', cerrarSesion)
}