const saludoTxt = document.getElementById('saludo');
const nameInputContainer = document.getElementById('name-input-container');
const nameInput = document.getElementById('name-input');
const submitButton = document.getElementById('submit-name');

function guardarNombre(){
    const name = nameInput.value.trim();
    if(name.length > 1){
        localStorage.setItem('nombreUsuario', name);
        mostrarNombre(name);
    }
}

function mostrarNombre(name){
    let h=new Date().getHours();
    console.log(h);
    let tDia="";
    if(h<12){
        tDia="dias";
    }else if(h<19){
        tDia="tardes";
    }else{
        tDia="noches";
    }
    saludoTxt.textContent = `Buenas ${tDia}, ${name}`;
    nameInputContainer.style.display = 'none';
}

submitButton.addEventListener('click', guardarNombre);
nameInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        guardarNombre();
    }
});

//comprobar si ya hay un nombre guardado
//si hay un nombre guardado lo muestro
const nombreGuardado = localStorage.getItem('nombreUsuario');
if(nombreGuardado){
    mostrarNombre(nombreGuardado);
}