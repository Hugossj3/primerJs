document.getElementById("parallax").style.backgroundImage="url(../img/One-Piece-Ship-Wallpaper-147533.jpg)";

window.addEventListener("scroll",function(){
    let parallax=this.document.getElementById("parallax");
    let scrollPosition=window.scrollY;
    parallax.style.backgroundPositionY=(scrollPosition*0.5)+"px";
});