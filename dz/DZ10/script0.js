document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const chislo = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (chislo % 2 == 0) {
        let digit1 = alert(Math.floor(chislo/2));
        alert('четное')
        message.textContent = `число`
    } else {
        alert('нечетное')
        message.textContent = 'Введите число!';

    }

  // if (name) {
  //     alert(`Привет, ${name}!`);
  // } else {
  //     alert('Пожалуйста, введите свое имя!');
  // }
});