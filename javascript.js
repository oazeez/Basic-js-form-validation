const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#msg');
const usersList = document.querySelector('#users')
const button = document.querySelector('#btn');

form.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault();
    if (nameInput.value == "" || emailInput.value == "") {
        message.classList.add('error')
        message.innerHTML = '<p>Please Enter All Fields</p>'
        setTimeout(() => message.remove(), 2000)
    }

}