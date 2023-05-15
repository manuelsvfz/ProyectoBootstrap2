//Mostrará Pop ups con mensajes
/*alert("Hola Mundo!"); 
let mensaje = "Soy el primer script";
alert(mensaje);*/

/*let mensajes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
alert(mensajes);*/

/*let valores = [true, 5, false, "hola", "adios", 2];
alert(valores[3]>valores[4]?valores[3]:valores[4]);

alert(valores[0] && valores[2] ? true : false);
alert(valores[0] || valores[2] ? true : false);

alert(valores[1] + valores[5]);
alert(valores[1] - valores[5]);
alert(valores[1] * valores[5]);
alert(valores[1] / valores[5]);
alert(valores[1] % valores[5]);*/
/*
let numero1 = 5;
let numero2 = 8;
alert(numero1<numero2?"numero1 no es mayor que numero2":"numero1 es mayor que numero2");
alert(numero2>=0 ? "numero2 es positivo":"numero2 no es positivo");
alert(numero1<0 ? "numero1 es negativo o distinto de cero" : "numero1 es cero o positivo");
alert((numero1 +1)<numero2 ? "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2":"Incrementar en 1 unidad el valor de numero1lo hace mayor o igual que numero2");
*/
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
