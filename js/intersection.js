const imagen1 = document.getElementById('img1');
const imagen2 = document.getElementById('img2');


console.log("peo");


const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '100px',
    threshold: 1
});

observador.observe(imagen1);
observador.observe(imagen2);

function cargarImagen(entradas, observador){
    entradas.forEach(entrada => {
        console.log(entrada.isIntersecting);
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
    });
}

