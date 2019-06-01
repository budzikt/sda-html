console.log('Działam i mam się dobrze');

function assignVals(vals) {
  
}

fetch('https://reqres.in/api/users?page=2')
.then(resp => resp.json())
.then(json => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(json);
    }, 2500)
  })
})
.then(v => {
  let dynCont = document.getElementById('dynamiczny')
  let arrElems = []
  v.data.forEach(element => {
    dynCont.appendChild(document.createElement('p')).innerHTML = element.email;
  });
})