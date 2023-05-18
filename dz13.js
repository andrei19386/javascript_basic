// let a = [1,2,3];
// console.log(typeof a);


// let btn = document.querySelector('.qwew');
// btn.onclick = ()=>{
//     localStorage.setItem('data',JSON.stringify(a));
//     document.querySelector('.qwer').innerHTML = localStorage.getItem('data');
//     let b = localStorage.getItem('data');
//     console.log(b);
//     console.log(typeof b);
//     b = JSON.parse(b);
//     console.log(b);
//     console.log(typeof b);
//     console.log(b[0]);
//     console.log(typeof b);
// }

 

let xhttp = new XMLHttpRequest();
xhttp.withCredentials = true;

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myfunc(this.responseText);
    }
}

//xhttp.open('GET','http://127.0.0.1:8080/admin',true);

xhttp.open('GET','https://automarine25.ru/',true);

xhttp.send();

function myfunc(data){
    console.log(data);
}
