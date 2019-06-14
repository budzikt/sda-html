console.log('Działam i mam się dobrze');

let el = document.getElementById('commentForm');
console.log(el);

el.addEventListener('submit', (e) => {
  if (e.preventDefault) e.preventDefault();

  let map  = {}
  map.nick= document.getElementById('nickId').value
  map.mail= document.getElementById('emailId').value
  map.karma= document.getElementById('selectId').value
  document.querySelectorAll("#formularz input[type='radio']")
  .forEach(node => {
    if (node.checked === true) {
      map.ocena = node.value;
    }
  });
  map.textArea = document.getElementById('comment-text-area').value;

  let div = document.createElement('div');
  div.classList.add('comment');
  div.innerHTML = `
  <div class="poster">
  <div class="nick">
    <p>Arturex</p>
  </div>
  <div class="mail">
    <p>arturex@wp.pl</p>
  </div>
</div>
<div class="ocena">
  <h5>Ocena:</h5>
  <div class="ocena-wrapper">
    <p>
      4
    </p> 
  </div>
</div>
<div class="karma">
  Karma 1
</div>
<div class="comment-text">
  <h5>Treść:</h5>
  <p>
    Ogólnie spoko, tylko teściowej nie smakuje
  </p>
</div>
  `
  document.getElementById('comments').appendChild(div);

  return false;
})