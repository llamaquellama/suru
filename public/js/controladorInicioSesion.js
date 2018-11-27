'use strict ';

const botonIniciar = document.querySelector('#ingresar');
const campoUsuario = document.querySelector('#nombreUsuario');
const campoContrasenna = document.querySelector('#contrasenna');
const errorUsuario = document.querySelector('#errorUsuario');
const errorContrasenna = document.querySelector('#errorContrasena');

// function obtenerDatos(event){
//     let usuario = campoUsuario.value;
//     let contrasenna = campoContrasenna.value;

//     let listarUsuario = validar(usuario, contrasenna);
//     let usuarioAceptado = false;

//     event.returnValue = false;

//     if(listarUsuario){

//     }else{
//         usuarioAceptado =  validarCredenciales(usuario, contrasenna)
        
//         if(usuarioAceptado.tipo == '3'){ 
//             window.location.href = 'perfilUsuarioAdministrador.html';
//         }else{
//             if(usuarioAceptado.tipo == '2'){
//                 window.location.href = 'perfilUsuarioEmpresarioDuenno.html';
//             }else{
//                 if(usuarioAceptado.tipo == '1'){
//                     window.location.href = 'perfilUsuarioCliente.html';  
//                 }else{
//                     swal({
//                         type: 'error',
//                         text: 'Usario o contraseña inválidos',
//                         confirmButtonText: 'Entendido'
//                     });
//                     campoUsuario.value = '';
//                     campoContrasenna.value = '';
//                 }
            
//             }
//         };
    
//     }
// };
function obtenerDatos(event){
    let usuario = campoUsuario.value;
    let contrasenna = campoContrasenna.value;

    let listarUsuario = validar(usuario, contrasenna);
    let usuarioAceptado = false;

    event.returnValue = false;

    if(listarUsuario){

    }else{
        usuarioAceptado =  validarCredenciales(usuario, contrasenna)
        if(usuarioAceptado){ 
            switch(usuarioAceptado.tipo){
                 case '3':
                 window.location.href = 'perfilUsuarioAdministrador.html';
                 break;

                 case '2':
                 window.location.href = 'perfilUsuarioEmpresarioDuenno.html';
                 break;

                 case '1':
                 window.location.href = 'perfilUsuarioCliente.html';
                 break;

                 default:
                 break;
            }         
           

        }else{
            swal({
                type: 'error',
                text: 'Usuario o contraseña inválidos',
                confirmButtonText: 'Entendido'
            });
            campoUsuario.value = '';
            campoContrasenna.value = '';
        }
    }
    
};
function validar(usuario, contrasenna){
    let error = false;
    if(usuario == ''){
        error = true;
        campoUsuario.classList.add('error');
        errorUsuario.innerText = 'El nombre de usuario no puede estar vacío'
    }else{
        campoUsuario.classList.remove('error');
    }
    
    if(contrasenna == ''){
        error = true;
        campoContrasenna.classList.add('error');
        errorContrasenna.innerText = 'La contraseña no puede estar vacía'
    }else{
        campoContrasenna.classList.remove('error');
    }


    return error;
}


botonIniciar.addEventListener('click', obtenerDatos);
