document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (name) {
        message.textContent = `Вам ${2025 - name}!`;
    } else {
        message.textContent = 'Пожалуйста, введите год';
    }

  // if (name) {
  //     alert(`Привет, ${name}!`);
  // } else {
  //     alert('Пожалуйста, введите свое имя!');
  // }
});