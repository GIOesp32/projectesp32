let rosso = document.getElementById('b-rosso');
let verde = document.getElementById('b-verde');
let popup = document.getElementById('popup');


rosso.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';

    popup.textContent = "ACCESO";
    popup.style.color = "red";
});

verde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';

    popup.textContent = "SPENTO";
    popup.style.color = "green";
});

