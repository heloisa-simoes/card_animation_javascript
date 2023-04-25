const bolsa1 = document.getElementById('bolsa-1');
const bolsa2 = document.getElementById('bolsa-2');
const setaright = document.getElementById('right');
const setaleft = document.getElementById('left');
const img = document.getElementById('bolsa-1')


function right() {
    img.src = './img/bolsaverde.png'
}

function left() {
    img.scr = './img/bolsamilitar.png'
}



setaright.addEventListener('click', right);
setaleft.addEventListener('click', left)