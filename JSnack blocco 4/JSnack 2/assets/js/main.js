/***************** CONSEGNA ******************
Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*********************************************/

$(function () {

  var biciclette = [
  {
    nome: "Trek",
    peso:10
  },
  {
    nome: "Bianchi",
    peso: 7
  },
  {
    nome: "Cannondale",
    peso: 8
  },
  {
    nome: "Cube",
    peso: 9
  }

  ];

  console.log(biciclette);

  for (var i = 0; i < biciclette.length; i++) {
      if (biciclette[i].peso == biciclette[0].peso) {
        console.log(biciclette[i].peso);
      } else if (biciclette[i].peso < biciclette[i-1].peso ){
        console.log(biciclette[i].peso);
      } else {
        console.log(biciclette[i - 1].peso);
      }
  }

});
