
function wypiszDane(d1, d2) {
  console.log(d1);
  console.log(d2);
}

let wypuszDaneLambda = (d1, d2) => {
  console.log(d1);
  console.log(d2);
}

function dodajDwieCyfry(c1, c2) {
  return c1+c2;
}

let dodajDwieCyfryLambda = (c1, c2) => {c1+c2}


let tablica = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];

function funkcjaFiltrujaca(val, idx, tabRef) {
  return val > 5;
}

f1 = tablica.filter(funkcjaFiltrujaca);

f2 = tablica.filter(function (val, idx) {
  return val > 5
})

f3 = tablica.filter((val, idx) => { return val > 5})

f4 = tablica.filter((val, idx) => val > 5)

console.log(f1,f2,f3, f4)