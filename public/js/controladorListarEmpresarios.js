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
        let celdaVisualizar = fila.insertCell();
        let celdaModificar = fila.insertCell();
        let celdaDeshabilitar = fila.insertCell();
        let celdaBanear = fila.insertCell();
        let celdaEliminar = fila.insertCell();

        celdaId.innerHTML = listaUsuarios[i]['id'];
        celdaNombreUsuario.innerHTML = listaUsuarios[i]['nombreComercial'];
        celdaNombre.innerHTML = listaUsuarios[i]['telEmpresa'];
        celdaApellido.innerHTML = listaUsuarios[i]['razonSocial'];
        celdaCorreo.innerHTML = listaUsuarios[i]['correoEmpresa'];

        //Icono visualizar
        let enlaceVisualizar = document.createElement('a');
        enlaceVisualizar.disabled= true;
        enlaceVisualizar.classList.add('iconoRedondo');
        enlaceVisualizar.classList.add('rounded-circle');
        enlaceVisualizar.classList.add('far');
        enlaceVisualizar.classList.add('fa-address-book');
        
        celdaVisualizar.appendChild(enlaceVisualizar);


        //Icono editar
        let enlaceModificar = document.createElement('a');
        enlaceModificar.disabled= true;
        enlaceModificar.classList.add('iconoRedondo');
        enlaceModificar.classList.add('rounded-circle');
        enlaceModificar.classList.add('far');
        enlaceModificar.classList.add('fa-edit');
        enlaceModificar.classList.add('disabled');

        celdaModificar.appendChild(enlaceModificar);

        //Icono deshabilitar
        let enlaceDeshabilitar = document.createElement('a');
        enlaceModificar.disabled= true;
        enlaceDeshabilitar.classList.add('iconoRedondo');
        enlaceDeshabilitar.classList.add('rounded-circle');
        enlaceDeshabilitar.classList.add('fas');
        enlaceDeshabilitar.classList.add('fa-user-slash');

        celdaDeshabilitar.appendChild(enlaceDeshabilitar);

        //Icono bannear
        let enlaceBannear = document.createElement('a');
        enlaceBannear.classList.add('iconoRedondo');
        enlaceBannear.classList.add('rounded-circle');
        enlaceBannear.classList.add('fas');
        enlaceBannear.classList.add('fa-ban');

        celdaBanear.appendChild(enlaceBannear);

        //Icono Eliminar
        let enlaceEliminar = document.createElement('a');
        enlaceEliminar.classList.add('iconoRedondo');
        enlaceEliminar.classList.add('rounded-circle');
        enlaceEliminar.classList.add('far');
        enlaceEliminar.classList.add('fa-trash-alt');

        celdaEliminar.appendChild(enlaceEliminar);


     
        }
    }
        

};
