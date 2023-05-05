//Задание 1
let mas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const btn5 = document.querySelector("#return5");
btn5.onclick = function(){
    let h2 = document.querySelector(".element");
    h2.innerHTML = mas[4];//Индекс пятого элемента равен 4, поскольку нумерация начинается с нуля
}

//Задание 2
const masOfNumbers = [20, 75, 60, 90, 25, 113, 444];
let masEven = [];
const btnEven = document.querySelector('.returnEven');
btnEven.onclick = function(){
    let even = document.querySelector('.even');
    for(let i = 0; i < masOfNumbers.length; i++){
        if(masOfNumbers[i]%2==0) masEven.push(masOfNumbers[i]);
    } //Перебираем все элементы и четные записываем в новый массив
    for(let i = 0; i < masEven.length; i++){
        even.innerHTML += masEven[i] + " ";
    }//Выводим элементы из массива в элемент Web-страницыы
}

//Задание 3
let masOdd = [];
const btnOdd = document.querySelector('.returnOdd');
btnOdd.onclick = function(){
    let odd = document.querySelector('.odd');
    for(let i = 0; i < masOfNumbers.length; i++){
        if(masOfNumbers[i]%2!=0) masOdd.push(masOfNumbers[i]);
    } //Перебираем все элементы и нечетные записываем в новый массив
    for(let i = 0; i < masOdd.length; i++){
        odd.innerHTML += masOdd[i] + " ";
    }//Выводим элементы из массива в элемент Web-страницыы
}

//Задание 4
let mas2D = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

const btnMas2D = document.querySelector('.returnMas2D');
btnMas2D.onclick = function(){
    let mas2DReverseOrder = document.querySelector('.mas2D')
    for(let i = mas2D.length - 1; i >= 0; i--) {
        for(let j = mas2D[i].length - 1; j>=0; j--) {
            mas2DReverseOrder.innerHTML += mas2D[i][j] + " ";
        }
        mas2DReverseOrder.innerHTML += "<br>";
    }
}