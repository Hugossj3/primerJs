let pass="";

function validarNombre() {
    let nombre=document.getElementById("nombre").value;
    let eNombre=document.getElementById("nombreError");
    if(nombre.trim().length < 3){
        eNombre.textContent="El nombre tiene que tener al menos 3 caracteres";
        return false;
    }else{
        eNombre.textContent="";
        return true;
    }
    
}
function validarCorreo() {
    let esCorrecto=true;
    let email=document.getElementById("correo").value;
    let eCorreo=document.getElementById("correoError");
    let eRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!eRegex.test(email.trim())){
        eCorreo.textContent="El email introducido no es valido"
        esCorrecto=false;
    }else{
        eCorreo.textContent="";
    }
    return esCorrecto;
}
function validarContra() {
    let esCorrecto=true;
    
    let passw=document.getElementById("contra").value;
    let ePass=document.getElementById("contraError");
    pass=passw

    if(passw.length<6){
        esCorrecto=false;
        ePass.textContent="Contraseña demasiado corta";
    }else{
        ePass.textContent="";
    }

    return esCorrecto;
}
function validarConfi(param) {
    let esCorrecto=true;

    let confi=document.getElementById("cContra").value;
    let eConfi=document.getElementById("2contraError");

    if(confi!==param){
        esCorrecto=false;
        eConfi.textContent="Repita la contraseña";
    }else{
        eConfi.textContent="";
    }

    return esCorrecto;
}

document.getElementById("registro").addEventListener("submit",
    function (event) {
        event.preventDefault();
        
        let nVal=validarNombre();
        let eVal=validarCorreo();
        let pVal=validarContra();
        let cVal=validarConfi(pass);


        if(nVal && eVal && pVal && cVal){
            alert("Formulario enviado con exito");
            this.reset();
        }else{
            alert("los datos pasados no son correctos");
        }
    }
)
// console.log(event);
// console.log("tipo "+event.type);
// console.log("tarjet "+event.target);
// console.log("timestamp "+event.timeStamp);
// console.log("istrusted "+event.isTrusted);
//cfjdfhjddfsd