function calcularEdad() {
    let nombre = document.getElementById("nombreMascota").value;
    let edad = document.getElementById("edadMascota").value;
    //edad=Number(edad);
    edad = parseInt(edad);
    let mensaje="";

    if (edad>0 && edad<50) {
        
        let edadHumana = edad * 7;
        mensaje = `${nombre} tiene ${edad} años que equivalen a ${edadHumana} años humanos`;
        document.getElementById("resultadoMascota").textContent = mensaje;
    } else {
        alert("Los datos introducidos son incorrectos");
    }


}
function calcularPrecio(){
    let nombre=document.getElementById("nombre").value;
    let importe=document.getElementById("importe").value;
    let reducido=document.getElementById("reducido").checked;
    let iva=0;
    //edad=Number(edad);

    if(reducido){
        iva=1.1;
    }else{
        iva=1.21;
    }

    let llegoHacienda=importe*iva;
    let mensaje=`${nombre} € paga ${importe} € pero a hacienda le parece poco y el iva lo sube a ${llegoHacienda} €`;
    document.getElementById("resultadoIva").textContent=mensaje;
}

function miCalculadora(){
    let primerN=document.getElementById("pOperando").value;
    let segunN=document.getElementById("sOperando").value;
    let ope=document.getElementById("operacion").value;


    primerN=Number(primerN);
    segunN=Number(segunN);

    let respuesta=0;

    switch(ope){
        case "suma":
            respuesta=primerN+segunN;
            break;
        case "resta":
            respuesta=primerN-segunN;
            break;
        case "multiplicacion":
            respuesta=primerN*segunN;
            break;
        case "division":
            respuesta=primerN/segunN;
            break;
    }
    respuesta.toFixed(2);

    let mensaje=`El resultado de su operación es ${respuesta}`;
    document.getElementById("resultado").textContent= mensaje;
    
    console.log(mensaje);

}

function limpiarCalculadora(){
    document.getElementById("pOperando").value="";
    document.getElementById("sOperando").value="";
    document.getElementById("operacion").value="suma"
    document.getElementById("resultado").textContent="";
}