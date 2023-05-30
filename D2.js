/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n1 = 5
const n2 = 10

if (n1>n2) {
  console.log ('"n1" è maggiore')
}
else {
  console.log('"n2" è maggiore')
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n3 = 10
if (n3!==5) {
  console.log('not equal')
  }
  else {console.log ('è 5')}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/                                                                                                                                                                                          

/* SCRIVI QUI LA TUA RISPOSTA */

if (n3 % 5 === 0 ) {
  console.log ('è divisibile per 5')
}
else {
  console.log ('non è divisibile per 5')
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n4 = 3
let n5 = 9

if (n4 === 8 || n5 === 8) {
console.log ('uno dei due numeri è uguale a 8')  
}
else if ( n4+n5 === 8) {
  console.log ('la somma dei due numeri è 8')
}
else {
  console.log('nessuno dei due numeri è 8 e la loro somma non è 8')
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 60
const shippingCost = 10

if (totalShoppingCart > 50) { 
  console.log (
    'total order', totalShoppingCart, '€'
    )
  }
if (totalShoppingCart <= 50) {
    console.log (
      'total order', totalShoppingCart + shippingCost, '€' 
      )
  }
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCartBlackFriday = totalShoppingCart - (totalShoppingCart*20/100)

if (totalShoppingCartBlackFriday > 50) { 
  console.log (
    'total order black Friday', totalShoppingCartBlackFriday, '€'
    )
  }
if (totalShoppingCartBlackFriday <= 50) {
    console.log (
      'total order Black Friday', totalShoppingCartBlackFriday + shippingCost, '€' 
      )
  }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let var1 = 9
let var2 = 2
let var3 = 4

if (var1>var2 && var2>var3){console.log (var1, var2, var3)}
else if (var1>var3 && var3>var2){console.log(var1, var3, var2)}
else if (var2>var1 && var1>var3){console.log(var2, var1, var3)}
else if (var2>var3 && var3>var1){console.log(var2, var3, var1)}
else if (var3>var1 && var1>var2){console.log(var3, var1, var2)}
else if (var3>var2 && var2>var1){console.log(var1, var3, var2)}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 'prova'

if (typeof valore === 'number') {console.log('è un numero')}
else {console.log('non è un numero')}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n6 = 10 

if (n6 % 2 === 0 ) {console.log ('è pari')}
else {console.log ('è dispari')}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7

if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'

console.log (me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop ()

console.log ('skills', me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const testArray = []
console.log ('newarray-empty', testArray)
testArray.push (1, 2, 3, 4, 5 ,6,7,8,9,10) 

console.log ('newarray', testArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

testArray.splice (9, 1, 100)

console.log ('newarray', testArray)