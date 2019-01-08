'use strict';
const inputFiltro = document.querySelector('#txtFiltro');

let listaUsuarios = [];
mostrarListaUsuarios();
inputFiltro.addEventListener('keyup', mostrarListaUsuarios);

function mostrarListaUsuarios() {

    listaUsuarios = obtenerUsuarios(1);

    let tbody = document.querySelector('#tablaClientes tbody');
    tbody.innerHTML = '';
    let filtro = inputFiltro.value;



        for (let i = 0; i < listaUsuarios.length; i++) {
            if(listaUsuarios[i]['nombre1'].toLowerCase().includes(filtro.toLowerCase()) || listaUsuarios[i]['apellido1'].toLowerCase().includes(filtro.toLowerCase())){

                let fila = tbody.insertRow();

        let celdaId = fila.insertCell();
        let celdaNombreUsuario = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaApellido = fila.insertCell();
        let celdaCorreo = fila.insertCell();
        let celdaVisualizar = fila.insertCell();
        let celdaModificar = fila.insertCell();

        celdaId.innerHTML = listaUsuarios[i]['id'];
        celdaNombreUsuario.innerHTML = listaUsuarios[i]['nombreUsuario'];
        celdaNombre.innerHTML = listaUsuarios[i]['nombre1'];
        celdaApellido.innerHTML = listaUsuarios[i]['apellido1'];
        celdaCorreo.innerHTML = listaUsuarios[i]['correo'];

        //Icono visualizar
        let enlaceVisualizar = document.createElement('a');
        enlaceVisualizar.href = '#';
        enlaceVisualizar.classList.add('far');
        enlaceVisualizar.classList.add('fa-address-book');
        // enlaceVisualizar.type = 'button';
        enlaceVisualizar.dataset.id_usuario = listaUsuarios[i]['_id'];

        enlaceVisualizar.addEventListener('click', visualizarUsuario);

        celdaVisualizar.appendChild(enlaceVisualizar); //Le agregamos el botón



        //Icono editar
        let enlaceModificar = document.createElement('a');
        enlaceModificar.href = '#';
        enlaceModificar.disabled= true;
        enlaceModificar.classList.add('far');
        enlaceModificar.classList.add('fa-edit');
        enlaceModificar.classList.add('disabled');

        celdaModificar.appendChild(enlaceModificar);
     
        }
    }
        

};

function visualizarUsuario(){
    
    let id_usuario = this.dataset.id_usuario; //This devuelve el botón, nos metemos al dataset y le pedimos el id
    localStorage.setItem('usuario' , id_usuario) //crear una variable en la memoria
    window.location.href = 'informacionUsuario.html';


};
