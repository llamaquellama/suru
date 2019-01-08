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
            let botonVermas = fila.insertCell();
            
            
    
            celdaNombreActividad.innerHTML = listaActividades[i]['nombre'];
            celdaDescripcionaActividad.innerHTML = listaActividades[i]['descripcion'];
            celdaCuposActividad.innerHTML = listaActividades[i]['cupos'];
            celdaCostoActividad.innerHTML = listaActividades[i]['costo'];
            
                   //puede ser mejor con un ancor
            let boton = document.createElement('a');
            boton.href = '#';
            boton.classList.add('far');
            boton.classList.add('fa-eye');
            boton.dataset.id_actividad = listaActividades[i]['_id']
            // celdaBtn.innerHTML = '<i id="exampleModalCenter'+i+'class="btn btn_ver far fa-eye" data-toggle="modal"></i>';
            
           
            boton.addEventListener('click',visiaulizaActividad);
            botonVermas.appendChild(boton);
    
            let  foto =  document.createElement('img');
    
            foto.classList.add('imagenTabla');
            // foto.classList.add('col-md-4');
            
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
       

    // btnVer = document.querySelectorAll('.btn_ver');
    // btnVer.forEach(function(btn) {
    //     btn.addEventListener('click', tarjetaPerfilActividad);
    // });

   
};

function visiaulizaActividad(){

    let id_actividad = this.dataset.id_actividad;
    localStorage.setItem('idActividad',id_actividad);
    window.location.href = 'perfilActividad.html';

}

// function tarjetaPerfilActividad(evento){
//     let perfilActividad = obtenerActividad();

//     let index = evento.target.id.split('_')[2];
//     nombre.innerHTML = listarActividades[index]['nombre'];
//     console.log('Nombre: ', listarActividades[index]['nombre']);
//     nodo.innerHTML=listarActividades[index]['nombre'];
// }
