document.addEventListener('DOMContentLoaded', function() {
    let year = prompt("Введите число, чтобы узнать какой год ");
     
    //   if  (Math.floor(num % 400 === 0)){
    //     alert(`Високосный год`);

    // } else if (Math.floor(num % 4 === 0)){
    //     alert(`Високосный год `);

    // } else if (Math.floor(num % 100 === 0)){
        
    //     alert(" не Високосный год");

    // } else {
    //     alert("хз");
    // }


    if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
        alert("Входной год:является високосным годом");
      } else {
        alert("Входной год НЕ является високосным годом"); 
      }
}); 