

let a = 100;
let b = 400;

let obiekt = {
  a: 5,
  b: 4,
  f: function(text) {
    console.log('*** Wypisuje tekst: ' + text + ' ***')
  }
}

obiekt.f('No hej');

function dodawacz() {
  console.log(`suma:  ${this.a + this.b}`);
}

obiekt.dodawacz = dodawacz;
obiekt.dodawacz();

let reaktorJadrowy = {
  a: 'Sekretne Hasło do reaktora',
  b: [1,2,3,4],
  f: obiekt.f
}
reaktorJadrowy.f('No witam w reaktorze')
reaktorJadrowy.dodawacz = dodawacz;
reaktorJadrowy.dodawacz();

/* ?? */
dodawacz();

