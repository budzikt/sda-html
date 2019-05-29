console.log('Działam i mam się dobrze');

function generujLosowyKolor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

document.getElementById('guzik')
.addEventListener('click', () => {
  let el = document.getElementById('mainDiv')
  el.style.backgroundColor = generujLosowyKolor();
  el.style.height = '150px';
  el.style.width = '30%';
  el.style.border = 'solid';
  el.style.borderColor  = 'red';
  el.style.textAlign = el.style.textAlign === 'left' ? 'right' : 'left'
  
  if(el.firstElementChild.tagName !== 'BUTTON') {
    el.firstElementChild.remove();
  }

    let childs = el.childElementCount;
    console.log(el.childElementCount)

  el.title = `Mały zielony prostokąt z ${childs} dziećmi`
})