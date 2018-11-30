'use strict ';

obtenerUsuario();

function obtenerUsuario() {
    let usuario = obtenerPerfilUsuario();

    //if(usuario.tipo == '1'){
    let inputNombre1FotoPerfil = document.querySelector('#txtnombre1');
    let inputNombre2FotoPerfil = document.querySelector('#txtnombre2');
    let inputApellido1FotoPerfil = document.querySelector('#txtapellido1');
    let inputApellido2FotoPerfil = document.querySelector('#txtapellido2');



    inputNombre1FotoPerfil.innerHTML = usuario.nombre1 + " " + usuario.nombre2 + " " + usuario.apellido1 + " " + usuario.apellido2;


    //    inputNombre2FotoPerfil.innerHTML = usuario.nombre2;
    //     inputApellido1FotoPerfil.innerHTML = usuario.apellido1;
    //    inputApellido2FotoPerfil.innerHTML = usuario.apellido2;


    let txtNombreUsuario = document.querySelector('#txtNombreUsuario');
    txtNombreUsuario.innerHTML = 'Usuario:'+ ' ' + usuario.nombreUsuario;

    let txtcorreo = document.querySelector('#txtCorreo');
    txtcorreo.innerHTML = 'Correo:' + " " + usuario.correo;

    let txtcedula = document.querySelector('#txtCedula');
    txtcedula.innerHTML = 'Cédula:' + " " + usuario.id;

    let txtFechaNac = document.querySelector('#txtFechaNac');
    txtFechaNac.innerHTML = 'Fecha nacimiento:' + " " + usuario.fechaNacimiento.getDay()+'-'+usuario.fechaNacimiento.getMonth()+'-'+usuario.fechaNacimiento.getYear();

    let txtEdad = document.querySelector('#txtEdad');
    txtEdad.innerHTML = 'Edad:' + " " + usuario.edad;

    //}

    
};