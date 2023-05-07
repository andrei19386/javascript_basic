//Задание 1
let mas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const btn5 = document.querySelector("#return5");
btn5.onclick = function(){
    let h2 = document.querySelector(".element");
    h2.innerHTML = mas[4];//Индекс пятого элемента равен 4, поскольку нумерация начинается с нуля
}


//Задание 2
function getElements(isOdd,element){
    let masResult = [];
    for(let i = 0; i < masOfNumbers.length; i++){
        if(masOfNumbers[i]%2==isOdd) masResult.push(masOfNumbers[i]);
    } //Перебираем все элементы и записываем в новый массив
    for(let i = 0; i < masResult.length; i++){
        element.innerHTML += masResult[i] + " ";
    }//Выводим элементы из массива в элемент Web-страницы
}

const masOfNumbers = [20, 75, 60, 90, 25, 113, 444];
const btnEven = document.querySelector('.returnEven');
btnEven.onclick = function(){
    let even = document.querySelector('.even');
    getElements(false,even);
    
}

//Задание 3
let masOdd = [];
const btnOdd = document.querySelector('.returnOdd');
btnOdd.onclick = function(){
    let odd = document.querySelector('.odd');
    getElements(true,odd);
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