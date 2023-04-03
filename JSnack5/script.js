//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. 
//Stampa l'array alla fine.

let array = [];

for (i = 0; i < 6; i++) {

    let number = prompt('inserisci numero');
    let num = parseInt(number);

    if (num % 2 == 1) {
        array.push(num);
    }

}

console.log(array);