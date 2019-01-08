// 'use strict';

// let inputFiltro = document.querySelector('#txtFiltro');
// let listaLugares = obtenerLugaresPorUsuario();

// mostrarListaLugares();
// let arregloLugaresUsuario = obtenerLugaresPorUsuario();
// ;

// inputFiltro.addEventListener('keyup', mostrarListaLugares);
// function mostrarListaLugares() {
//     let cardContainer = document.querySelector('#deck-lugares');
//     let filtro = inputFiltro.value;
//     cardContainer.innerHTML = '';
//     for (let i = 0; i < listaLugares.length; i++) {
//         if (listaLugares[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {

//         // creación del card 
//         let colLugar = document.createElement('div');
//         colLugar.classList.add('col-md-4');

//         let cardLugar = document.createElement('div');
//         cardLugar.classList.add('card');
//         colLugar.appendChild(cardLugar);

//         let imagenLugar = document.createElement('img');
//         imagenLugar.src = listaLugares[i]['foto'];
//         imagenLugar.classList.add('card-img-top');
//         cardLugar.appendChild(imagenLugar);

//         // Div Información Lugar
//         let divCardBody = document.createElement('div');
//         divCardBody.classList.add('card-body');


//         let nombreLugar = document.createElement('h5');
//         nombreLugar.classList.add('card-title');
//         nombreLugar.innerText = listaLugares[i]['nombre'];
//         divCardBody.appendChild(nombreLugar);

//         let categoriaLugar = document.createElement('p');
//         categoriaLugar.classList.add('mt-3');
//         categoriaLugar.classList.add('card-text');
//         categoriaLugar.innerText = listaLugares[i]['categoria'];
//         divCardBody.appendChild(categoriaLugar);

//         let descripcionLugar = document.createElement('p');
//         descripcionLugar.classList.add('mt-3');
//         descripcionLugar.classList.add('card-text');
//         descripcionLugar.innerText = listaLugares[i]['descripcion'];
//         divCardBody.appendChild(descripcionLugar);

    
//         // Card footer boton
//         let divCardFooter = document.createElement('div');
//         divCardFooter.classList.add('card-footer');

//         let facebookLugar = document.createElement('a');
//         facebookLugar.href = listaLugares[i]['facebook'];
//         facebookLugar.classList.add('fab');
//         facebookLugar.classList.add('fa-facebook-f');
//         facebookLugar.classList.add('mt-3');
//         facebookLugar.classList.add('px-3');
//         divCardBody.appendChild(facebookLugar);

//         let instagramLugar = document.createElement('a');
//         instagramLugar.href = listaLugares[i]['instagram'];
//         instagramLugar.classList.add('fab');
//         instagramLugar.classList.add('fa-instagram');
//         instagramLugar.classList.add('mt-3');
//         instagramLugar.classList.add('card-text');
//         divCardBody.appendChild(instagramLugar);

        
//         // let boton = document.createElement('button');
//         // boton.type = 'button';
//         // boton.textContent = 'Seguir';
//         // boton.addEventListener('click', function () {
//         //     agregarLugarArreglo(listaLugares[i]);
//         // })
        
//         divCardFooter.appendChild(facebookLugar);
//         divCardFooter.appendChild(instagramLugar);

//         cardLugar.appendChild(divCardBody);
//         cardLugar.appendChild(divCardFooter);
//         cardContainer.appendChild(colLugar);
//         }
//     }
// };


// // Obtener lista lugares seguidos

// function getListarLugaresSeguidos() {

//     let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));

//     if (usuarioInfo.lugares == undefined) {
//         usuarioInfo.lugares = [];
//     } else {
//         usuarioInfo.lugares = JSON.parse(usuarioInfo.lugares);
//     }
//     return usuarioInfo.lugares;
// }

// function agregarLugarArreglo(infoLugar) {

//     arregloLugaresUsuario.push(infoLugar);
//     let usuarioInfo = obtenerUsuarioPorNombre(sessionStorage.getItem('nombreUsuario'));
//     var arregloString = JSON.stringify(arregloLugaresUsuario);
//     actualizarLugares(usuarioInfo.nombreUsuario, arregloString);
// }


// //let nombreUsuarioSession = sessionStorage.getItem('nombreUsuario');

'use strict';

let listaLugares = obtenerLugaresPorUsuario();
//  let listaLugar = obtenerLugar();

