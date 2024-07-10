// Función para abrir/cerrar el Sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px" || sidebar.style.left === "") ? "-300px" : "0px";
}

// Función para cerrar el Sidebar al hacer clic afuera
window.onclick = function(event) {
    var sidebar = document.getElementById("sidebar");
    if (event.target == sidebar) {
        sidebar.style.left = "-300px";
    }
}

// Función para abrir/cerrar el video en Picture-in-Picture
function toggleVideo() {
    var video = document.createElement('video');
    video.src = 'ruta/a/tu/video.mp4'; // URL de tu video local o de YouTube
    video.autoplay = true;
    video.controls = true;
    video.style.position = 'fixed';
    video.style.bottom = '20px';
    video.style.right = '20px';
    video.style.width = '300px'; // Tamaño del video
    document.body.appendChild(video);

    video.addEventListener('enterpictureinpicture', function(event) {
        console.log('Ingresando a modo Picture-in-Picture');
    });

    video.addEventListener('leavepictureinpicture', function(event) {
        console.log('Saliendo de modo Picture-in-Picture');
    });

    if (document.pictureInPictureEnabled) {
        video.requestPictureInPicture();
    } else {
        console.log('El modo Picture-in-Picture no está soportado');
    }
}

function sendwhatsapp(){
    var phonenumber = "+569";

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var country = document.querySelector(".country").value;
    var message = document.querySelector(".message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Country:* "+country+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
  }