document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (name) {
        message.textContent = `Получиться файлов, ${name / 820}!`;
    } else {
        message.textContent = 'что-то не так';
    }

  // if (name) {
  //     alert(`Привет, ${name}!`);
  // } else {
  //     alert('Пожалуйста, введите свое имя!');
  // }
});