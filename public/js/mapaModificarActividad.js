let id_lugarMapa = localStorage.getItem('actividad');

let actividad = obtenerPerfilActividad(id_lugarMapa);
let map ;
let marcador ;
let latitud = actividad['latitud'];
let longitud = actividad['longitud'];


function initMapTest() {
    let sitio = new google.maps.LatLng(latitud, longitud);
    let opcionesMapa = {
        zoom: 11,
        center: sitio
    }
    map = new google.maps.Map(document.getElementById("map"), opcionesMapa);

    marcador = new google.maps.Marker({
        position: sitio,
        draggable: true,
    });
    
    google.maps.event.addListener(marcador, 'dragend', function(evt){
        latitud = evt.latLng.lat();
        longitud = evt.latLng.lng();
    });
    marcador.setMap(map);
}

function getLatitud(){
    return latitud;
}


function getLongitud(){
    return longitud;
}