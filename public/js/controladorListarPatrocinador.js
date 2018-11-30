' use strict '
const inputFiltro =  document.querySelector('#txtFiltro');


let listarPatrocinadores = obtenerPatrocinador();

inputFiltro.addEventListener('keyup',mostrarListaPatrocinador);

mostrarListaPatrocinador();

function mostrarListaPatrocinador(){
    
    let  tbody = document.querySelector('#tablaListarPatrocinador tbody');
    let filtro = inputFiltro.value;
    tbody.innerHTML = '';
    for(let i = 0; i < listarPatrocinadores.length ; i++){
        if(listarPatrocinadores[i]['nombrePatrocinador'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tbody.insertRow();

        let celdaImagenPatrocinador = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaIndustri = fila.insertCell();
        
        
        celdaNombre.innerHTML = listarPatrocinadores[i]['nombrePatrocinador'];
        celdaIndustri.innerHTML = listarPatrocinadores[i]['tipoIndustria'];

        let  fotoPatrocinador =  document.createElement('img');

        fotoPatrocinador.classList.add('imagenTabla');
        
        if(listarPatrocinadores[i]['fotoPatrocinador']){
            fotoPatrocinador.src = listarPatrocinadores[i]['fotoPatrocinador'];
        }else{
            fotoPatrocinador.src = 'img/iconoPatrocinador.png';
        }

        celdaImagenPatrocinador.appendChild(fotoPatrocinador)

        }
        
    }
   
};