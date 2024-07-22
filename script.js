const name = document.querySelector('#name');
const email = document.querySelector('#email');
const Number = document.querySelector('#Number');
const Start = document.querySelector('#Start');
const Dest = document.querySelector('#Dest');
const Date = document.querySelector('#Date');
const btn = document.querySelector('#submit');


btn.addEventListener('click', () => {
    let Data = {
        name: name.value,
        email: email.value,
        number: Number.value,
        start: Start.value,
        destination: Dest.value,
        date: Date.value
    };

    let carpoolers = JSON.parse(localStorage.getItem('carpoolers')) || [];


    carpoolers.push(Data);

    localStorage.setItem('carpoolers', JSON.stringify(carpoolers));

    name.value = '';
    email.value = '';
    Number.value = '';
    Start.value = '';
    Dest.value = '';
    Date.value = '';
});

