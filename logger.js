console.log('Działam i mam się dobrze');

let guzik = document.getElementById('guzik')
guzik.addEventListener('click', showHidden);

function showHidden() {
  let hidden = document.getElementById('hidden');
  hidden.hidden = false;
}