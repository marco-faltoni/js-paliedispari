// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// funzione per generare un numero random in un intervallo deciso da me o dall'utente
function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

// funzione per fare la somma di due numeri e stampare il risultato
function sommaNumeri(num1,num2) {
    var somma = num1 + num2;
}

// funzione per verificare se un numero è pari o dispari
// restituisce true se il numero passato in input è pari, false altrimenti
function isEven(numero) {
    var resto = numero % 2;
    if(resto == 0) {
        // il numero è pari
        // console.log('pari');
        return true;
    } else {
        // il numero è dispari
        // console.log('dispari');
        return false;
    }
}

var giocata_utente = parseInt(prompt('Scegli un numero intero tra 1 e 5'));
console.log("la giocata dell'utente è " + giocata_utente);

var giocata_pc = generaRandom(1, 5);
console.log('la giocata del pc è ' + giocata_pc);

var pari_disapri = prompt('Ora scegli: pari o dispari?');

sommaNumeri(giocata_utente, giocata_pc);
var risultato_somma = giocata_utente + giocata_pc;
console.log('la somma di ' + giocata_utente + ' e ' + giocata_pc + ' vale: ' + risultato_somma);
var risultato_somma = isEven(risultato_somma);


if (risultato_somma == true && pari_disapri == 'pari'){
    console.log('Hai vinto');
} if (risultato_somma == true && pari_disapri == 'dispari') {
    console.log('Hai perso');
}

if (risultato_somma == false && pari_disapri == 'dispari') {
    console.log('Hai vinto');
} if  (risultato_somma == false && pari_disapri == 'pari') {
    console.log('Hai perso');
}
