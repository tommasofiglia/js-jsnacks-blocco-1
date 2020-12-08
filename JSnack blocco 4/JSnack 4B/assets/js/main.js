/******************* CONSEGNA ********************
Generare numeri random al posto degli 0 nelle proprietà:punti fatti e falli subiti
************************************************/

$(function () {

  var puntiFatti;
  var numFalliSubiti;

  var squadreSerieA = [
    {
      nome: "Milan",
      punti: 0,
      fallisubiti: 0
    },
    {
      nome: "Inter",
      punti: 0,
      fallisubiti: 0
    },
    {
      nome: "Juventus",
      punti: 0,
      fallisubiti: 0
    },
    {
      nome: "Roma",
      punti: 0,
      fallisubiti: 0
    },
    {
      nome: "Napoli",
      punti: 0,
      fallisubiti: 0
    },
    {
      nome: "Atalanta",
      punti: 0,
      fallisubiti: 0
    }
  ];

// Ciclo for in grado di applicare la funzione che genera numeri random per ogni elemento dell'array e di applicare questi a punti e falli subiti per ogni squadra.

  for (var i = 0; i < squadreSerieA.length; i++) {
    puntiFatti = getRandom(0,50);
    numFalliSubiti = getRandom(0,30);

    squadreSerieA[i].punti = puntiFatti;
    squadreSerieA[i].fallisubiti = numFalliSubiti;
  }
  
  console.log(squadreSerieA);

  // Funzione che genera numeri random

  function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }

});
