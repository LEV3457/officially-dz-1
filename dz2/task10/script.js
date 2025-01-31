document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');
    ran = new Date(name)

    ran.setDate(ran.getDate() + 1);

    message.textContent = ran















});