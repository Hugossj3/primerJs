let persona={
    nombre:"Pepa",
    edad:28,
    ciudad:"Granada"
}


const alumnos=[
    {nombre:"Frank", edad:18, ciudad:"Granada"},
    {nombre:"Antonio", edad:20, ciudad:"Maracena"},
    {nombre:"Simon", edad:23, ciudad:"Jaen"},
    {nombre:"Maria", edad:26, ciudad:"Almeria"},
]
console.log(alumnos);
alumnos.forEach(alumno=>{
    console.log(alumno.nombre+" "+alumno.edad);
});


const frases=[
    {
        frase:"se te va a romper movil",
        autor:"Hugo"
    },
    {
        frase:"Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo",
        autor:"Michael Jordan"
    },
    {
        frase:"El dinero no es la clave del éxito; la libertad para poder crear lo es",
        autor:"Nelson Mandela"
    },
    {
        frase:"Cuanto más duramente trabajo, más suerte tengo",
        autor:"Gary Player"
    },
    {
        frase:"La inteligencia consiste no solo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica",
        autor:"Aristoteles"
    },
    {
        frase:"El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu ",
        autor:"Helena Rubinstein"
    },
    {
        frase:"Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
        autor:"Elon Musk"
    },
    {
        frase:"Cuéntamelo y me olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé ",
        autor:"Benjamin Franklin"
    },
    
    
    
    
    
    
    
];
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

    document.getElementById("frase").innerHTML=frases[ale].frase;
    document.getElementById("autor").innerHTML=frases[ale].autor;
}