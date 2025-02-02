document.getElementById('Button').addEventListener('click', function() {
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message'); 
    
    for (let i = 1; i <= name ; i++) {
        let r = name % i;
            if (r == 0){
                str += i + ', '
                }
      
    }


});