// for(desde;hasta;actualizacion);
// -actualizqacion- alert

/* let numero = parseInt(prompt( "ingrese un numero"));

for(let index = 5; index <= 10 ; index++){
let resultado = numero * index;
let mensaje = `${numero}* ${index} = ${resultado}`;
alert(mensaje)
} */


let contraseña = prompt("Adivinanza: bonita flor, que gira buscando el sol");

while(contraseña != "girasol"){
    alert("Contraseña incorrecta");

    contraseña = prompt("Adivinanza: bonita flor, que gira buscando el sol(solo una palabra)");
}

alert("Contraseña correcta, Bienvenido")