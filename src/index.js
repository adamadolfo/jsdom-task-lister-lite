
document.addEventListener("DOMContentLoaded", () => {
  getForm()
});

function getForm() {
  let formEl = document.querySelector("#create-task-form")
  formEl.addEventListener('submit', handleSubmit)
  let button = document.querySelector("#button")
  button.addEventListener('click', handleDelete)
}


function addToDo(toDo, priority) {
  let liEle = document.createElement("li")
  let ulEle = document.querySelector("#tasks")
  liEle.innerText = toDo
  if (priority == "high") { 
    liEle.style.color = "red"
  } else if (priority == "medium") {
    liEle.style.color = "yellow"
  } else {
    liEle.style.color = "green"
  }
  ulEle.appendChild(liEle)
}
  

function handleSubmit(e) {
  e.preventDefault()
  let input = document.querySelector("#new-task-description").value
  let priority = document.querySelector("#drop-down").value
 
  addToDo(input, priority)
}

function handleDelete(e) {
  e.preventDefault()
  ulEle = document.querySelector("#tasks")
  ulEle.lastChild.remove()

}