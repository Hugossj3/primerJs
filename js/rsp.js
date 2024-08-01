const posi = [
    "piedra",
    "papel",
    "tijera"
];
let nJugador = 0;
let nMaquina = 0;
let maq = "";
let jug = "";


//Tu elección ha sido: | La máquina eligió: 
//Jugador: 0| Computadora:0
function jugarPiedra() {
    jug = "🗿";
    let con = posi[Math.floor(Math.random() * posi.length)];
    switch (con) {
        case "piedra":
            maq = "🗿";
            break;
        case "papel":
            maq="📃";
            nMaquina++;
            break;
        case "tijera":
            maq="✂️";
            nJugador++;
            break;
    };
    document.getElementById("elecciones").innerHTML = `Tu elección ha sido: ${jug}| La máquina eligió: ${maq}`;
    document.getElementById("marcador").innerHTML = `Jugador: ${nJugador}| Computadora: ${nMaquina}`;
}

function jugarPapel() {
    jug = "📃";
    let con = posi[Math.floor(Math.random() * posi.length)];
    switch (con) {
        case "piedra":
            maq = "🗿";
            nJugador++;
            break;
        case "papel":
            maq="📃";
            break;
        case "tijera":
            maq="✂️";
            nMaquina++;
            break;
    };
    document.getElementById("elecciones").innerHTML = `Tu elección ha sido: ${jug}| La máquina eligió: ${maq}`;
    document.getElementById("marcador").innerHTML = `Jugador: ${nJugador}| Computadora: ${nMaquina}`;
}

function jugarTijera() {
    jug = "✂️";
    let con = posi[Math.floor(Math.random() * posi.length)];
    switch (con) {
        case "piedra":
            maq = "🗿";
            nMaquina++;
            break;
        case "papel":
            maq="📃";
            nJugador++;
            break;
        case "tijera":
            maq="✂️";
            break;
    };
    document.getElementById("elecciones").innerHTML = `Tu elección ha sido: ${jug}| La máquina eligió: ${maq}`;
    document.getElementById("marcador").innerHTML = `Jugador: ${nJugador}| Computadora: ${nMaquina}`;
}