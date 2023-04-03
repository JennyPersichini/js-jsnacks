//Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
//Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, 
//e stampare tutta la tabellina del 2 fino al numero inserito.

/* for (i = 0; i <= 1000; i = i+2) {
    console.log(i);
} */

let num = prompt("Fino a che numero vuoi che arrivo a contare??")
let numFinish = parseInt(num);

for (i = 0; i <= numFinish; i = i+2) {
    console.log(i);
}