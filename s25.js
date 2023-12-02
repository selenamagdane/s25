//EJEMPLO 1

/*
for (let i = 1; i <= 10; i++) {
    alert(i); 
}
*/

//EJEMPLO 2
//LLENAR UNA CADENA DE TEXTO CON BUCLE

/*
let texto = "";

for (let i = 1 ; i <= 10; i++ ) {
    texto +=i;
    console.log ()
}
*/

//EXTRA

/*
let num = 0

for (let i=1 ; i <= 10; i++) {
    console.log(`Numero -> ${num}`)
    console.log(`iterador-> ${i}`)
    console.log(`${num} + ${i}`)
    num += i;
    console.log(`resultado-> ${num}`)

}

*/
/*
let texto = "";

for (let i = 1 ; i <= 10; i++ ) {
    texto +=i + "<br />";
}

document.getElementById("demo").innerHTML = texto;

*/

//EJEMPLO 3
/*
let texto = ""

const cars = ["BWM", "volvo", "sabb", "ford", "audi"];

for (let i = 0; i < cars.length; i++){
  texto += cars [i] + "<br />";
}
document.getElementById("demo").innerHTML = texto;
*/


//SESION 26

/*
let number = 0;
while (number <=5) {
    console.log(number);
    number = number + 1 ;
}


let i = 10;

while(i <= 100) {
    console.log(i);
    i += 10;
}
console.log("bucle finalizado");
*/
/*
let i = 20, final = 100

while (i <= final) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

*/
/*
        
let vocales = ['a', 'e', 'i', 'o', 'u'];
let i = 0
while (i < vocales.length) {
    console.log (vocales[i]);
    i++
}
*/

//promot


/*
let edad;
edad = prompt("Ingresa tu edad;");
console.log(edad);
*/

//     REGEX

/*
const patron = /hola/;

let dato;

do {
    dato = prompt('Ingresa el valor;');
} while(!patron.test(dato));

alert("Patron acertado");
*/

