// fetch('https://automarine25.ru/')
// .then(data => {
//     console.log(data);
//     console.log(data.text());
// })

// fetch('https://automarine25.ru/')
// .then(data => {
//     console.log(data);
//     data.text()
//     .then(data2 => {
//             console.log(data2);
//         }
//     );
// })

// fetch('https://automarine25.ru/')
// .then(
//     data => {
//         console.log(data);
//         return data.text();
//     }
// )
// .then(
//     data => {
//         console.log(data);
//     }
// )

// fetch('https://automarine25.ru/')
// .then(
//      data => data.text()  
// )
// .then(
//     data => {
//         console.log(data);
//     }
// )

let a = new Promise((resolve,reject) => {
    fetch('https://automarine25.ru/')
    .then(data => {
        resolve(data.text())
    })
})

let b = new Promise((resolve,reject)=>
{
    fetch('http://127.0.0.1:8081')
    .then(data =>
        resolve(data.text()))
}
)

// a.then(data =>{
//     console.log(data);
// })

Promise.all([b,a])
.then(
    data => {
        console.log(data);
    }
)