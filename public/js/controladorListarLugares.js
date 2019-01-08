'use strict';

const inputFiltro = document.querySelector('#txtFiltro')

let listaLugares = obtenerLugar();

mostrarListaLugares();
inputFiltro.addEventListener('keyup', mostrarListaLugares);


function mostrarListaLugares() {
    let tbody = document.querySelector('#tablaLugares tbody');
    let filtro = inputFiltro.value;

    tbody.innerHTML = '';
    
    for (let i = 0; i < listaLugares.length; i++) {
        if(listaLugares[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()) || listaLugares[i]['categoria'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
        
            let celdaProvincia = fila.insertCell();
            let celdaDistrito = fila.insertCell();
            let celdaCanton = fila.insertCell();
        
            let celdaVisualizar = fila.insertCell();
            let celdaConfiguracion = fila.insertCell();
            let celdaEliminar = fila.insertCell();
            
             celdaNombre.innerHTML = listaLugares[i]['nombre'];
             celdaCategoria.innerHTML = listaLugares[i]['categoria'];
         
             celdaProvincia.innerHTML = listaLugares[i]['nombreProvincia'];
             celdaDistrito.innerHTML = listaLugares[i]['nombreDistrito'];
             celdaCanton.innerHTML = listaLugares[i]['nombreCanton'];
        

             let botonVerMas = document.createElement('a');
             botonVerMas.href = '#';
             botonVerMas.classList.add('far');
             botonVerMas.classList.add('fa-eye');
             botonVerMas.dataset.id_lugar = listaLugares[i]['_id'];

             botonVerMas.addEventListener('click', visualizarLugar);

             let botonEditar = document.createElement('a');
             botonEditar.href = '#';
             botonEditar.classList.add('far');
             botonEditar.classList.add('fa-edit');
             botonEditar.dataset.id_lugar = listaLugares[i]['_id'];

             botonEditar.addEventListener('click', mostrarDatosEdicion);

             let botonEliminar = document.createElement('a');
             botonEliminar.href = '#';
             botonEliminar.classList.add('far');
             botonEliminar.classList.add('fa-trash-alt');
             botonEliminar.dataset.id_lugar = listaLugares[i]['_id'];

             botonEliminar.addEventListener('click', confirmarBorrado);


             celdaVisualizar.appendChild(botonVerMas);
             celdaConfiguracion.appendChild(botonEditar);
             celdaEliminar.appendChild(botonEliminar);
        }
    }
};


function visualizarLugar(){

    let id_lugar = this.dataset.id_lugar;
    localStorage.setItem('lugar', id_lugar);
    window.location.href = 'perfil_Lugar.html';
};

function mostrarDatosEdicion(){
    let id_lugar = this.dataset.id_lugar;
    localStorage.setItem('lugar', id_lugar);
    window.location.href = 'modificar_lugar.html';
}

function confirmarBorrado(){
    let id_lugar = this.dataset.id_lugar;
    swal({
        title: '¿Está seguro que desea borrar el lugar?',
        text: "Este proceso no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!'
      }).then((result) => {
        if (result.value) {
            borrarLugar(id_lugar);
            listaLugares = obtenerLugar();
            mostrarListaLugares ();
          swal({
            title:'Lugar borrado',
            text: 'El lugar ha sido borrado con éxito',
            type:'success'
        })
        }
      })
};