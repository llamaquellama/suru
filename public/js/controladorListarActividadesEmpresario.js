' use strict '
// const btnListarActividad = document.querySelector('#listarActividad');

// btnListarActividad.addEventListener('click', mostrarListaActvidades);
const inputFiltro =  document.querySelector('#txtFiltro');

listaActividades = obtenerActividad();
inputFiltro.addEventListener('keyup',mostrarListaActvidades);

mostrarListaActvidades();

function mostrarListaActvidades(){
    

    let  tbody = document.querySelector('#tablaListarActividades tbody');
    let filtro = inputFiltro.value;
    tbody.innerHTML = '';
    for(let i = 0; i < listaActividades.length ; i++){
        if(listaActividades[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

            let celdaImagenActividad = fila.insertCell();
            let celdaNombreActividad = fila.insertCell();
            let celdaDescripcionaActividad = fila.insertCell();
            let celdaCuposActividad = fila.insertCell();
            let celdaCostoActividad = fila.insertCell();
            let botones = fila.insertCell();
            let celdaEditar = fila.insertCell();
            let celdaEliminar = fila.insertCell();
            
            
    
            celdaNombreActividad.innerHTML = listaActividades[i]['nombre'];
            celdaDescripcionaActividad.innerHTML = listaActividades[i]['descripcion'];
            celdaCuposActividad.innerHTML = listaActividades[i]['cupos'];
            celdaCostoActividad.innerHTML = listaActividades[i]['costo'];

            let botonVer = document.createElement('a');
            botonVer.href = '#';
            botonVer.classList.add('far');
            botonVer.classList.add('fa-eye');
            botonVer.dataset.id_actividad = listaActividades[i]['_id']
            // celdaBtn.innerHTML = '<i id="exampleModalCenter'+i+'class="btn btn_ver far fa-eye" data-toggle="modal"></i>';
            
            let botonEditar = document.createElement('a');
            botonEditar.href = '#';
            botonEditar.classList.add('far');
            botonEditar.classList.add('fa-edit');
            botonEditar.dataset.id_actividad = listaActividades[i]['_id'];

            let botonEliminar = document.createElement('a');
            botonEliminar.href = '#';
            botonEliminar.classList.add('far');
            botonEliminar.classList.add('fa-trash-alt');
            botonEliminar.dataset.id_actividad = listaActividades[i]['_id'];
           
            botonVer.addEventListener('click',visiaulizaActividad);
            botonEditar.addEventListener('click',editarActividad);
            botonEliminar.addEventListener('click',confirmarBorrado);
            
    
            botones.appendChild(botonVer);
            celdaEditar.appendChild(botonEditar);
            celdaEliminar.appendChild(botonEliminar);
    
            let  foto =  document.createElement('img');
    
            foto.classList.add('imagenTabla');
            
            if(listaActividades [i]['foto']){
                foto.src = listaActividades[i]['foto'];
            }else{
                foto.src = 'img/iconoPatrocinador.png';
            }
    
            celdaImagenActividad.appendChild(foto);
            celdaImagenActividad.classList.add('divImagen');
            celdaNombreActividad.classList.add('divNombreActividad');
    
        }
    }
};

function visiaulizaActividad(){

    let id_actividad = this.dataset.id_actividad;
    localStorage.setItem('idActividad',id_actividad);
    window.location.href = 'perfilActividadEmpresario.html';

}

function editarActividad(){
    let id_actividad = this.dataset.id_actividad;
    localStorage.setItem('idActividad',id_actividad);
    window.location.href = 'editarActividad.html';
};


function confirmarBorrado(){
    let id_actividad =  this.dataset.id_actividad;
    swal({
        title: 'Está seguro que desea eliminar la actividad?',
        text: "Este proceso no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro!'
      }).then((result) => {
        if (result.value) {
            eliminar_actividad(id_actividad);
            listaActividades = obtenerActividad();
            mostrarListaActvidades();
          swal({
            title: 'Actividad eliminada!',
            text:'La Actividad fue eliminada con éxito',
            type:'success'
          });
        }
      })
};
