//Задание 1
let first = 5;
let second = prompt("Введите число");
switch(+second) {
    case first: console.log("Равенство верно - да");
    break;
    case (first + 1): 
    case (first + 2):
    case (first + 3):
             console.log("Равенство неверно - нет");
    break;

    default: console.log("Не сработало");
}

//Задание 2
let monthNumber = +prompt("Введите номер месяца в году");
switch(monthNumber){
    case 1:
    case 2:
    case 3: console.log("Это зима");
        break;
    case 4:
    case 5:
    case 6: console.log("Это весна");
        break;
    case 7:
    case 8:
    case 9: console.log("Это лето");
        break;
    case 10:
    case 11: 
    case 12: console.log("Это осень");
        break;
    default: console.log("Вы ввели неизвестный порядковый номер месяца, должен быть от 1 до 12");
}


//Задание 3
let varFirst = "first";
let varSecond = null;
let varThird = "third";

let compareResult = varFirst ?? varSecond ?? varThird;
console.log(`The variable  ${compareResult} is the first not null`);
