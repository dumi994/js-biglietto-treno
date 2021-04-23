//Chiedi all'utente quanti km vuole percorrere
var kmDaPerc = parseInt(prompt('Quanti km intendiamo percorrere?'));
console.log(kmDaPerc);
document.getElementById('posto').innerHTML = kmDaPerc;

//chiedi all'utente l'età
var anni = parseInt(prompt('Quanti anni avete?'))
console.log(anni);
document.getElementById('eta').innerHTML = anni;
var under = 18;
var over = 65;
/* var scontoUnder = 0.21 - (0.21 * 20 / 100);
var scontoOver = 0.21 - (0.21 * 40 / 100); */
var scontoUnder = 0.17;
var scontoOver = 0.13;


if (anni <= under ){
    console.log(kmDaPerc * scontoUnder);
    document.getElementById('prezzo').innerHTML = kmDaPerc * scontoUnder ' ' + valuta;
}else if (anni >= under){
    console.log(prezzoKm * kmDaPerc);
}else if (anni >= over){
    console.log(kmDaPerc * scontoOver);
}


//||||||||||||||||||||||||||||||
var prezzoKm = 0.21;
var valuta = '€';

/* document.getElementById('prezzo').innerHTML = prezzoKm * kmDaPerc + ' ' + valuta; */



