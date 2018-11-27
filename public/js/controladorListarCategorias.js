' use strict '

const inputFiltro =  document.querySelector('#txtFiltro');


let listaCategorias = listarCategorias();

mostrarListaCategoria();
inputFiltro.addEventListener('keyup',mostrarListaCategoria);

function mostrarListaCategoria(){
    

    let  tbody = document.querySelector('#tablaListarCategorias tbody');
    let filtro = inputFiltro.value;
    tbody.innerHTML = '';
    for(let i = 0; i < listaCategorias.length ; i++){
        if(listaCategorias[i]['nombreCategoria'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

            let celdaImagen= fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
            
            celdaNombre.innerHTML = listaCategorias[i]['nombreCategoria'];
            celdaDescripcion.innerHTML = listaCategorias[i]['descripcionCategoria'];
    
            let  iconoCategoria =  document.createElement('img');
    
            iconoCategoria.classList.add('imagenTabla');
            
            if(listaCategorias[i]['iconoCategoria']){
                iconoCategoria.src = listaCategorias[i]['iconoCategoria'];
            }else{
                iconoCategoria.src = 'img/iconoPatrocinador.png';
            }
    
            celdaImagen.appendChild(iconoCategoria)
        }
        
    }
   
};