'use strict ';

//mostrarListaActvidades();
//mostrarPerfilActivdad = [];
//function tarjetaPerfilActividad(evento){

//    let mostrarPerfilActivdad = trarListaActvidades();

//    let div = document.querySelector('#tarjetaPrefil div');
//    div.innerHTML = '';
//    let index = evento.target.id.split('_')[2];

//    for(let i = 0; i < mostrarPerfilActivdad.length; i++){
//        let general = div.createElement();
        
//        celdaImagenActividad.innerHTML = mostrarPerfilActivdad[i]['imagen'];
//        celdaNombreActividad.innerHTML = mostrarPerfilActivdad[i]['nombre'];

//        console.log('Object: ', mostrarPerfilActivdad[index]['imagen']);
//        console.log('Nombre: ', mostrarPerfilActivdad[index]['nombre']);
//    }
    

//};

function tarjetaPerfilActividad(evento){
    let mostrarPerfilActivdad = mostrarListaActvidades()
    let cardContainer = document.querySelector('#tarjetaPrefilActividad');
    let index = evento.target.id.split('_')[2];

    if(cardContainer == undefined) {
       return;
    } else {
       cardContainer.innerHTML = '';
    }

   if (mostrarPerfilActivdad == [])
       return;

   for(let i = 0; i < mostrarPerfilActivdad.length; i++){
           console.log(mostrarPerfilActivdad[index]);

           let card = document.createElement("div");
           card.classList.add("card");

           let imgContainer = document.createElement("div");


           let imgInterContainer = document.createElement("div");
           imgInterContainer.classList.add("img_container");

           let img = document.createElement("img");
           img.innerHTML = mostrarPerfilActivdad[index]['imagen'];
           img.alt = "Foto de la actividad";


           let h2 = document.createElement("h2");
           h2.innerHTML = mostrarPerfilActivdad[index]['nombre'];

           let pDescripcionActividad = document.createElement("p");
           pDescripcionActividad.innerHTML = mostrarPerfilActivdad[index]['descripcion'];

           let pCupos = document.createElement("p");
           pCupos.innerHTML = mostrarPerfilActivdad[index]['cupos'];

           let pCosto = document.createElement("p");
           pCosto.innerHTML = mostrarPerfilActivdad[index]['costoss'];

           let butonReservar = document.createElement("button");
           let butonTexto = document.createTextNode("Reservar");
           butonReservar.appendChild(butonTexto);
           butonTexto.addEventListener("click", function(){
               //reservarCupo(mostrarPerfilActivdad[i]);
           });
           //buttonScore.classList.add("score");

           imgInterContainer.appendChild(img);
           imgContainer.appendChild(imgInterContainer);
           card.appendChild(imgContainer);
           card.appendChild(h2);
           pDescripcionActividad.appendChild(p);
           pCupos.appendChild(cupos);
           pCosto.appendChild(costoss);
           butonReservar.appendChild(button);
           cardContainer.appendChild(card);
       
   }

};
