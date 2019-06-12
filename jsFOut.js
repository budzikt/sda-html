'use strict'


function dodajDo(baza) {
  return function(add) {
    let bazaD = baza;
    return bazaD + add;
  }
}

let dodajDo10 = dodajDo(10);
let dodajDo25 = dodajDo(25);


console.log(dodajDo10(5));
console.log(dodajDo25(5));