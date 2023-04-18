//Задание 1
let stroka = "";
for(let i = 1; i <= 50; i++){
    stroka += `${i} `;
}
console.log(stroka);

//Задание 2
for(let j = 50; j>= 25; j--){
    console.log(j);
}

console.log("Задание 3 1-м способом")
//Задание 3, 1-й способ
for(let k = 2500; k<= 3000; k++){
    if(k % 2 != 0){
        console.log(k);
    }
}
console.log("Задание 3 2-м способом")
//Задание 3, 2-й способ
for(let k = 2500; k<= 3000; k++){
    if(k % 2 == 0) continue; 
        console.log(k);
}