//Задание 1
let mySet = new Set();
mySet.add('e');
mySet.add('r');
mySet.add('i');
mySet.add('k');
mySet.add('t');
mySet.add('h');
mySet.add('e');
mySet.add('b');
mySet.add('e');
mySet.add('s');
mySet.add('t');
console.log(mySet);

//Задания 2-3
const btn = document.querySelector('.addToSet');
const inp = document.querySelector('.text');
const bool = document.querySelector('.boolean');


btn.onclick = function(){
    if(mySet.has(inp.value)){
        bool.textContent = "true"
    }   else {
        bool.textContent = "false"
    }
    mySet.add(inp.value);   
    console.log(mySet);
}

//Задание 4
const btnArray = document.querySelector('.arrayFilter');
let oldArray = [1,2,3,4,5,6,7,8,9,10];
let newArray = [];

btnArray.onclick = function(){
    for(key of oldArray){
        if(key > 5){
            newArray.push(key);
        }
    }
    console.log(newArray);
    newArray.splice(0,newArray.length);
}