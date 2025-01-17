    

    document.getElementById('Button').addEventListener('click', function() 
        // const name = prompt("Введите свое имя: ")
    const money2 = document.getElementById('nameInput').value;
    const message = document.getElementById('message');


    if (!isNaN(money2) && money2 > 0 && !isNaN(message) && message > 0) {
        const speed = match.floor(money2 / message);
        document.getElementById('result').innerText = `Скорость: ${speed.toFixed(2)} км/ч`;


    // if (money && money2) {
    //     message.textContent = `получиться, ${money / money2}!`;
    } else {
        message.textContent = 'Пожалуйста, введите свое имя!';
    }

  // if (name) {
  //     alert(`Привет, ${name}!`);
  // } else {
  //     alert('Пожалуйста, введите свое имя!');
  // }
});