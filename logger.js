console.log('Działam i mam się dobrze');

$("#id2").click(function(){
    $('.toast').toast('show');
  });

let guziki = 5;

for(var i = 1; i <= guziki; i++) {
    var ele = document.getElementById(`id${i}`)
    if (ele) {
        ele.addEventListener('click', () => {
            alert(`Wartość id guzika to ${i}`);
        });
    }
}