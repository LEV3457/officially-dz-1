document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const chislo = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (chislo) {
        let digit1 = Math.floor(chislo / 100);
        let digit2 = Math.floor(chislo / 10) % 10;
        let digit3 = chislo % 10;
        message.textContent = `число ${digit3}${digit2}${digit1}`
    } else {
        message.textContent = 'Введите число!';

    }

  // if (name) {
  //     alert(`Привет, ${name}!`);
  // } else {
  //     alert('Пожалуйста, введите свое имя!');
  // }
});