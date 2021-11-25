function aleatorio(){

    let nombres = [
"Avila Moreno, Francisco Jesús",
"Blazquez El Rabih, Pedro Jose",
"Burgos Márquez, Luis",
"Camargo Malagón, Álvaro",
"Cantillo Jiménez, Andrés",
"Cobos Marfil, Blanca",
"Lucena Tienda, Javier",
"Luna Velázquez, Guadalupe",
"Pedraza Gálvez, Juan Rafael",
"Ranchal Parrado, Juan",
"Rengel Yuste , Jesús",
"Ruiz Ruiz, Francisco de Asís",
"Salado Palomares, Álvaro",
"Torres Torres, Pablo"
]

    let winnerNumber = Math.trunc(Math.random() * ((nombres.length) - 0) + 0);

    let message = document.getElementById("winMessage")

    message.innerHTML = "El ganador es: " + nombres[winnerNumber]

}

async function main(){

    var vid = document.getElementById('tamborVideo');
    
    console.log(vid)
    vid.play();

    document.getElementById('tamborSound').play();

    var myAudio = new Audio('audioTambor.m4a');
    myAudio.play();
    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
    });
    }

    var x = 0;
    while(x < 41){
        x = x + 1
        aleatorio()
        await delay(0.1);

        
    }

}
