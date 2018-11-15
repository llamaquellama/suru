' use strict '
const btnListarActividad = document.querySelector('#listarActividad');
let btnVer;
btnListarActividad.addEventListener('click', mostrarListaActvidades);
let listarActividades = [];

mostrarListaActvidades();

function mostrarListaActvidades(){
    listarActividades = obtenerListaActividades();
    listarActividades=[{
        "_id": "5bde45e984981978ed56a7d8",
        "imagen": "",
        "nombre": "casa de melo",
        "descripcion": "Pikiniki en la casa de Melo",
        "cupos": 3,
        "costoss":0,
        'comentarios':['muy bueno', 'muy malo'],
        'evaluacion':3
    },
    {
        "_id": "5bde45e984981978ed56a7d8",
        "imagen": "",
        "nombre": "casa de ange",
        "descripcion": "Pikiniki en la casa de ange",
        "cupos": 2,
        "costoss":100,
        'comentarios':['muy bueno', 'muy malo'],
        'evaluacion':3
    }];
    let  tbody = document.querySelector('#tablaListarActividades tbody');
    tbody.innerHTML = '';
    for(let i = 0; i < listarActividades.length ; i++){
        let fila = tbody.insertRow();

        let celdaImagenActividad = fila.insertCell();
        let celdaNombreActividad = fila.insertCell();
        let celdaDescripcionaActividad = fila.insertCell();
        let celdaCuposActividad = fila.insertCell();
        let celdaCostoActividad = fila.insertCell();
        let celdaBtn = fila.insertCell();
        
        celdaImagenActividad.innerHTML = listarActividades[i]['imagen'];
        celdaNombreActividad.innerHTML = listarActividades[i]['nombre'];
        celdaDescripcionaActividad.innerHTML = listarActividades[i]['descripcion'];
        celdaCuposActividad.innerHTML = listarActividades[i]['cupos'];
        celdaCostoActividad.innerHTML = listarActividades[i]['costoss'];
        celdaBtn.innerHTML = '<i id="btn_ver_'+i+'" class="btn_ver far fa-eye"></i>';
    }

    btnVer = document.querySelectorAll('.btn_ver');
    btnVer.forEach(function(btn) {
        btn.addEventListener('click', tarjetaPerfilActividad());
    });
};

