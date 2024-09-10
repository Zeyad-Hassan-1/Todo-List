import {done,editTasks,deleteElement} from "./Functions.js"

const projectCreate = document.querySelector(".projectCreate");
const projectPage = document.querySelector('.projects-page');

if(projectCreate) {
    projectCreate.addEventListener("click", () => {
        Swal.fire({
            title: 'Create Project',
            html: '<label for="title">Title Of Your New Project</label>'
                + '<input id="swal-input1" type="text" class="swal2-input title" name="title">'
                + '<label for="details">Enter details about the Task</label>'
                + '<input id="swal-input2" type="text" class="swal2-input details" name="details">',
            focusConfirm: false,
            preConfirm: () => [
                document.querySelector('#swal-input1').value,
                document.querySelector('#swal-input2').value,
            ]
        }).then(result => {
            if (result.isConfirmed) {
                createProject(result.value[0], result.value[1]);
                AddTasks()
            }
        })
    })
}
function createProject(title, details) {
    const projectContainer = document.createElement('div')
    const TasksContainer = document.createElement('div')
    const projectTitle = document.createElement('h3')
    const container = document.createElement('div')
    const projectDetails = document.createElement('p')
    const AddTask = document.createElement('button')
    const DeleteProject = document.createElement('button')
    const ButtonContainer = document.createElement('div')
    const AddTaskText = document.createTextNode('Add task')
    const DeleteProjectText = document.createTextNode('Delete Project')
    const titleText = document.createTextNode(title)
    const taskDetails = document.createTextNode(details)
    TasksContainer.classList.add('tasksContainer')
    DeleteProject.classList.add('deleteBtn')
    AddTask.classList.add('AddTaskButton')
    DeleteProject.append(DeleteProjectText)
    AddTask.append(AddTaskText)
    ButtonContainer.append(AddTask)
    ButtonContainer.append(DeleteProject)
    ButtonContainer.classList.add('ButtonContainer')
    container.append(projectTitle, projectDetails)
    projectTitle.appendChild(titleText)
    projectDetails.appendChild(taskDetails)
    projectContainer.append(container)
    projectContainer.append(ButtonContainer)
    projectContainer.append(TasksContainer)
    projectContainer.classList.add("projectCard")
    projectPage.append(projectContainer);
    updateStorage()
    // AddTasks()
    deleteProject()
}

window.onload = () => {
    const savedItems = localStorage.getItem('Projects');
    console.log(savedItems);
    if (savedItems) {
        projectPage.innerHTML = savedItems;
    }
    const editIcons = document.querySelectorAll('.fa-pen-to-square')
    const CheckIcons = document.querySelectorAll('.fa-circle-check');
    CheckIcons.forEach(icon => {
        icon.addEventListener('click',()=>{
            done(icon.parentElement.parentElement.querySelector('.detailsContainer'),updateStorage);
        })
    })
    editIcons.forEach(icon =>{
        icon.addEventListener('click',()=>{
            const card = icon.parentElement.parentElement.querySelector('.detailsContainer')
            editTasks(card.querySelector('h3'),card.querySelector('p:nth-child(2)'),card.querySelector('p:nth-child(3)'),updateStorage)
        })
    })
    deleteElement(updateStorage)
    AddTasks()
    deleteProject()
}


function deleteProject() {
    const deleteButtons = document.querySelectorAll('.deleteBtn')
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.parentElement.remove()
            updateStorage()
        })
    })
}


function AddTasks() {
    const addTasksButtons = document.querySelectorAll('.AddTaskButton')
    addTasksButtons.forEach(addTask => {
        addTask.addEventListener('click', () => {
            const TaskCard = document.createElement('div')
            TaskCard.classList.add('taskCard')
            const icon1 = document.createElement("i")
            const icon2 = document.createElement("i")
            const icon3 = document.createElement("i")
            icon1.classList.add("fa-regular", "fa-circle-check");
            icon2.classList.add("fa-solid", "fa-pen-to-square");
            icon3.classList.add("fa-regular", "fa-trash-can");
            const DetailsContainer = document.createElement('div')
            DetailsContainer.classList.add('detailsContainer')
            const IconsContainer = document.createElement('div')
            IconsContainer.append(icon1,icon2,icon3)
            IconsContainer.classList.add("IconsContainer")
            const TaskTitle = document.createElement('h3')
            const TaskDescription = document.createElement('p')
            const TaskDate = document.createElement('p')
            DetailsContainer.append(TaskTitle,TaskDescription,TaskDate)
            TaskCard.append(DetailsContainer,IconsContainer)
            addTask.parentElement.parentElement.querySelector(".tasksContainer").append(TaskCard)
            Swal.fire({
                title: "Create A new Task",
                html: '<label for="title">Title Of Your New Task</label>'
                    + '<input id="swal-input1" type="text" class="swal2-input title" name="title">'
                    + '<label for="details">Enter details about the Task</label>'
                    + '<input id="swal-input2" type="text" class="swal2-input details" name="details">'
                    + '<label for="Date">Enter Date of the Task</label>'
                    + '<input id="swal-input3" type="date" class="swal2-input date" name="date">',
                focusConfirm: false,
                preConfirm: () => [
                    document.querySelector('#swal-input1').value,
                    document.querySelector('#swal-input2').value,
                    document.querySelector('#swal-input3').value,
                ]
            }).then(result => {
                if (result.isConfirmed) {
                    TaskTitle.innerHTML = result.value[0]
                    TaskDescription.innerHTML = result.value[1]
                    TaskDate.innerHTML =result.value[2]
                    updateStorage()
                }
            })
            icon1.addEventListener('click',()=>{
                done(DetailsContainer,updateStorage)
            })
            icon2.addEventListener('click',()=>{
                editTasks(TaskTitle,TaskDescription,TaskDate,updateStorage)
            })
            icon3.addEventListener('click',()=>{
                icon3.parentElement.parentElement.remove()
                updateStorage()
            })
        })
    })
}


function updateStorage(){
    localStorage.setItem('Projects', projectPage.innerHTML)
}