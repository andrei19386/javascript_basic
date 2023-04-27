//Задание 1
function outputToDiv(a){
    document.querySelector("div").innerHTML = a;
}

let a = +prompt("Введите число");
outputToDiv(a);

//Задание 2
let btnAdd = document.querySelector('#add');
btnAdd.onclick = function(){
    let b = +document.querySelector('.text').value;
    a+= b;
    outputToDiv(a);
}

let btnSubtract = document.querySelector('#subtract');
btnSubtract.onclick = function(){
    let b = +document.querySelector('.text').value;
    a-= b;
    outputToDiv(a);
}

let btnMultiply = document.querySelector('#multiply');
btnMultiply.onclick = () => {
    let b = +document.querySelector('.text').value;
    a*= b;
    outputToDiv(a);
}

let btnDivide = document.querySelector('#divide');
btnDivide.onclick = () => {
    let b = +document.querySelector('.text').value;
    if(b != 0){
        a= a / b;
        outputToDiv(a);
    } else {
        alert("Делить на нуль нельзя! Введите другой делитель!")
    }
}

