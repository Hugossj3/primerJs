//gojo,solo,kirito,sugo
const principal = document.getElementById("principal");
const fotos = document.querySelectorAll(".fotos");
const modal = document.getElementById("imagenModal");
const modalImg = document.querySelector(".modal-image");
const closeBtn = document.querySelector(".close");
let tipo = "normal";
console.log(closeBtn);

// function accionNormal(){
//     fotos.forEach(foto => {

//         foto.addEventListener("click", function (e) {
//             let texto=document.getElementById("aviso");
//             if(texto!=null){
//                 texto.remove();
//             }
//             let imagen = e.currentTarget.src;
//             principal.src = imagen;
//             principal.alt = "imagen seleccionada";
//         });
//     });
// }

// function accionModal(){
//     fotos.forEach(foto=>{

//         foto.addEventListener("click",()=>{
//             modal.style.display="block";
//             modalImg.src=foto.getAttribute("data-full");
//             modalImg.alt=foto.alt;
//         })
//     });
// }

closeBtn.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target.classList.contains("modal-content")) {
        modal.style.display = "none";
    }
}

document.getElementById("cuadro").addEventListener("click", function () {
    setTipo("normal");
});
document.getElementById("vModal").addEventListener("click", function () {
    setTipo("modal");
});

function setTipo(tipe) {
    tipo = tipe;
    console.log(tipo);
}

fotos.forEach(foto => {
    if (tipo === "normal") {
        foto.addEventListener("click", function (e) {
            let texto = document.getElementById("aviso");
            if (texto != null) {
                texto.remove();
            }
            let imagen = e.currentTarget.src;
            principal.src = imagen;
            principal.alt = "imagen seleccionada";
        });
    } else {
        foto.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = foto.getAttribute("data-full");
            modalImg.alt = foto.alt;
        })
    }
})
// switch(tipo){
//     case "normal":
//         accionNormal();
//         break;
//     case "modal":
//         accionModal();
//         break;
//     default:
//         accionNormal();
// }




