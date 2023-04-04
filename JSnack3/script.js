//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

/* let number1 = prompt("Inserire un nume");
let number2 = prompt("Inserire un altro numero");
let number3 = prompt("Inserire un altro numero");
let number4 = prompt("Inserire un altro numero");
let number5 = prompt("Inserire un altro numero");
let number6 = prompt("Inserire un altro numero");
let number7 = prompt("Abbiamo quasi finito! Inserire un altro numero");
let number8 = prompt("Inserire un altro numero");
let number9 = prompt("Inserire un altro numero");
let number10 = prompt("Giuro che è l'ultima! Inserire un altro numero");

let num1 = parseInt(number1);
let num2 = parseInt(number2);
let num3 = parseInt(number3);
let num4 = parseInt(number4);
let num5 = parseInt(number5);
let num6 = parseInt(number6);
let num7 = parseInt(number7);
let num8 = parseInt(number8);
let num9 = parseInt(number9);
let num10 = parseInt(number10);

let numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];

//console.log(numbers);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); */

/*let numbers = [];*/
let sum = 0;

for (let i = 0; i < 10; i++) {

    let number = prompt('inserisci numero');
    let num = parseInt(number);
 //   numbers.push(num);

    sum += num;
}

console.log(sum);