// Ejercicio 1 y 2 Mostrará Pop ups con mensajes 
/*alert("Hola Mundo!"); 
let mensaje = "Soy el primer script";
alert(mensaje);*/

/* Ejercicio 3
let mensajes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
alert(mensajes);*/

/* Ejercicio 4
let valores = [true, 5, false, "hola", "adios", 2];
alert(valores[3]>valores[4]?valores[3]:valores[4]);

alert(valores[0] && valores[2] ? true : false);
alert(valores[0] || valores[2] ? true : false);

alert(valores[1] + valores[5]);
alert(valores[1] - valores[5]);
alert(valores[1] * valores[5]);
alert(valores[1] / valores[5]);
alert(valores[1] % valores[5]);*/



/*Ejercicio 5
let numero1 = 5;
let numero2 = 8;
alert(numero1<numero2?"numero1 no es mayor que numero2":"numero1 es mayor que numero2");
alert(numero2>=0 ? "numero2 es positivo":"numero2 no es positivo");
alert(numero1<0 ? "numero1 es negativo o distinto de cero" : "numero1 es cero o positivo");
alert((numero1 +1)<numero2 ? "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2":"Incrementar en 1 unidad el valor de numero1lo hace mayor o igual que numero2");
*/


/*Ejercicio 6
let numeroIndicado = prompt("Introduce tu numero de dni:");
let letraIndicado = prompt("Introduce tu letra de dni:");
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


if (numeroIndicado < 0 || numeroIndicado > 99999999) {
 alert("El número proporcionado no es válido");   
} else{
    alert(CompararLetra(letraIndicado, letras[numeroIndicado % 23]) ? "El número y la letra de DNI son correctos.":"La letra que ha indicado no es correcta." );
}

function CompararLetra(letraIntroducida,letraOriginal) {
    return letraIntroducida === letraOriginal ? true : false;
}
*/

/*Ejercicio 7
let numero = prompt("Introduce un numero: ");
alert(CalcularFactorial(numero));

function CalcularFactorial(numero) {
    for (let index = numero -1; index > 0; index--) numero *= index;
    return numero;
}*/

//Ejercicio 8
let numero = prompt("Introduce un numero: ");
alert(EsPar(numero));
function EsPar(numero) {
    return numero%2 == 0 ? "El numero es par":"El numero es impar";
}
