console.log('Działam i mam się dobrze');

function showHide(MouseEvent) {
  let id = MouseEvent.srcElement.id
  console.log(MouseEvent);
  let el = document.getElementById(`div${id}`)
  el.hidden = !el.hidden;
  MouseEvent.srcElement.innerText = MouseEvent.srcElement.innerText == 'Ukryj' ? 'Pokaż' : 'Ukryj'
}

document.getElementById('1').addEventListener('click', showHide)
document.getElementById('2').addEventListener('click', showHide)
document.getElementById('3').addEventListener('click', showHide)
