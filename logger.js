console.log('Działam i mam się dobrze');

document.getElementById('guzik')
.addEventListener('click', () => {
  let el = document.getElementById('mainDiv')
  el.style.backgroundColor = 'red';
  el.style.height = '150px';
  el.style.width = '30%';
  el.title = 'Mały czerwony prostokąt'
  el.firstElementChild.remove();
})