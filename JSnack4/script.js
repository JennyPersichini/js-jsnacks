//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let listaInvitati = ["Emiliano", "Jenny", "Jimmy", "Valerio", "Marco", "Paola", "Lucia"];

let nomeInvitato = prompt("Come ti chiami??");

for (let i = 0 ; i < listaInvitati.length; i++) {

    if (listaInvitati.includes(nomeInvitato)) {
        console.log("Sei presente nella lista, entra pure e buona serata!!");
    } else {
        console.log("Non sei stato invitato, sparisci!")
    }
    
} 