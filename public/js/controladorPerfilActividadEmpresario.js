'use strict ';
mostrarActividad();


function mostrarActividad() {

    let perfilActividad = obtenerPerfilActividad();
    let perfilLugar = obtenerLugaresPorUsuario();

    let foto = document.querySelector('#foto');
    foto.src = perfilActividad['foto'];
    foto.classList.add('estilos');
    foto.classList.add('imgenAct');



    let nombre = document.querySelector('#nombre');
    nombre.innerHTML = perfilActividad.nombre;

    // let fechaNueva = new Date(perfilActividad.fecha);
    // fechaNueva.innerHTML = fechaNueva.getDate() + "/" + fechaNueva.getMonth() + "/" + fechaNueva.getFullYear();


    let fechaInicio = document.querySelector('#fechaI');
    fechaInicio.innerHTML = parseDate(perfilActividad.fechaInicio);
    fechaInicio.classList.add('mr-5');


    let fechaFin = document.querySelector('#fechaF');
    fechaFin.innerHTML = parseDate(perfilActividad.fechaFin);

    let horaInicio = document.querySelector('#horaI');
    horaInicio.innerHTML = parseTime(perfilActividad.horaInicio);

    let horaFin = document.querySelector('#horaF');
    horaFin.innerHTML = parseTime(perfilActividad.horaFin);

    let costo = document.querySelector('#costo');
    costo.innerHTML = perfilActividad.costo;

    let cupos = document.querySelector('#cupos');
    cupos.innerHTML = perfilActividad.cupos;

    let provincia = document.querySelector('#provincia');
    provincia.innerHTML = perfilActividad.nombreProvincia + ',';

    let distrito = document.querySelector('#distrito');
    distrito.innerHTML = perfilActividad.nombreDistrito + ',';

    let canton = document.querySelector('#canton');
    canton.innerHTML = perfilActividad.nombreCanton;

    let descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = perfilActividad.descripcion;

    let patrocinadores = document.querySelector('#patrocinadores');
    agregarPatrocinadores(patrocinadores, JSON.parse(perfilActividad.patrocinadores));

    let lugar = document.querySelector('#lugar');
    lugar.innerHTML = perfilActividad.nombreLugar;
    lugar.classList.add('imgenLugar');

    for (let i = 0; i < perfilLugar.length; i++) {
        if (perfilLugar[i].nombre == perfilActividad.nombreLugar) {
            let nombreUsuario = perfilLugar[i].nombreUsuario
            if (nombreUsuario) {
                let fotoLugares = document.querySelector('#fotoLugar');
                fotoLugares.src = perfilLugar[i].foto;
                fotoLugares.classList.add('imgenLugar');
            }
        }

    }



};

function agregarPatrocinadores(patrocinadoresDiv, patrocinadoresData) {
    patrocinadoresData.forEach(patrocinadorData => {
        let divPatrocinador = document.createElement("div");
        let labelNombre = document.createElement("label");
        labelNombre.innerText = patrocinadorData.nombrePatrocinador;
        let labelAporte = document.createElement("label");
        labelAporte.innerText = "Aportes: "+patrocinadorData.aportePatrocinador;
        divPatrocinador.appendChild(labelNombre);
        divPatrocinador.appendChild(labelAporte);
        patrocinadoresDiv.appendChild(divPatrocinador);
    });

}

function parseDate(isodate) {
    let fecha = new Date(isodate)
    let year = fecha.getFullYear()
    let month = (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1) : '' + (fecha.getMonth() + 1);
    let day = (fecha.getDay() + 1) < 10 ? '0' + (fecha.getDay() + 1) : '' + (fecha.getDay() + 1);
    return (year + '-' + month + '-' + day);
};
function parseTime(hora) {
    let hour = hora.split(':')[0];
    let minute = hora.split(':')[1].slice(0, 2)
    return (hour + ':' + minute);

};