let o = {
  a: 60
}

let o2 = {
  a: 120,
}

function wypisz() {
  console.log(this.a);
  return this.a;
}

o.f = wypisz;
o2.f = wypisz;

o2.f();
o.f();

o.f2 = wypisz.bind(o2);
o.f2();

wypisz.apply(o2);