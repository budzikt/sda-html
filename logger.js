console.log('Działam i mam się dobrze');

let el = document.getElementById('commentForm');
console.log(el);

el.addEventListener('submit', (e) => {
  if (e.preventDefault) e.preventDefault();

  let wartosci  = {}
  wartosci.nick= document.getElementById('nickId').value
  wartosci.mail= document.getElementById('emailId').value
  wartosci.karma= document.getElementById('selectId').value
  document.querySelectorAll("#formularz input[type='radio']")
  .forEach(node => {
    if (node.checked === true) {
      wartosci.ocena = node.value;
    }
  });
  wartosci.textArea = document.getElementById('comment-text-area').value;

  let div = document.createElement('div');
  div.classList.add('comment');
  div.innerHTML = `
  <div class="poster">
  <div class="nick">
    <p>${wartosci.nick}</p>
  </div>
  <div class="mail">
    <p>${wartosci.mail}</p>
  </div>
</div>
<div class="ocena">
  <h5>Ocena:</h5>
  <div class="ocena-wrapper">
    <p>
    ${wartosci.ocena}
    </p> 
  </div>
</div>
<div class="karma">
${wartosci.karma}
</div>
<div class="comment-text">
  <h5>Treść:</h5>
  <p>
    ${wartosci.textArea}
  </p>
</div>
  `
  document.getElementById('comments').appendChild(div);

  el.reset();

  return false;
})