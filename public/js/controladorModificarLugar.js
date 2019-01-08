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
let opcionesCanton = document.querySelectorAll('#sltCantones option');
const selectDistrito = document.querySelector('#sltDistritos')
let opcionesDistrito = document.querySelectorAll('#sltDistritos option');
const inputDireccion = document.querySelector('#txtDireccion')
const botonActualizar = document.querySelector('#btnActualizar')

botonActualizar.addEventListener('click', obtenerDatosFormulario);

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


    for (let i = 0; i < opcionesProvincia.length; i++) {
        if (lugar['nombreProvincia'] == opcionesProvincia[i].text) {
            selectProvincia.selectedIndex = i;
            llenarCantones(opcionesProvincia[i].value);
            opcionesCanton = document.querySelectorAll('#sltCantones option');
        }
    };

    for (let i = 0; i < opcionesCanton.length; i++) {
        if (lugar['nombreCanton'] == opcionesCanton[i].text) {
            selectCanton.selectedIndex = i;
            llenarDistritos(opcionesCanton[i].value);
            opcionesDistrito = document.querySelectorAll('#sltDistritos option');
        }
    };

    for (let i = 0; i < opcionesDistrito.length; i++) {
        if (lugar['nombreDistrito'] == opcionesDistrito[i].text) {
            selectDistrito.selectedIndex = i;
        }
    };
};

function obtenerDatosFormulario() {
    let foto = imgFoto.src;
    let lugar = inputNombre.value;
    let categoria = selectCategoria.value;
    let descripcion = inputDescripcion.value;
    let facebook = inputFacebook.value;
    let twitter = inputTwitter.value;
    let instagram = inputInstagram.value;
    let youtube = inputYoutube.value;
    let nombreProvincia = provincias.filter(provincia => provincia.idProvincia === parseInt(selectProvincias.value)).nombre;

    let nombreCanton = cantones.filter(canton => canton.idCanton === parseInt(selectCantones.value)).nombre;

    let nombreDistrito = distritos.filter(distrito => distrito.idDistrito === parseInt(selectDistritos.value)).nombre;
    let direccion = inputDireccion.value;


    let error = validar(inputNombre.value, selectCategoria.value, inputDescripcion.value, inputDireccion.value);


    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo actualizar el lugar',
            text: 'Por favor revise los campos en rojo'
        });

    } else {
        let respuesta = actualizarLugar(id_lugar, foto, lugar, categoria, descripcion, facebook, twitter, instagram, youtube, nombreProvincia, nombreCanton, nombreDistrito, direccion, getLatitud(), getLongitud());
        if (respuesta.success) {

            swal({
                type: 'success',
                title: 'Su lugar ha sido actualizado',
                text: 'Felicidades'
            }).then(function () {
                window.location.href = "lugaresMuroEmpresario.html";
            });
        }else {
            swal({
                type: 'warning',
                title: 'No se pudo actualizar los datos',
                text: respuesta.msg
            });
        }
    }
};

    // if (error == true) {



    // } else {
    //     swal({
    //         type: 'success',
    //         title: 'Su lugar ha sido actualizado',
    //         text: 'Felicidades',
    //     }).then((value) => {
    //         window.location.href = 'lugaresMuroEmpresario.html';
    //     });
    // }

    function validar(plugar, pcategoria, pdescripcion, pdireccion) {

        let error = false;
        let expNumeros = /^[0-9]$/;
        let expLetras = /^[a-zA-Z áéíóúñÜüÉÁ]+$/;

        if (plugar == '') {
            error = true;
            inputNombre.classList.add('error_input');
        } else {
            inputNombre.classList.remove('error_input');
        }

        if (pcategoria == '') {
            error = true;
            selectCategoria.classList.add('error_input');
        } else {
            selectCategoria.classList.remove('error_input');
        }

        if (pdescripcion == '') {
            error = true;
            inputDescripcion.classList.add('error_input');
        } else {
            inputDescripcion.classList.remove('error_input');
        }

        if (pdireccion == '') {
            error = true;
            inputDireccion.classList.add('error_input');
        } else {
            inputDireccion.classList.remove('error_input');
        }

        return error;
    };

    // let lugar = buscar_lugar(id_lugar);
    // let map ;
    // let marcador ;
    // let latitud = lugar['latitud'];
    // let longitud = lugar['longitud'];
    // initMap();



    // function initMap() {
    //     let sitio = new google.maps.LatLng(latitud, longitud);
    //     let opcionesMapa = {
    //         zoom: 11,
    //         center: sitio
    //     }
    //     map = new google.maps.Map(document.getElementById("map"), opcionesMapa);

    //     marcador = new google.maps.Marker({
    //         position: sitio,
    //         draggable: true,
    //     });

    //     google.maps.event.addListener(marcador, 'dragend', function(evt){
    //         latitud = evt.latLng.lat();
    //         longitud = evt.latLng.lng();
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

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })