document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameput').value;
    const message = document.getElementById('message');

    const nam = document.getElementById('nameInput').value;

    if (con) {
        message.textContent = `Площадь ${name / nam}!`;
    } else {
        message.textContent = 'Пожалуйста, введите свое имя!';
    }

  // if (name) {
  //     alert(`Привет, ${name}!`);
  // } else {
  //     alert('Пожалуйста, введите свое имя!');
  // }
});