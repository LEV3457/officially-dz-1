document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (name >= 200 && name <= 300) {
        message.textContent = `Со скидкой, ${name * 0.97}!`;
    } else if (name >= 301 && name <= 500){
        message.textContent = `Со скидкой, ${name * 0.95}!`;
    } else if (name >= 501 && name <= 10000000000000) {
        message.textContent = `Со скидкой, ${name * 0.93}!`;
    } else {
        message.textContent = `сорри, без скидки`; 
    }
    });