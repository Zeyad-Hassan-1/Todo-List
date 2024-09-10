const loadMore = document.querySelector(".loadMoreTasks")
const taskContainer = document.querySelector(".tasksContainer")

loadMore.addEventListener("click", () => {
    taskContainer.style.overflow = "scroll";
})