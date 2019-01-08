'use strict';
mostrarCategorias();
let id_lugar = localStorage.getItem('lugar');

const btnSubirFoto = document.querySelector('#btnSubirImagen');
const imgFoto = document.querySelector('#imagenPrevista');
btnSubirFoto.addEventListener('click', cargarIcono)

function cargarIcono(event) {
    event.returnValue = false;
    pasarImagen();
};

const inputNombre = document.querySelector('#txtNombre');
const selectCategoria = document.querySelector('#slctCategoria');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputFacebook = document.querySelector('#txtFacebook');
const inputTwitter = document.querySelector('#txtTwitter');
const inputInstagram = document.querySelector('#txtInstagram');
const inputYoutube = document.querySelector('#txtYoutube')
const selectProvincia = document.querySelector('#sltProvincias');
const opcionesProvincia = document.querySelectorAll('#sltProvincias option');
const selectCanton = document.querySelector('#sltCantones');
let opcionesCanton= document.querySelectorAll('#sltCantones option');
const selectDistrito = document.querySelector('#sltDistritos')
let opcionesDistrito = document.querySelectorAll('#sltDistritos option');
const inputDireccion = document.querySelector('#txtDireccion')
const botonActualizar = document.querySelector('#btnActualizar')

botonActualizar.addEventListener('click',obtenerDatosFormulario);


if (id_lugar) {
    mostrarDatos();
} else {
    alert('Debe seleccionar un lugar para editar');
}

function mostrarDatos() {
    let lugar = buscar_lugar(id_lugar);
    imgFoto.src = lugar['foto'];
    inputNombre.value = lugar['nombre'];
    selectCategoria.value = lugar.categoria;
    inputDescripcion.value = lugar['descripcion'];
    inputFacebook.value = lugar['facebook'];
    inputTwitter.value = lugar['twitter'];
    inputInstagram.value = lugar['instagram'];
    inputYoutube.value = lugar['youtube']
    inputDireccion.value = lugar['direccion']
    

    for(let i = 0; i < opcionesProvincia.length; i++){
        if(lugar['nombreProvincia'] == opcionesProvincia[i].text){
            selectProvincia.selectedIndex = i;
            llenarCantones(opcionesProvincia[i].value);
            opcionesCanton = document.querySelectorAll('#sltCantones option');
        }
    };

    for(let i = 0; i < opcionesCanton.length; i++){
        if(lugar['nombreCanton'] == opcionesCanton[i].text){
            selectCanton.selectedIndex = i;
            llenarDistritos(opcionesCanton[i].value);
            opcionesDistrito = document.querySelectorAll('#sltDistritos option');
        }
    };

    for(let i = 0; i < opcionesDistrito.length; i++){
        if(lugar['nombreDistrito'] == opcionesDistrito[i].text){
            selectDistrito.selectedIndex = i;
        }
    };

    // let latitud = lugar['latitud'];
    // let longitud = lugar['longitud'];

    // let latitudNum = parseFloat(latitud);
    // let longitudNum = parseFloat(longitud);
    
    // for (let i = 0; i < opciones.length; i++) {
    //     if (lugar['nombreProvincia'] == opciones[i].textContent) {
    //         selectnombreProvincia.selectedIndex = i;

    //     }
    // }
};

function obtenerDatosFormulario(){
    let foto = imgFoto.src;
    let lugar = inputNombre.value;
    let categoria = selectCategoria.value;
    let descripcion = inputDescripcion.value;
    let facebook = inputFacebook.value;
    let twitter = inputTwitter.value;
    let instagram = inputInstagram.value;
    let youtube = inputYoutube.value;
    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value))[0].nombre;

    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value))[0].nombre;

    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value))[0].nombre;
    let direccion = inputDireccion.value;


    let respuesta = actualizarLugar(id_lugar, foto, lugar, categoria, descripcion, facebook, twitter, instagram, youtube, nombreProvincia, nombreCanton, nombreDistrito, direccion, latitud, longitud);
    if (respuesta.success)
            swal({
                type: 'success',
                title: 'Actualizado',
                text: 'Se han actualizado los datos'
            }).then(function () {
                window.location.href = "listarLugaresAdmin.html";
            });
        else
            swal({
                type: 'warning',
                title: 'No se pudo actualizar los datos',
                text: respuesta.msg
            });
}


// let lugar = buscar_lugar(id_lugar);
// let map ;
// let marcador ;
// let latitud = lugar['latitud'];
// let longitud = lugar['longitud'];



// function initMap() {
//     let sitio = new google.maps.LatLng(latitud, longitud);
//     let opcionesMapa = {
//         zoom: 11,
//         center: sitio
//     }
//     map = new google.maps.Map(document.getElementById("map"), opcionesMapa);

//     marcador = new google.maps.Marker({
//         position: sitio,
//         draggable: false,
//     });

//     marcador.setMap(map);
// }

function mostrarCategorias() {
    let listarCategoria = listarCategorias();
    let categorias = "";
    let selectCategorias = document.querySelector('#slctCategoria');
    for (let i = 0; i < listarCategoria.length; i++) {
        let nuevaOpcion = new Option(listarCategoria[i]['nombreCategoria']);
        nuevaOpcion.value = listarCategoria[i]['nombreCategoria'];
        selectCategorias.appendChild(nuevaOpcion);
        categorias += listarCategoria[i]['nombreCategoria'];
        if (i < listarCategoria.length - 1)
            categorias += ", ";
    }

    $('#categoriaLabel').tooltip({ "title": categorias });
};

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })