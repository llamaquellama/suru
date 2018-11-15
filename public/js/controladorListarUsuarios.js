'use strict';

let listaUsuarios = [];
mostrarListaUsuarios();

function mostrarListaUsuarios() {

    listaUsuarios = obtenerUsuarios(1);

    let tbody = document.querySelector('#tablaClientes tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < listaUsuarios.length; i++) {
            //if(listaUsuarios[i]['nombre1'].toLowerCase().includes(filtro.toLowerCase())){
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
        celdaNombreUsuario.innerHTML = listaUsuarios[i]['nombreUsuario'];
        celdaNombre.innerHTML = listaUsuarios[i]['nombre1'];
        celdaApellido.innerHTML = listaUsuarios[i]['apellido1'];
        celdaCorreo.innerHTML = listaUsuarios[i]['correo'];

        //Icono visualizar
        let enlaceVisualizar = document.createElement('a');
        enlaceVisualizar.classList.add('iconoRedondo');
        enlaceVisualizar.classList.add('rounded-circle');
        enlaceVisualizar.classList.add('far');
        enlaceVisualizar.classList.add('fa-address-book');
        enlaceVisualizar.classList.add('visualizarModal');
        enlaceVisualizar.id = 'btnVisualizar-'+i;

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
        
        let btnVisualizar = document.querySelectorAll('.visualizarModal');
        btnVisualizar.forEach(function(btn){
            btn.addEventListener('click', visualizarModal)
        });

};

function visualizarModal(event){
//    let boxModal = document.querySelector('#ventanaModalDiv');
    let id = event.target.id.split('-');

        //1. creación del card  
//        let divLibro = document.createElement('div');
//        divLibro.classList.add('modalStyle');
//        boxModal.appendChild(divLibro);

    let nombre = document.querySelector('#visualizarNombre');
    nombre.innerText = listaUsuarios[id[1]]['nombre1']
    let idText = document.querySelector('#visualizarId');
    idText.innerText = listaUsuarios[id[1]]['id']

    let apellido = document.querySelector('#visualizarApellido');
    apellido.innerText = listaUsuarios[id[1]]['apellido1']

}
