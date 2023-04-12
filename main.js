//Уроки 1-2

// console.log('Hello, world ' + (22 + 33));
// alert('Привет, это алерт');

// var a = 1; // Устаревший вариант
// let b = 3; // Современный вариант
// const c = 0;
// a = 5;
// console.log(a);

// console.log(myBirthday);
// var myBirthday = '11.11';

// let a = 'Привет';
// a = 9;
// console.log(a);

//number
// let a = Infinity;
// console.log(1000/0);
// console.log(1/2);
// NaN
// console.log(NaN**0);

//bigint
// console.log(9999999999999999999999999999999999999999999999999n)

//string

// let str1 = 'JOJO';
// let str2 = "Jojo";
// let str3 = `ANIME ${str1} ${1+2}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let check = true;
// let unCheck = false;
// console.log(1<2);
// console.log(true==1);
//document.getElementById("one");
// console.log(document.getElementById("one"));
// console.log(document.getElementById("one").innerText="Hello.word2");
// console.log(typeof check);
// console.log(typeof null);
// document.getElementById("first").innerHTML = "Это выведено";





//Домашнее задание

//Задание 1
// console.log(3);//Вывод числа
// console.log('03');//Вывод строки

//Задание 2
// console.log('Добро '+'пожаловать '+' на курс,' + ' Андрей' );

//Задание 3
// let now = new Date();
//alert(now.getDate()+" "+ (now.getMonth()+1) + " " + now.getFullYear());
//alert("Вторник, 11 апреля 2023");

//Задание 4
// document.getElementById("one").innerHTML = "Hello, world!";

//Задание 5
// console.log(typeof 1);
// console.log(typeof 1n);
// console.log(typeof 1<2);
// console.log(typeof "string");
// console.log(typeof Symbol('object'));
// console.log(typeof now);
// console.log(typeof undefined);
// console.log(typeof alert);

//Домашнее задание №3
//Задание 1
let inp = document.querySelector('.text');
let btn = document.querySelector('.check');
let out = document.querySelector('.out');

btn.onclick = function(){
    let e = inp.value;
    out.innerHTML = e;
    inp.value = "";
}

//Задание 2
let inputLabel = prompt("Введите число");
if(inputLabel>100){
    document.querySelector('#out2').innerHTML = inputLabel;
} else if(inputLabel<100){
    console.log(inputLabel);
} else {
    console.log("Поздравляем! Вы попали в нужную точку, задание в которой не регламентировано-)");
}
