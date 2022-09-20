

let entrada = prompt("Ingresar un nombre de un Jugador famoso. Si ya no queres ingresar jugadores, escrbí la palabra Stop");
let jugadores = [];
while (entrada != 'Stop') {
    jugadores.push(entrada);
    entrada = prompt("Ingresar un nombre de un Jugador famoso. Si ya no queres ingresar jugadores, escrbí la palabra Stop");
}
for (let index = 1; index < jugadores.length; index++) {
    alert(  " Jugador nº " + index  + " " + jugadores[index]);
}

