import {done, editTasks, deleteElement} from "./Functions.js"
import './Functions.js'
import './nightMode.js'

let isDefaultDeleted = false;
const inputDate = document.querySelector("#datepicker")
flatpickr("#datepicker", {
    altInput: true,
    altFormat: "j, F Y",
    dateFormat: "Y-m-d",
    inline: true,
});

const quotes = require('success-motivational-quotes');
// console.log();
function displayRandomQuote(maxLength) {
    let quoteText = quotes.getTodaysQuote().body; // احصل على اقتباس عشوائي

    // التحقق من طول الاقتباس
    while (quoteText.length > maxLength) {
        quoteText = quotes.getTodaysQuote().body; // إذا كان طول الاقتباس أكبر من maxLength، احصل على اقتباس جديد
    }

    const quote = document.querySelector(".quotes")
    quote.innerHTML = quoteText;
}


// quote.innerHTML = quotes.getTodaysQuote().body
if(window.matchMedia("(max-width: 767px)").matches){
    inputDate.setAttribute('type', 'date');
}

const container = document.querySelector('.tasksContainer')
const TasksNumberElement = document.querySelector('.tasksNumber');
tasksnumber = container.childElementCount;
TasksNumberElement.innerHTML = tasksnumber;


var tasksnumber = container.childElementCount;

document.querySelector(".taskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("Title");
    const details = formData.get("details");
    const datepicker = document.getElementById("datepicker");
    const dateValue = datepicker.value;

    let id = Date.now()

    let newTask = {
        name: name,
        details: details,
        dateValue: dateValue,
        id: id,
        isDone: false,
    }

    createCard(newTask.name, newTask.dateValue, newTask.details, updateLocalStorage, newTask.id);


    localStorage.setItem('items', container.innerHTML);
    storeData(newTask)
})


let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];

function storeData(newTask) {
    tasks.push(newTask);

    localStorage.setItem('Tasks', JSON.stringify(tasks));
    // var tasksCreatedNew = container.childElementCount ;
    tasksnumber = container.childElementCount;
    TasksNumberElement.innerHTML = tasksnumber;

}

let isFirstLoad = localStorage.getItem('isFirstLoad');

if (!isFirstLoad) {
    createCard('Learn Javascript', '07-08-2023', 'Master the language powering the modern web.', updateLocalStorage)
    createCard('Learn Javascript', '07-09-2023', 'Master the language powering the modern web.', updateLocalStorage)
    createCard('Learn Javascript', '07-10-2023', 'Master the language powering the modern web.', updateLocalStorage)
    createCard('Learn Javascript', '07-11-2023', 'Master the language powering the modern web.', updateLocalStorage)
    localStorage.setItem('isFirstLoad', 'true');
}

function DeleteAll() {
    tasksnumber = 0;
    TasksNumberElement.innerHTML = tasksnumber;
    localStorage.removeItem('items');
    localStorage.removeItem('Tasks');
    container.innerHTML = '';
    updateLocalStorage()
    isDefaultDeleted = true;
}

document.querySelector('.deleteAll').addEventListener('click', DeleteAll)

function createCard(taskTit, dateValue, taskDetails, updateLocalStorage, id) {

    const taskContainer = document.createElement("div")
    const taskCard = document.createElement("div")
    const taskTitle = document.createElement("h3")
    const taskDescription = document.createElement("p")
    const TaskIcons = document.createElement("div")
    const Date = document.createElement("p")
    const dateTextNode = document.createTextNode(`Start Date: ${dateValue}`)
    const icon1 = document.createElement("i")
    const icon2 = document.createElement("i")
    const icon3 = document.createElement("i")
    icon1.classList.add("fa-regular", "fa-circle-check");
    icon2.classList.add("fa-solid", "fa-pen-to-square");
    icon3.classList.add("fa-regular", "fa-trash-can");
    TaskIcons.appendChild(icon1);
    TaskIcons.appendChild(icon2);
    TaskIcons.appendChild(icon3);
    TaskIcons.classList.add("taskIcons")
    Date.append(dateTextNode)
    Date.classList.add('date')
    taskTitle.innerText = taskTit;
    taskDescription.innerText = taskDetails;
    taskContainer.appendChild(taskTitle)
    taskContainer.appendChild(taskDescription)
    taskContainer.appendChild(Date)
    taskCard.appendChild(taskContainer)
    taskCard.appendChild(TaskIcons)

    taskCard.classList.add("taskCard")
    icon1.setAttribute('id', `${id}`)
    icon2.setAttribute('id', `${id}`)
    taskTitle.classList.add("taskTitle")
    taskDescription.classList.add("taskDescription")
    icon3.addEventListener("click", function () {
        icon3.parentElement.parentElement.remove();
        updateLocalStorage()
    });
    icon1.addEventListener('click', () => {
        // if (localStorage.getItem('IsDone') === 'yes'){
        //     resetDone(taskCard.querySelector('.taskCard>div:nth-child(1)'),updateLocalStorage)
        // }
            done(taskCard.querySelector('.taskCard>div:nth-child(1)'), updateLocalStorage)
        tasksnumber--
    })
    icon2.addEventListener('click', () => {
        editTasks(taskTitle,taskDescription,Date,updateLocalStorage)
    })

    const container = document.querySelector('.tasksContainer')
    container.prepend(taskCard)
    updateLocalStorage()


}


function updateLocalStorage() {
    localStorage.setItem('items', container.innerHTML);
    tasksnumber = container.childElementCount;
    TasksNumberElement.innerHTML = tasksnumber;
}

window.onload = function () {
    localStorage.setItem('lightOrNight','light')
    const container = document.querySelector('.tasksContainer');
    const TasksNumberElement = document.querySelector('.tasksNumber');
    const savedItems = localStorage.getItem('items');
    console.log(savedItems);
    if (savedItems) {
        container.innerHTML = savedItems;
    }
    displayRandomQuote(100)
    const checkIcons = document.querySelectorAll('.fa-circle-check')
    const editIcons = document.querySelectorAll('.fa-pen-to-square')
    editIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const taskTitle = icon.parentElement.parentElement.querySelector('.taskTitle')
            const taskDescription = icon.parentElement.parentElement.querySelector('.taskDescription')
            const Date = icon.parentElement.parentElement.querySelector('.date')
            editTasks(taskTitle,taskDescription,Date,updateLocalStorage)
            // updateLocalStorage()
        })
    })
    checkIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const taskCard = icon.parentElement.parentElement;

                done(taskCard.querySelector('.taskCard>div:nth-child(1)'), updateLocalStorage)
                tasksnumber--
        })
    })
    tasksnumber = container.childElementCount;
    TasksNumberElement.innerHTML = tasksnumber;
    deleteElement(updateLocalStorage)
};
