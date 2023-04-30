//Задание 1
const btn1 = document.querySelector('.btn');
const div1 = document.querySelector('.element');
let x = 1000
let y = 1000;

btn1.onclick = function(){
    div1.style.width = `${x}px`;
    div1.style.height = `${y}px`;
}

//Задание 2
const btn2 = document.querySelector('.bnt2');
btn2.onclick = function(){
    div1.classList.add("first");
    div1.classList.add("second");
    div1.classList.add("third");
    logging();
}

//Задание 3
const btn3 = document.querySelector('.bnt3');
btn3.onclick = function(){
    div1.classList.remove("first");
    logging();
}

//Дополнительная проверка логирования
function logging(){
let mas = document.querySelectorAll('.second');
    for(let i = 0; i < mas.length; i++){
     console.log(mas[i]);
    }
}