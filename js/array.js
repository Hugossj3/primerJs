//array

const frases=[
    "se te va a romper movil",
    "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo",
    "El dinero no es la clave del éxito; la libertad para poder crear lo es",
    "Cuanto más duramente trabajo, más suerte tengo",
    "La inteligencia consiste no solo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica",
    "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu ",
    "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
    "Cuéntamelo y me olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé ",
]
function suerte(){
    
    
    
    // console.log(frutas[1]);
    // frutas.push("fresas");
    // console.table(frutas);
    // console.log(frutas.length);
    
    // for (let i=0; i<frutas.length;i++){
    //     console.log(frutas[i]);
    // }
    
    // frutas.forEach(fruta=>{
    //     console.log(fruta);
    // });
    
    // frutas.forEach((fruta,indice,array)=>{
    //     console.log(fruta+" "+indice);
    // });
    let ale=Math.floor(Math.random()*frases.length);

    document.getElementById("resultado").innerHTML=frases[ale];
}

