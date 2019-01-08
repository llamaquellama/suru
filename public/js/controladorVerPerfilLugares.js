'use strict ';
const inputFiltro = document.querySelector('#txtFiltro');

let mostrarPerfilActivdad = obtenerLugar();
tarjetaPerfilActividad();
inputFiltro.addEventListener('keyup', tarjetaPerfilActividad);


function tarjetaPerfilActividad() {   
   let cardContainer = document.querySelector('#tarjetaPrefilActividad');
   let filtro = inputFiltro.value;
   cardContainer.innerHTML='';
   for (let i = 0; i < mostrarPerfilActivdad.length; i++) {   
      if (mostrarPerfilActivdad[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
         console.log(mostrarPerfilActivdad[i]);
         let card = document.createElement("card");
         card.classList.add("card");
         card.classList.add("col-md-5");
         card.classList.add("px-0");
         card.classList.add("mr-5");
         card.classList.add("my-5");


         let imgContainer = document.createElement("card");

         let imgInterContainer = document.createElement("card");
         imgInterContainer.classList.add("img_container");


         let img = document.createElement("img");
         img.src = mostrarPerfilActivdad[i]['foto'];
         img.classList.add("w-100");
         img.classList.add("heigth");


         let h2 = document.createElement("h2");
         h2.innerHTML = mostrarPerfilActivdad[i]['nombre'];
         h2.classList.add("text-center");
         h2.classList.add("py-3");
      

         let pFecha = document.createElement("p");
         pFecha.innerHTML = 'Fecha de inicio:' + " " + mostrarPerfilActivdad[i]['fecha'];

         let calendario = document.createElement('a');
         calendario.href = '#';
         calendario.classList.add('far');
         calendario.classList.add('fa-calendar-alt');

         let pHora = document.createElement('p');
         pHora.innerHTML = mostrarPerfilActivdad[i]['horaInicio'];


         let reloj = document.createElement('a');
         reloj.href = '#';
         reloj.classList.add('far');
         reloj.classList.add('fa-clock');
         
         let pDescripcionActividad = document.createElement("p");
         pDescripcionActividad.innerHTML = 'Descripción:' + " " + mostrarPerfilActivdad[i]['descripcion'];
         pDescripcionActividad.classList.add("pl-3");
         pDescripcionActividad.classList.add("descripcion");

         let pProvincia = document.createElement("p");
         pProvincia.innerHTML = mostrarPerfilActivdad[i]['nombreProvincia'];

         let pCanton = document.createElement("p");
         pCanton.innerHTML = mostrarPerfilActivdad[i]['nombreCanton'];

         let pDistrito = document.createElement("p");
         pDistrito.innerHTML = mostrarPerfilActivdad[i]['nombreDistrito'];

         let pDireccion = document.createElement("p");
         pDireccion.innerHTML = mostrarPerfilActivdad[i]['direccion'];

         let pCupos = document.createElement("p");
         pCupos.innerHTML = mostrarPerfilActivdad[i]['cupos'];
         pCupos.classList.add("pl-3");

         let pCosto = document.createElement("p");
         pCosto.innerHTML = mostrarPerfilActivdad[i]['costo'];
         pCosto.classList.add("pl-3");

         let butonVer = document.createElement("button");
         let butonTexto = document.createTextNode("Ver más");
         butonVer.appendChild(butonTexto);
         butonTexto.addEventListener("click", function () {
            //reservarCupo(mostrarPerfilActivdad[i]);
         });
         butonVer.classList.add('btn');
         butonVer.classList.add("btn-block");
         butonVer.classList.add('verMas');

         imgInterContainer.appendChild(img);
         imgContainer.appendChild(imgInterContainer);
         card.appendChild(imgContainer);
         card.appendChild(h2);
         card.appendChild(calendario);
         card.appendChild(pFecha);
         card.appendChild(pHora);
         card.appendChild(reloj);
         card.appendChild(pDescripcionActividad);
         card.appendChild(pDireccion);
         card.appendChild(pProvincia);
         card.appendChild(pCanton);
         card.appendChild(pDistrito);
         card.appendChild(pCupos);
         card.appendChild(pCosto);
         card.appendChild(butonVer);
         //    card.appendChild(butonModificar);
         //    card.appendChild(butonEliminar);
         cardContainer.appendChild(card);
      }
   }

};
//////////////////////agregar, es los selects dinamicos//////////
// function parseDate (isodate) {
//    let fecha = new Date(isodate)
//    let year = fecha.getFullYear()
//    let month = (fecha.getMonth()+1) < 10? '0'+(fecha.getMonth()+1): ''+(fecha.getMonth()+1);
//    let day = (fecha.getDay()+1) < 10? '0'+(fecha.getDay()+1): ''+(fecha.getDay()+1);
//    return (year+ '-'+ month+'-'+day);
// };
// function parseTime (hora) {
//       let hour = hora.split(':')[0] < 10? '0'+hora.split(':')[0]: ''+hora.split(':')[0];;
//       let minute =hora.split(':')[1].slice(0,2)
//       return (hour+ ':'+ minute);
     
// };
//////////////////////agregar, es los selects dinamicos//////////

   