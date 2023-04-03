//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

let word1 = prompt("Inserire una parola");
let word2 = prompt("Inserire un'altra parola");

if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
} else if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else {
    console.log(`La parola ${word1} e la parola ${word2} sono lunghe uguali!`);
}