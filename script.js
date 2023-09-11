let usuInput;
let compuInput;
let rtausuario = "si";

while(rtausuario == "si"){
    let usuInput = prompt("¿piedra, papel o tijera?").toLowerCase();
    let compuInput = Math.floor(Math.random() * 3);
        //valor de las rtas   
        if(compuInput == 0){
            compuInput = "piedra";
        } else if(compuInput == 1){
            compuInput = "papel";
        } else if(compuInput == 2){
            compuInput = "tijera";
        }
        //si elegiste PIEDRA
        if(usuInput == "piedra" && compuInput == "tijera"){
            alert("¡GANASTE!");
        } else if (usuInput == "piedra" && compuInput == "piedra"){
            alert("¡EMPATE!");
        } else if(usuInput == "piedra" && compuInput == "papel"){
            alert("¡PERDISTE!");
        }
        //si elegiste PAPEL
        if(usuInput == "papel" && compuInput == "piedra"){
            alert("¡GANASTE!");
        } else if(usuInput == "papel" && compuInput == "papel"){
            alert("¡EMPATE!");
        } else if(usuInput == "papel" && compuInput == "tijera"){
            alert("¡PERDISTE!");
        }
        //si elegiste TIJERA
        if(usuInput == "tijera" && compuInput == "papel"){
            alert("¡GANASTE!");
        } else if (usuInput == "tijera" && compuInput == "piedra"){
            alert("¡PERDISTE!");
        } else if(usuInput == "tijera" && compuInput == "tijera"){
            alert("¡EMPATE!");
        }
//msj de rta
console.log("Elegiste " + usuInput);
console.log("La respuesta que eligió la computadora fue: " + compuInput);
//rta del usuario
rtausuario = prompt("¿Quiere seguir jugando?").toLowerCase();
}
//msj despedida
alert("¡Nos vemos la próxima vez!");