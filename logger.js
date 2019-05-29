console.log('Działam i mam się dobrze');



document.getElementById('marginLR').addEventListener('input', (e) => {
  console.log(e.srcElement.value)
  document.getElementById('innerDiv').style.marginLeft = '' + e.srcElement.value + 'em';
})

document.getElementById('marginUD').addEventListener('input', (e) => {
  console.log(e.srcElement.value)
  document.getElementById('innerDiv').style.marginTop = '' + e.srcElement.value + 'em';
})

document.getElementById('paddingR').addEventListener('input', (e) => {
  console.log(e.srcElement.value)
  document.getElementById('innerDiv').style.paddingLeft = '' + e.srcElement.value + 'em';
})

document.getElementById('paddingUD').addEventListener('input', (e) => {
  console.log(e.srcElement.value)
  document.getElementById('innerDiv').style.paddingTop = '' + e.srcElement.value + 'em';
})