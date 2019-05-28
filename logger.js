console.log('Działam i mam się dobrze');

function toggleDisplay(el) {
  el.style.display = el.style.display === 'none' ? 'block' : 'none' 
}

function toggleHodden(el) {
  el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
}

document.getElementById('hidden').addEventListener('click', () => {
  let div = document.getElementById('divHidden');
  toggleHodden(div);
})

document.getElementById('display-none').addEventListener('click', () => {
  let div = document.getElementById('divDisplay');
  toggleDisplay(div);
})