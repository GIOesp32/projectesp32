let rosso = document.getElementById('b-rosso');
let verde = document.getElementById('b-verde');
let stato = document.getElementById('stato');


rosso.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';


    stato.textContent = "ACCESO";
    stato.style.color = "red";
});

verde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';


    stato.textContent = "SPENTO";
    stato.style.color = "green";
});

