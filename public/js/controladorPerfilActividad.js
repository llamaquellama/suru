// let sTitulo = 'FableHaven';
// let sAutor = 'Brandon Mull';
// let dFecha = 'March 19, 2010';
// let sDescripcion = 'After centuries of plotting, the Sphinx—leader of the Society of the Evening Star—is after the final artifacts- the Chronometer and the Translocator -needed to open the great demon prison, Zzyxx. If the legendary prison is opened, a tide of evil is certain to usurp control of the world. In an effort to intercept the final artifacts, Kendra, Seth and the Knights of the Dawn race to strange and exotic preserves across the globe. The stakes have never been higher. The risks have never been more deadly. In this explosive series finale, allegiances will be confirmed and secrets revealed as the forces of light and darkness collide in a desperate, climactic battle to control the keys to the demon prison.';
// let sUrlImg = 'img/fable5.jpg';
// let contenedorGeneral = document.querySelector('#divLibros');

// for(let i = 0; i < 6; i++){
    
//     //1. creación del card para libro 
//     let divLibro = document.createElement('div');
//     divLibro.classList.add('cardLibro');
//     contenedorGeneral.appendChild(divLibro);
    
    
    
//     //2. Creación de la imagen
//     let contenedorImagen = document.createElement('div');
//     contenedorImagen.classList.add('imgContainer');
    
//     let imgLibro = document.createElement('img');
//     imgLibro.alt = 'Imagen del libro';
//     imgLibro.src = sUrlImg;
//     contenedorImagen.appendChild(imgLibro);
//     divLibro.appendChild(contenedorImagen);
    
    
//     //Creacion del contenedor de titulo y subtitulo
//     let divEncabezado = document.createElement('header');
//     //3. Creación del título
//     let tituloLibro = document.createElement('h2');
//     let textoTitulo = document.createTextNode(sTitulo);
//     tituloLibro.appendChild(textoTitulo);
    
//     divEncabezado.appendChild(tituloLibro);
    
    
//     //4. Creación de la fecha
//     let fechaLibro = document.createElement('h3');
//     let textoFecha = document.createTextNode(dFecha);
//     fechaLibro.appendChild(textoFecha);
//     divEncabezado.appendChild(fechaLibro);
    
//     //Agregar el divEncabezado al divLibro
//     divLibro.appendChild(divEncabezado);
    
//     //clearFix
//     let divClearFix =document.createElement('div');
//     divClearFix.classList.add('clearFix');
//     divLibro.appendChild(divClearFix);
    
//     //4. Creación de la descripción
//     let descripcionLibro = document.createElement('p');
//     let textoDescripcion = document.createTextNode(sDescripcion);
//     descripcionLibro.appendChild(textoDescripcion);
//     divLibro.appendChild(descripcionLibro);
    
//     //5. Creación del enlace ver más
//     let enlaceVerMas = document.createElement('a');
//     enlaceVerMas.href = '#';
//     let textoEnlace =  document.createTextNode('Ver más');
//     enlaceVerMas.appendChild(textoEnlace);
//     divLibro.appendChild(enlaceVerMas);
    
// }

'use strict '; 
mostrarActividad();


function mostrarActividad(){

    let perfilActividad = obtenerPerfilActividad();


    let  foto =  document.querySelector('#foto');

    foto.classList.add('imagenTabla');
        
        if(perfilActividad['_d']){
            foto.src = perfilActividad['_d'];
        }else{
            foto.src = 'img/iconoPatrocinador.png';
        }


    let nombre = document.querySelector('#nombre');
    nombre.innerHTML = perfilActividad.nombre;

    let fecha = document.querySelector('#fecha');
    fecha.innerHTML = perfilActividad.fecha;

    let hora = document.querySelector('#hora');
    hora.innerHTML = perfilActividad.hora;

    let costo = document.querySelector('#costo');
    costo.innerHTML = perfilActividad.costo;

    let cupos = document.querySelector('#cupos');
    cupos.innerHTML = perfilActividad.cupos;

    let provincia = document.querySelector('#provincia');
    provincia.innerHTML = perfilActividad.provincia;

    let distrito = document.querySelector('#distrito');
    distrito.innerHTML = perfilActividad.distrito;

    let canton = document.querySelector('#canton');
    canton.innerHTML = perfilActividad.canton;

    let descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = perfilActividad.descripcion;

    let patrocinadores = document.querySelector('#patrocinadores');
    patrocinadores.innerHTML = perfilActividad.patrocinadores;
    
};
  