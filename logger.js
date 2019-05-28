console.log('Działam i mam się dobrze');


function showHidden() {
  let hidden = document.getElementById('hidden');
  let v1 = hidden.hidden;
  hidden.hidden = !v1;
}

function hideShown() {
  let shown = document.getElementById('shown');
  let v2 = shown.hidden;
  shown.hidden = !v2;
}

let guzik = document.getElementById('guzik')
guzik.addEventListener('click', showHidden);
guzik.addEventListener('click', hideShown);