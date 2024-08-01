

function addTarea(){
    let tarea=document.getElementById("tarea").value;
    tarea=tarea.trim();
    if(tarea != ""){
        let li=document.createElement("li");
        li.innerHTML=`
        ${tarea} 
        <button class="btnEliminar">Eliminar</button>
        `;
        document.getElementById("listaTareas").appendChild(li);

        li.querySelector(".btnEliminar").addEventListener("click", function(){
            li.remove();
        });
        console.log(li);
    }
}