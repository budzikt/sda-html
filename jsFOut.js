'use strict'


function dodajDo(baza) {
  let bazaD = baza;
  return function(add) {
    return bazaD + add;
  }
}

let dodajDo10 = dodajDo(10);
let dodajDo25 = dodajDo(25);


console.log(dodajDo10(5));
console.log(dodajDo25(5));

function sekrecik(sekrecik, haslo) {
  let _sekrecik = sekrecik;
  let _haslo = haslo;
  return function(hasloIn) {
    if (hasloIn === _haslo) {
      return _sekrecik;
    } else {
      return 'Nope.';
    }
  }
}

let sekrecikChecker = sekrecik('Slysze glosy', '1234');

console.log(sekrecikChecker('niePasuje'))
console.log(sekrecikChecker('1234'))