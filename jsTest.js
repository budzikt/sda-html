'use strict'

/* Deklaracja */
function dodaj(a,b) {
  return a+b;
}

/* Wyrażenie funkcyjne nienazwane */
let dodajFe = function(a,b) {
  return a+b;
}

/* Wyrażenie funkcyjne nazwane */
let dodajFeN = function add(a,b) {
  return a+b;
}

console.log(dodaj(4,5));
console.log(dodajFe(4,5));
console.log(dodajFeN(4,5));

/* Po co wyrażenia fukncyjne? */
let rand = Math.random();
let f;
if(rand < 0.5) {
  f = function() {
    let wylosowana = rand;
    console.log('Wylosowano mniejszą liczbę niż 0.5: ' + wylosowana)
  }
} else {
  f = function() {
    let wylosowana = rand;
    console.log('Wylosowano większą liczbę niż 0.5: ' + wylosowana)
  }
}
f();

/* Funkcja zadeklarowana poza obiektem... */
function wypisywacz(text) {
  console.log('*** Wypisuje tekst: ' + text + ' ***')
}

/* ...Może zostać do niego przypisana */
let obiekt = {
  a: 5,
  b: 4,
  f: wypisywacz
}

console.log(obiekt.f());
console.log(obiekt.f('moj tekst'));

/* Funkcja korzystająca z this */
function dodawacz() {
  return this.a + this.b;
}

obiekt.dodawacz = dodawacz;
obiekt.f(obiekt.dodawacz());