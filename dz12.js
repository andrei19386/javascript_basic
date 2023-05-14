// document.querySelector('.one').onclick = function(event) {
//     console.log(event);
//     console.log('Это первый блок');
    
//     }
//     document.querySelector('.two').oncontextmenu = function(){
//     console.log('Блок 2');
//     return false
//     }
//     let width = 100
//     document.querySelector('.there').onmousemove = function () {
//     document.querySelector('.there').style.width = width +'px'
//     width++
//     }

// document.querySelector('.there').onmouseleave = function (){
//     document.querySelector('.there').style.background = 'white'
// }

// document.querySelector('.there').onmouseenter = function () {
//     document.querySelector('.there').style.background ='pink'
// }

// document.querySelector('.there').onmouseleave = function (){
//     document.querySelector('.there').style.background = 'white'
// }
            
// document.querySelector('.there').onmousedown = function(){
//     document.querySelector('.there').style.background = 'red'
// }
            
// document.querySelector('.there').onmouseup = function() {
//     document.querySelector('.there').style.background = 'green'
// }


//Задание 1
document.querySelector('.four').onclick = function(){
    let width = document.querySelector('.four').clientWidth
    let height = document.querySelector('.four').clientHeight;
    width+=15;
    height+=15;
    document.querySelector('.four').style.width = width+'px';
    document.querySelector('.four').style.height = height+'px';
}

//Задание 2
document.querySelector('.five').ondblclick = function(){
    let data = document.querySelector('.five').getAttribute("data");
    console.log(data);
}

//Задание 3
document.querySelector('.image').onclick = function(){
    document.querySelector('.image').outerHTML = "<div>2</div>"
}

//Задание 4
document.querySelector('.input1').onkeypress = function(event){
    let input2 = event.keyCode;
    document.querySelector('.output1').innerHTML = input2;
}

//Задание 5
document.querySelector('.input2').onkeypress = function(event){
    //console.log(event.key);
    let input2 = event.key;
    if(input2 == parseInt(input2,10)){
        //console.log(false);
        document.querySelector('.output2').innerHTML = false;
    } else {
        //console.log(true);
        document.querySelector('.output2').innerHTML = true;
    }
}