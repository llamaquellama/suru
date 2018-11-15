'use strict ';

obtenerUsuario();

function obtenerUsuario() {
    let usuario = obtenerPerfilUsuario();

    //if(usuario.tipo == '1'){
    let inputNombreComercial = document.querySelector('#txtNombreComercial');
   

    inputNombreComercial.innerHTML = usuario.nombreComercial; 

    //    inputNombre2FotoPerfil.innerHTML = usuario.nombre2;
    //     inputApellido1FotoPerfil.innerHTML = usuario.apellido1;
    //    inputApellido2FotoPerfil.innerHTML = usuario.apellido2;


    let txtNombreUsuario = document.querySelector('#txtNombreUsuario');
    txtNombreUsuario.innerHTML = 'Usuario:'+ ' ' + usuario.nombreUsuario;
    

    let txtrazonSocial = document.querySelector('#txtrazonSocial');
    txtrazonSocial.innerHTML = 'Razón social:' + " " + usuario.nombreUsuario;

    // let txtnombreComercial = document.querySelector('#txtNombreComercial');
    // txtnombreComercial.innerHTML = 'Nombre comercial:' + " " + usuario.nombreComercial;

    let txtTelefonoEmpresa = document.querySelector('#txtTelefonoEmpresarial');
    txtTelefonoEmpresa.innerHTML = 'Teléfono empresarial:' + " " + usuario.telEmpresa;

    let txtcorreoEmpresarial = document.querySelector('#txtCorreoempresarial');
    txtcorreoEmpresarial.innerHTML = 'Correo empresarial:' + " " + usuario.correoEmpresa;

    let txtcorreoEmpresarial = document.querySelector('#txtCedulaEmpresarial');
    txtcorreoEmpresarial.innerHTML = 'Cédula jurídica:' + " " + usuario.id;

    
/////

    let nombreA = document.querySelector('#txtnombre1');
    let nombreB = document.querySelector('#txtnombre2');
    let apellidoA = document.querySelector('#txtapellido1');
    let apellidoB = document.querySelector('#txtapellido2');


    nombreA.innerHTML = usuario.nombreAContacto + " " + usuario.nombreBContacto + " " + usuario.apellidoAContacto + " " + usuario.apellidoBContacto;

    let txtcorreocontacto = document.querySelector('#txtCorreoContacto');
    txtcorreocontacto.innerHTML = 'Correo contacto:' + " " + usuario.correoContacto;

    let txtTelContacto = document.querySelector('#txtTelefonoContacto');
    txtTelContacto.innerHTML = 'Teléfono contacto:' + " " + usuario.telContacto;

    //}

    // let inputNombre2FotoPerfil = document.querySelector('#txtnombre2');
    // let inputApellido1FotoPerfil = document.querySelector('#txtapellido1');
    // let inputApellido2FotoPerfil = document.querySelector('#txtapellido2');
};