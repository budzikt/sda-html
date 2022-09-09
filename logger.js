console.log('Działam i mam się dobrze');

setTimeout(() => {
  if (
    document.getElementById('pId').classList.contains('text-wysrodkowany') &&
    document.getElementById('pId').classList.contains('text-czerwony')
  ) {
    document.getElementById('pId').innerHTML = 'Super!'
  } else {
		document.getElementById('div').appendChild(document.createTextNode('Ups, jeszcze nie to!'))
	}
}, 5000)