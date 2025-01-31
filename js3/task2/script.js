document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message'); 
    let i = document.getElementById('nameInput').value;

    for ( i == name && i < 0; i--; i-= 2) {
        alert(i);
    }
});