mostrarListaLugares();
function mostrarListaLugares() {
    let cardContainer = document.querySelector('#deck-lugares');
    cardContainer.innerHTML = '';

    for (let i = 0; i < listaLugares.length; i++) {

        // creación del card 
        let colLugar = document.createElement('div');
        colLugar.classList.add('col-md-4');

        let cardLugar = document.createElement('div');
        cardLugar.classList.add('card');
        colLugar.appendChild(cardLugar);

        let imagenLugar = document.createElement('img');
        imagenLugar.src = listaLugares[i]['foto'];
        imagenLugar.classList.add('card-img-top');
        cardLugar.appendChild(imagenLugar);

        // Div Información Lugar
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');


        let nombreLugar = document.createElement('h5');
        nombreLugar.classList.add('card-title');
        nombreLugar.innerText = listaLugares[i]['nombre'];
        divCardBody.appendChild(nombreLugar);

        let categoriaLugar = document.createElement('p');
        categoriaLugar.classList.add('mt-3');
        categoriaLugar.classList.add('card-text');
        categoriaLugar.innerText = listaLugares[i]['categoria'];
        divCardBody.appendChild(categoriaLugar);

        let descripcionLugar = document.createElement('p');
        descripcionLugar.classList.add('mt-3');
        descripcionLugar.classList.add('card-text');
        descripcionLugar.innerText = listaLugares[i]['descripcion'];
        divCardBody.appendChild(descripcionLugar);

    
        // Card footer boton
        let divCardFooter = document.createElement('div');
        divCardFooter.classList.add('card-footer');

        let facebookLugar = document.createElement('a');
        facebookLugar.href = listaLugares[i]['facebook'];
        facebookLugar.classList.add('fab');
        facebookLugar.classList.add('fa-facebook-f');
        facebookLugar.classList.add('mt-3');
        facebookLugar.classList.add('px-3');
        divCardBody.appendChild(facebookLugar);

        let instagramLugar = document.createElement('a');
        instagramLugar.href = listaLugares[i]['instagram'];
        instagramLugar.classList.add('fab');
        instagramLugar.classList.add('fa-instagram');
        instagramLugar.classList.add('mt-3');
        instagramLugar.classList.add('card-text');
        divCardBody.appendChild(instagramLugar);

        let botonEliminar = document.createElement('a');
        botonEliminar.href = '#';
        botonEliminar.classList.add('far');
        botonEliminar.classList.add('fa-trash-alt');
        botonEliminar.classList.add('estiloFas');
        botonEliminar.classList.add('mr-4');
        botonEliminar.classList.add('float-right');
        botonEliminar.classList.add('mt-3');
        botonEliminar.dataset.id_lugar= listaLugares[i]['_id'];
        botonEliminar.addEventListener('click', confirmarBorrado);

        let botonEditar = document.createElement('a');
        botonEditar.href = '#';
        botonEditar.classList.add('far');
        botonEditar.classList.add('fa-edit');
        botonEditar.classList.add('estiloFas');
        botonEditar.classList.add('float-right');
        botonEditar.classList.add('mt-3');
        botonEditar.dataset.id_lugar= listaLugares[i]['_id'];
        botonEditar.addEventListener('click', mostrarDatosEdicion);
        
        divCardFooter.appendChild(facebookLugar);
        divCardFooter.appendChild(instagramLugar);
        divCardFooter.appendChild(botonEditar);
        divCardFooter.appendChild(botonEliminar);

        cardLugar.appendChild(divCardBody);
        cardLugar.appendChild(divCardFooter);
        cardContainer.appendChild(colLugar);
    }
};

function mostrarDatosEdicion(){
    let id_lugar = this.dataset.id_lugar;
    localStorage.setItem('lugar', id_lugar);
    window.location.href = 'modificarlugarEmpresario.html';
}

function confirmarBorrado(){
    let id_lugar = this.dataset.id_lugar;
    swal({
        title: '¿Está seguro que desea borrar el lugar?',
        text: "Este proceso no se puede revertir",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!'
      }).then((result) => {
        if (result.value) {
            borrarLugar(id_lugar); 
            listaLugares = obtenerLugaresPorUsuario();
            mostrarListaLugares();           
            swal({
                title:'Lugar borrado',
                text: 'El lugar ha sido borrado con éxito',
                type:'success'
            })
        }
      })
};