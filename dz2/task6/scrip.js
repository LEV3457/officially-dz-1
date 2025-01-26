document.addEventListener('DOMContentLoaded', function() {
    let year = Number(prompt("Введите количество USD"));
    let num = prompt("Через что вы хотите вывести");
    const vallitPassword = ["EUR"];
    const valliPassword = ["UAN"];
    const vallPassword = ["AZN"];
    let EUR = 0.95;
    let UAN = 41.93;
    let AZN = 1.7;
    if (vallitPassword.includes(num)){
        alert(Math.round(year / EUR));
    } else if(valliPassword.includes(num)){
        alert(Math.round(year / UAN));
    } else if(vallPassword.includes(num)){
        alert(Math.round(year / AZN));
    } else {
        alert("не получиться")
    } 
   
    });