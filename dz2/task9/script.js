ocument.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name1 = document.getElementById('nameInput').value;
    const name2 = document.getElementById('nameInput').value;
    const name3 = document.getElementById('nameInput').value;
    const message = document.getElementById('message');


    if (name1) {
        if(name2 == "a") 
            message.textContent = `Ты получаешь 2 балла`;
    
}

});
