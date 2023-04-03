//Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
//Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, 
//altrimenti ha perso.

let randomNumber = Math.floor(Math.random() * 10) + 1;

let number = prompt("Inserisci un numero tra 1 e 10");
let num = parseInt(number);

if (num == randomNumber) {
    console.log("Daje!! Hai vinto!!!");
} else {
    console.log("OPS! Hai perso!");
}