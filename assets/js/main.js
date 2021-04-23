//Chiedi all'utente quanti km vuole percorrere
var kmDaPerc = parseInt(prompt('Quanti km intendiamo percorrere?'));
console.log(kmDaPerc);
document.getElementById('posto').innerHTML = kmDaPerc;

//chiedi all'utente l'età
var anni = parseInt(prompt('Quanti anni avete?'))
console.log(anni);
document.getElementById('eta').innerHTML = anni;



//||||||||||||||||||||||||||||||
var prezzoKm = 0.21;
var valuta = '€';
console.log(prezzoKm * kmDaPerc);
document.getElementById('prezzo').innerHTML = prezzoKm * kmDaPerc + ' ' + valuta;
/* var kmPercorsi = domanda * */


