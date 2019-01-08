'use strict '; 

mostrarActividad();
function mostrarActividad(){
    let perfilActividad = obtenerPerfilActividad();
    let perfilLugar = buscarLugarPorNombre(perfilActividad.nombreLugar);
    // let perfilActividad = obtenerPerfilActividad();
    // let perfilLugar = obtenerLugaresPorUsuario();

    let  foto =  document.querySelector('#foto');
    foto.src = perfilActividad['foto'];


    let nombre = document.querySelector('#nombre');
    nombre.innerHTML = perfilActividad.nombre;

    // let fechaNueva = new Date(perfilActividad.fecha);
    // fechaNueva.innerHTML = fechaNueva.getDate() + "/" + fechaNueva.getMonth() + "/" + fechaNueva.getFullYear();

    let fecha = document.querySelector('#fechaI');
    fecha.innerHTML = parseDate(perfilActividad.fechaInicio);
    let fechaFin = document.querySelector('#fechaF');
    fechaFin.innerHTML = parseDate(perfilActividad.fechaFin);


    let hora = document.querySelector('#horaI');
    hora.innerHTML = parseTime(perfilActividad.horaInicio);
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

    let aorganiza = document.querySelector('#lugar');
    aorganiza.innerHTML = perfilActividad.nombreLugar;
    
    let lugar = document.querySelector('#lugar');
    lugar.innerHTML = perfilActividad.nombreLugar;
    let fotoLugares = document.querySelector('#fotoLugar');
    fotoLugares.src = perfilLugar.foto;
    fotoLugares.classList.add('imgenLugar');
    
};
function agregarPatrocinadores(patrocinadoresDiv, patrocinadoresData) {
    patrocinadoresData.forEach(patrocinadorData => {
        let divPatrocinador = document.createElement("label");
        let labelNombre = document.createElement("label");
        labelNombre.innerText = patrocinadorData.nombrePatrocinador;
        let labelAporte = document.createElement("label");
        labelAporte.innerText = "Aporta: "+patrocinadorData.aportePatrocinador;
        labelAporte.classList.add('ml-3');
        divPatrocinador.appendChild(labelNombre);
        divPatrocinador.appendChild(labelAporte);
        patrocinadoresDiv.appendChild(divPatrocinador);
    });

};

function parseDate (isodate) {
    let fecha = new Date(isodate)
    let year = fecha.getFullYear()
    let month = (fecha.getMonth()+1) < 10? '0'+(fecha.getMonth()+1): ''+(fecha.getMonth()+1);
    let day = (fecha.getDay()+1) < 10? '0'+(fecha.getDay()+1): ''+(fecha.getDay()+1);
    return (year+ '-'+ month+'-'+day);
 };
 function parseTime(hora) {
    let hour = hora.split(':')[0];
    let minute = hora.split(':')[1].slice(0, 2)
    return (hour + ':' + minute);

};
//  function parseTime (hora) {
//        let hour = hora.split(':')[0] < 10? '0'+hora.split(':')[0]: ''+hora.split(':')[0];;
//        let minute =hora.split(':')[1].slice(0,2)
//        return (hour+ ':'+ minute);
      
//  };