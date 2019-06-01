console.log('Działam i mam się dobrze');

document.getElementById('guzik').addEventListener('click', (ev) => {
  let comment = document.getElementById('txt').value
  let para = document.createElement("p");
  para.innerHTML = comment;
  document.getElementById('comments').appendChild(para);
})

document.getElementById('guzik2').addEventListener('click', (ev) => {
  let comment = document.getElementById('txt2').value
  let para = document.createElement("p");
  para.innerHTML = comment;
  document.getElementById('comments2').prepend(para);
})