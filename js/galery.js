//gojo,solo,kirito,sugo
const principal = document.getElementById("principal");
const fotos = document.querySelectorAll(".fotos");
fotos.forEach(foto => {
    foto.addEventListener("click", function (e) {
        let texto=document.getElementById("aviso");
        if(texto!=null){
            texto.remove();
        }
        let imagen = e.currentTarget.src;
        principal.src = imagen;
        principal.alt = "imagen seleccionada";
    });
});