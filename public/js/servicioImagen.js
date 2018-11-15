'use strict';
$(function () {


    // Upload button
    let uploadButton = $('#btnSubirImagen');

    // Upload button event
    uploadButton.on('click', function (e) {



    });
})

function processImage(id) {
    let options = {
        clientePista: true,
    };
    return $.cloudinary.url(id, options);
}
function pasarImagen() {
    let imagenUrl = '';
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'mantiscenfo', api_key: '644682586588745' });

    // Initiate upload
    // cloudinary.openUploadWidget({ cloud_name: 'mantiscenfo', sources: [ 'local', 'url', 'camera', 'image_search', 
    //                      'facebook', 'dropbox', 'google_photos' ], upload_preset: 'myuploadpreset'}, 
    //           function(error, result) { console.log(error, result) });
    cloudinary.openUploadWidget({ cloud_name: 'mantiscenfo', upload_preset: 'mantis', tags: ['cgal'] },
        function (error, result) {
            if (error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
            console.log(id);
            imagenUrl = 'https://res.cloudinary.com/mantiscenfo/image/upload/' + id;
            document.querySelector('#imagenPrevista').src = imagenUrl;
            console.log(imagenUrl);
        });
}