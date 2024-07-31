function calcularEdad() {
    let nombre = document.getElementById("nombreMascota").value;
    let edad = document.getElementById("edadMascota").value;
    //edad=Number(edad);
    edad = parseInt(edad);
    let mensaje="";

    if (edad>0 && edad<50) {
        console.log(typeof (nombre));
        console.log(typeof (edad));

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