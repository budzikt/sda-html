console.log('Działam i mam się dobrze');

function wstawCzas() {
  let p = document.getElementById('time').innerHTML = new Date().toTimeString();
}

setInterval(wstawCzas, 500);


document.getElementById('contener').addEventListener('mousemove', (e) => {
  x=e.clientX;
  y=e.clientY;
  cursor="Pozycja kursora : " + x + " and " + y ;
  let display = document.getElementById("displayArea")
  display.innerHTML = cursor
})

document.getElementById("displayArea").addEventListener('mouseenter', (u) => {
  document.getElementById("displayArea").style.position = 'relative';
  document.getElementById("displayArea").style.left = Math.floor(Math.random() * (500 - 100 +1)) + 100 + 'px';
  document.getElementById("displayArea").style.top = Math.floor(Math.random() * (500 - 100 +1)) + 100 + 'px';
})