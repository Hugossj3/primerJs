document.getElementById("toggleButton").addEventListener("click",
    function toggleMenu(){
        let myNav=document.getElementById("miNav");
        console.log(myNav.className);
        if(myNav.className==="navbar"){
            myNav.className+=" responsive";
        }else{
            myNav.className="navbar";
        }
    }
);