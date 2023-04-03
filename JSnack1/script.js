//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

let number1 = prompt("Inserire un numero");
let number2 = prompt("Inserire un altro numero");

let num1 = parseInt(number1);
let num2 = parseInt(number2);

if (num1 > num2) {
    console.log(`Il numero maggiore è ${num1}`);
} else if (num1 < num2) {
    console.log(`Il numero maggiore è ${num2}`);
} else {
    console.log(`I numeri sono uguali`);
}