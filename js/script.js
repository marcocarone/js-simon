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
  alert("Prova a memorizzare questi cinque numeri: " + listaNumeriCasuali + ". Dopo aver cliccaco su ok, attendi 30 secondi e successivamente prova ad inserire i numeri che ricordi");

  setTimeout(function() {
    for (var i = 0; i < 5; i++) {
      numeroPrompt = parseInt(prompt("Scrivi il numero che ricordi"));
      if (numeroPrompt == listaNumeriCasuali[i]) {
        listaNumeriPrompt.push(numeroPrompt);
      }
    }
    alert("Hai indovinato " + listaNumeriPrompt.length + " numeri. Esattamente il numero: " + listaNumeriPrompt)
    console.log(listaNumeriPrompt)
  }, 30000)

});


function genNumeriCasuali(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
