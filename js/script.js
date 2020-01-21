// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati


$(document).ready(function() {

  var listaNumeriCasuali = [];
  var listaNumeriPrompt = [];
  var numeroCasuale;
  var numeroPrompt;

  for (var i = 0; i < 5; i++) {
    numeroCasuale = genNumeriCasuali(1, 900);
    console.log(numeroCasuale);
    listaNumeriCasuali.push(numeroCasuale);
  }
  console.log(listaNumeriCasuali);
  alert("Cerca di memorizzare questi cinque numeri: " + listaNumeriCasuali);

  setTimeout(function() {
    for (var i = 0; i < 5; i++) {
      numeroPrompt = parseInt(prompt("inserisci i numeri che ricordi"));
      for (var f = 0; f < listaNumeriCasuali.length; f++) {
        if (numeroPrompt == listaNumeriCasuali[f]) {
          listaNumeriPrompt.push(numeroPrompt);
        }
      }

    }
    alert("Hai indovinato " + listaNumeriPrompt.length + " numeri. Esattamente i numeri: " + listaNumeriPrompt)
    console.log(listaNumeriPrompt)
  }, 30000)

});




function genNumeriCasuali(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
