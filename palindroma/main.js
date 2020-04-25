//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato


// Questa versione con questa funzione restituisce la stringa ribaltata, e non mi dice se è true o false
//
// function palindrome(str) {
//     return str.split("").reverse().join("");
// }
//
// var risultato = palindrome("hello");
// console.log(risultato);

// Questa versione con questa funzione restituisce la stringa ribaltata E mi dice se è true o false il valore che gli immetto
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

// chiedo all'utente di darmi una parola
var richiesta = prompt('Inserisci una parola e scopri se è palindroma');

// richiamo la funzione e gli assegno la var con la parola che ho avuto
if (palindrome(richiesta)) {
    // in questo caso la funzione mi ha restiuito una risultato true
    console.log('la parola ' + richiesta +  ' che hai inserito è palindroma');
    document.getElementById('palindromo').innerHTML = 'la parola ' + richiesta +  ' che hai inserito è palindroma!';
}  else {
    // in questo caso la funzione mi ha restiuito una risultato flase
    console.log('la parola ' + richiesta +  ' che hai inserito non è palindroma');
    document.getElementById('nonpalindromo').innerHTML = 'la parola ' + richiesta +  ' che hai inserito non è palindroma! Riprova.';
}
