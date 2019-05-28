console.log('Działam i mam się dobrze');

function appendDiv() {
  let container = document.getElementById('parent');
  let txt = document.getElementById('txt').value;

  let child = document.createElement('div')
  child.classList.add('sized', 'r');
  child.innerHTML = txt;

  container.appendChild(child);
}

document.getElementById('btn').addEventListener('click', appendDiv);