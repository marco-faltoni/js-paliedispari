//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// function palindrome(str) {
//     return str.split("").reverse().join("");
// }
//
// // la formula sopra è la versione abbeviata e concatenata della seguente
//
//
// var risultato = palindrome("hello");
// console.log(risultato);
//

function palindrome(richiesta) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

var richiesta = prompt('Inserisci una parola e scopri se è palindroma');

if (richiesta == 0) {
    console.log('il nome ' + richiesta +  ' che hai inserito è palindromo');
}  else {
    console.log('il nome ' + richiesta +  ' che hai inserito non è palindromo');
}
