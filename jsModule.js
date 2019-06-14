
let imieModul = (function(imie, nazwisko){

  let _imie = imie;
  let _nazwisko = nazwisko;
  return {
    getImie: function(){
      return _imie;
    },
    getNazwisko: function(){
      return _nazwisko;
    },
    setImie: function(iIn){
      _imie = iIn;
    },
    setNazwisko: function(nIn){
      _nazwisko = nIn;
    }
  }

})('tomasz', 'budzinski')

console.log(imieModul.getImie());
console.log(imieModul.getNazwisko());

imieModul.setImie('Aldus');
imieModul.setNazwisko('Huxley');

console.log(imieModul.getImie());
console.log(imieModul.getNazwisko());

(function(){
  console.log('Wykonam się natychmiast')
})();

(function(number){
  console.log('Podano numer ' + number);
})(10)

let mulBy10s = (function(multiplybase){
  let multis = Array.from(new Array(20), (x,i) => i*multiplybase);
  return function(idx) {
    return multis[idx];
  }
})(10)

console.log(mulBy10s(4));