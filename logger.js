console.log('Działam i mam się dobrze');

document.getElementById('guzik')
.addEventListener('click', () => {
  let el = document.getElementById('mainDiv')
  el.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  el.style.height = '150px';
  el.style.width = '30%';
  el.style.border = 'solid';
  el.style.borderColor  = 'red';

  let childs = el.childElementCount;

  if(el.firstElementChild.tagName !== 'BUTTON') {
    el.firstElementChild.remove();
  }

  el.title = `Mały zielony prostokąt z ${childs} dziećmi`
})