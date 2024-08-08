let pass="";
const modal=document.querySelector(".modal");
const closeBtn=document.querySelector(".close");

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
    
    let passw=document.getElementById("contra");
    let ePass=document.getElementById("contraError");
    pass=passw.value;

    if(passw.value.length<6){
        esCorrecto=false;
        ePass.textContent="Contraseña demasiado corta";
        passw.classList.add("error-input");
        passw.classList.remove("sucess");
    }else{
        ePass.textContent="";
        passw.classList.add("sucess");
        passw.classList.remove("error-input");
    }

    return esCorrecto;
}
function validarConfi() {
    let esCorrecto=true;

    let confi=document.getElementById("cContra");
    let eConfi=document.getElementById("2contraError");

    if(confi.value!==pass){
        esCorrecto=false;
        eConfi.textContent="Las contraseñas no coinciden";
        confi.classList.add("error-input");
        confi.classList.remove("sucess");
    }else{
        eConfi.textContent="";
        confi.classList.add("sucess");
        confi.classList.remove("error-input");
    }

    return esCorrecto;
}

function validarFono(){
    let esCorrecto=true;
    let tele=document.getElementById("phone").value;
    let eTele=document.getElementById("phoneError");
    const regexPhone=/^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;

    if(!regexPhone.test(tele)){
        eTele.textContent="El telefono introducido no es valido"
        esCorrecto=false;
        document.getElementById("phone").classList.add("error-input");
        document.getElementById("phone").classList.remove("sucess");
    }else{
        eTele.textContent="";
        document.getElementById("phone").classList.add("sucess");
        document.getElementById("phone").classList.remove("error-input");
    }

    return esCorrecto;
}

function validarFecha(){
    let esCorrecto=true;
    let naci=document.getElementById("fecha").value;
    let eNaci=document.getElementById("fechaError");
    let fechaMin=new Date(
        new Date().getFullYear()-120,
        new Date().getMonth(),
        new Date().getDay()
    );
    let fechaUsu=new Date(naci);

    if(fechaUsu>new Date() || fechaUsu<fechaMin){
        eNaci.textContent="Fecha no valida";
        document.getElementById("fecha").classList.add("error-input");
        document.getElementById("fecha").classList.remove("success");
        esCorrecto=false;
    }else{
        eNaci.textContent="";
        document.getElementById("fecha").classList.add("success");
        document.getElementById("fecha").classList.remove("error-input");
    }

    console.log(fechaMin);
    
    return esCorrecto;
}

closeBtn.onclick=()=>{
    modal.style.display="none";
}

document.getElementById("epolitica").addEventListener("click",function(){
    modal.style.display="block";
});




window.onclick=(event)=>{
    if(event.target.classList.contains("modal-content")){
        modal.style.display="none";
    }
}
document.getElementById("contra").addEventListener("input",validarContra);
document.getElementById("cContra").addEventListener("input",validarConfi);

document.getElementById("registro").addEventListener("submit",
    function (event) {
        event.preventDefault();
        
        let nVal=validarNombre();
        let eVal=validarCorreo();
        let pVal=validarContra();
        let cVal=validarConfi();
        let fVal=validarFecha();
        let tVal=validarFono();
        let obligao=document.getElementById("robarDatos");

        if(!obligao.checked){
            alert("Tiene que aceptar los terminos condiciones. Papi aqui tenemos que comer de algo");
        }else if(nVal && eVal && pVal && cVal && fVal && tVal){
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