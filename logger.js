console.log('Działam i mam się dobrze');


function showHidden() {
  let hidden = document.getElementById('hidden');
  let v = hidden.hidden;
  hidden.hidden = !v;
}

let guzik = document.getElementById('guzik')
guzik.addEventListener('click', showHidden);