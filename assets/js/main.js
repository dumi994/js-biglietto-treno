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
//Sconto
var scontoUnder = 0.17;
var scontoOver = 0.13;
//Prezzo al km
var prezzoKm = 0.21;
var valuta = '€';

if (anni <= under ){
    console.log(kmDaPerc * scontoUnder);
    document.getElementById('prezzo').innerHTML = kmDaPerc * scontoUnder + ' ' + valuta;
    document.getElementById('sconto').innerHTML ='Il prezzo da pagare è (sconto giovani -20%)';
}else if (anni > over){
    console.log(kmDaPerc * scontoOver);
    document.getElementById('prezzo').innerHTML = kmDaPerc * scontoOver + ' ' + valuta;
    document.getElementById('sconto').innerHTML ='Il prezzo da pagare è (sconto anziani -40%)';
}else{
    console.log(kmDaPerc * prezzoKm);
    document.getElementById('prezzo').innerHTML = kmDaPerc * prezzoKm + ' ' + valuta;
}


//||||||||||||||||||||||||||||||
