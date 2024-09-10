export function done(taskCard,updateLocalStorage){
    taskCard.classList.add('completed')
    updateLocalStorage()
}

export function editTasks(taskTitle,taskDescription,Date,updateLocalStorage){
    Swal. fire({
        showCancelButton: true,
        title: 'Multiple inputs',
        html:'<label for="title"> Enter The Title of the task </label>'+
            '<input id="swal-input1" class="swal2-input title" name="title" type="text">' +
            '<label for="details">Enter details about the Task</label>'+
            '<input id="swal-input2" class="swal2-input details" name="details" type="text">' +
            '<label for="date">Enter the date of the Task</label>'+
            '<input type="date" name="date" id="swal-input3" class="swal2-input date">',
        focusConfirm: false,
        preConfirm: () => [
            document. querySelector('#swal-input1').value,
            document. querySelector('#swal-input2').value,
            document. querySelector('#swal-input3').value,
        ]
    }).then(result => {
        taskTitle.innerText = result.value[0];
        taskDescription.innerText = result.value[1];
        Date.innerText = result.value[2];
        updateLocalStorage()
    });
}



export function deleteElement(updateLocalStorage) {
    const trash = document.querySelectorAll('.fa-trash-can')
    console.log(trash)
    trash.forEach(element => {
        element.addEventListener('click', () => {
            console.log(element);
            element.parentElement.parentElement.remove()
            updateLocalStorage()
        })
    })
}

