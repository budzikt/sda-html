console.log('Działam i mam się dobrze');

setTimeout(() => {
  if (
    document.getElementById('pId').classList.contains('text-wysrodkowany') &&
    document.getElementById('pId').classList.contains('text-czerwony')
  ) {
    document.getElementById('pId').innerHTML = 'Super!'
  }
}, 5000)