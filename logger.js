console.log('Działam i mam się dobrze');

function wypisz(cos) {
    console.log('Wcisnieto guzik');
    console.log(cos);
}


let a = document.getElementById('guzik');
console.log(a);
a.addEventListener('click', wypisz);