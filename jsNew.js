
function Osoba(wiek, imie, plec) {
  this.wiek = wiek;
  this.imie = imie;
  this.plec = plec;
  this.przedstawSie = function() {
    console.log('Nazywam sie ' + this.imie + ', mam ' + this.wiek + ' lat i jestem ' + this.mapGender())
  }
  this.mapGender = function() {
    return this.plec === 'M' ? 'mezczyzna' : 'kobieta'
  }
}

let StaryJan = new Osoba(67, 'Jan', 'M');
let MlodaMonika = new Osoba(22, 'Monika', 'F');

StaryJan.przedstawSie();
MlodaMonika.przedstawSie();
glupota.przedstawSie()

class OsobaClass {
  constructor(wiek, imie, plec) {
    this.wiek = wiek;
    this.imie = imie;
    this.plec = plec;
  }

  przedstawSie() {
    console.log('Nazywam sie ' + this.imie + ', mam ' + this.wiek + ' lat i jestem ' + this.mapGender())
  }
  mapGender() {
    return this.plec === 'M' ? 'mezczyzna' : 'kobieta'
  }
}

NiemowlakKrzys = new OsobaClass(2, 'Krzys', 'M');
NiemowlakKrzys.przedstawSie();