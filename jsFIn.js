
function wykonajDzialanie(arg1, arg2, f) {
  return f(arg1, arg2);
}

function dodaj(a,b) {
  return a + b;
}

function odejmij(a,b) {
  return a - b;
}

console.log( wykonajDzialanie(5,3, dodaj) );
console.log( wykonajDzialanie(5,3, odejmij) );