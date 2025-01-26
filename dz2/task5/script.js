document.addEventListener('DOMContentLoaded', function() {
    let year = prompt("Введите пятизначное число");
    if (year.length == 5){
        if (year == year.split('').reverse().join('')) {
            alert("Круто");
        } else {
            alert("Не круто");
        }
    } 
});