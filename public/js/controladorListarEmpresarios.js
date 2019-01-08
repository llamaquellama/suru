'use strict';
const inputFiltro = document.querySelector('#txtFiltro');

let listaUsuarios = [];
mostrarListaUsuarios();
inputFiltro.addEventListener('keyup', mostrarListaUsuarios);

function mostrarListaUsuarios() {

    listaUsuarios = obtenerUsuarios(2);

    let tbody = document.querySelector('#tablaClientes tbody');
    tbody.innerHTML = '';
    let filtro = inputFiltro.value;



        for (let i = 0; i < listaUsuarios.length; i++) {
            if(listaUsuarios[i]['nombreComercial'].toLowerCase().includes(filtro.toLowerCase()) || listaUsuarios[i]['nombreAContacto'].toLowerCase().includes(filtro.toLowerCase())){

                let fila = tbody.insertRow();

        let celdaId = fila.insertCell();
        let celdaNombreUsuario = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaApellido = fila.insertCell();
        let celdaCorreo = fila.insertCell();
        // let celdaVisualizar = fila.insertCell();
        let celdaModificar = fila.insertCell();
    

        celdaId.innerHTML = listaUsuarios[i]['id'];
        celdaNombreUsuario.innerHTML = listaUsuarios[i]['nombreComercial'];
        celdaNombre.innerHTML = listaUsuarios[i]['telEmpresa'];
        celdaApellido.innerHTML = listaUsuarios[i]['razonSocial'];
        celdaCorreo.innerHTML = listaUsuarios[i]['correoEmpresa'];

        // //Icono visualizar
        // let enlaceVisualizar = document.createElement('a');
        // enlaceVisualizar.href = '#';
        // enlaceVisualizar.classList.add('far');
        // enlaceVisualizar.classList.add('fa-address-book');
        // enlaceVisualizar.dataset.id_usuario = listaUsuarios[i]['_id'];

        // enlaceVisualizar.addEventListener('click', visualizarUsuario);

        // celdaVisualizar.appendChild(enlaceVisualizar); 


        //Icono editar
        let enlaceModificar = document.createElement('a');
        enlaceModificar.href = '#';
        enlaceModificar.classList.add('far');
        enlaceModificar.classList.add('fa-edit');
        enlaceModificar.dataset.id_usuario = listaUsuarios[i]['_id'];

        enlaceModificar.addEventListener('click', MostrarDatosUsuario);

        celdaModificar.appendChild(enlaceModificar);
    
     
        }
    }
        

};

function visualizarUsuario(){
    
    let id_usuario = this.dataset.id_usuario; //This devuelve el botón, nos metemos al dataset y le pedimos el id
    localStorage.setItem('usuario' , id_usuario); //crear una variable en la memoria
    window.location.href = 'informacionUsuarioAdmin.html';
};

function MostrarDatosUsuario(){
    
    let id_usuario = this.dataset.id_usuario;
    localStorage.setItem('usuario' , id_usuario);
    window.location.href = 'modificarEmpresarioAdmin.html';
};
