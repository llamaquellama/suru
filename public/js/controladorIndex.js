' use stric ';

const botonesSuruIndex1 = document.querySelector('#bt1');
const botonesSuruIndex2 = document.querySelector('#bt2');
const botonesSuruIndex3 = document.querySelector('#bt3');
const botonesSuruIndex4 = document.querySelector('#bt4');
const botonesSuruIndex5 = document.querySelector('#bt5');
const botonesSuruIndex6 = document.querySelector('#bt6');


botonesSuruIndex1.addEventListener('click', mostrarInvitacion);
botonesSuruIndex2.addEventListener('click', mostrarInvitacion);
botonesSuruIndex3.addEventListener('click', mostrarInvitacion);
botonesSuruIndex4.addEventListener('click', mostrarInvitacion);
botonesSuruIndex5.addEventListener('click', mostrarInvitacion);
botonesSuruIndex6.addEventListener('click', mostrarInvitacion);

function mostrarInvitacion(event){

    event.returnValue = false
    swal({
        title:'<strong>Bienvenido</strong>',
        text: 'Regístrate y ',
        html:'Descubre Costa Rica con nosotros, ' +
    '<a href="registroVisitantes.html" >Regístrate</a> ' +
    'y sé parte de <b>Suru</b>',
        confirmButtonText: 'Ahora no'
      });
}
