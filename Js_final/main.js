
let storageMap = new Map();
showTasks();//get-запрос



//Пока заглушка
let countCompleted = 3;
document.querySelector('.tasks-completed').firstElementChild.innerHTML = countCompleted;



document.querySelector('.plus').onclick = () => {
    let taskText = document.querySelector('.add-task').firstElementChild.value;
    if(taskText != ''){
        let currentKey = +getMaxKey(storageMap) + 1;
        localStorage.setItem(currentKey,taskText);   //post-запрос
        document.querySelector('.no-tasks-message').style.display = "none";


        document.querySelector('.tasks-content').innerHTML += `<span class="task-box" id=task_${currentKey}>
            ${taskText}
            <button class="delete" name=${currentKey}>delete</button><button class="edit">edit</button></span>`;
            storageMap.set(currentKey,taskText);
            document.querySelector('.tasks-count').firstElementChild.innerHTML = storageMap.size;
            console.log(currentKey);
            addDeleteAction(storageMap);
        document.querySelector('.add-task').firstElementChild.value="";
    } else {
        alert("Поле ввода не может быть пустым!")
    }
}


function showTasks(){
     
     storageMap = getMapFromLocalStorage();
     console.log(storageMap);

    clearTaskBoxes();
    if(storageMap.size == 0){
        document.querySelector('.no-tasks-message').style.display = "flex";
    } else {
        document.querySelector('.no-tasks-message').style.display = "none";
        formHTMLTaskBox(storageMap);
    }
    
    document.querySelector('.tasks-count').firstElementChild.innerHTML = localStorage.length;
    addDeleteAction(storageMap);

}

function clearTaskBoxes() {
    let elements = document.querySelectorAll('.task-box');
    for (let element of elements) {
        element.remove();
    }
}

function formHTMLTaskBox(storageMap) {
    for (let entry of storageMap) {
        document.querySelector('.tasks-content').innerHTML += `<span class="task-box" id=task_${entry[0]}>
            ${entry[1]}
            <button class="delete" name=${entry[0]}>delete</button><button class="edit" >edit</button></span>`;
    }
}

function getMaxKey(storageMap){
    let max = 0;
    for(let entry of storageMap){
        if(entry[0]>max){
            max = entry[0];
        }
    }
    return max;
}

function addDeleteAction(storageMap){
    for(let entry of storageMap){  
        document.querySelector(`#task_${entry[0]} .delete`).onclick = function(){
            localStorage.removeItem(this.getAttribute("name"));//delete-запрос
            this.parentElement.remove();
            storageMap.delete(entry[0]); 
            document.querySelector('.tasks-count').firstElementChild.innerHTML = storageMap.size;        
        };
    }
}

function getMapFromLocalStorage(){
    let map = new Map();
    for(let i=0; i < localStorage.length;i++){
        map.set(localStorage.key(i),localStorage.getItem(localStorage.key(i)));
    }
    return map;
}