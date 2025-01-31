document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message'); 
    for( let i = 2; i < name; i += 2)
        alert(i) ;
       


});