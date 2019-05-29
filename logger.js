console.log('Działam i mam się dobrze');

function appendDiv() {
  let container = document.getElementById('parent');
  let txt = document.getElementById('txt').value;

  let child = document.createElement('div')
  let childChild = document.createElement('p')
  childChild.innerHTML = txt;
  child.appendChild(childChild);
  child.classList.add('sized', 'r');

  container.appendChild(child);
}

document.getElementById('btn').addEventListener('click', appendDiv);