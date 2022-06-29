// const inputForm = document.querySelector('#create-task-form')
const ul = document.getElementById('tasks')
const input = document.querySelector('#new-task-description')


document.addEventListener("DOMContentLoaded", () => {

});

document.addEventListener('submit', (event) => {
  event.preventDefault()
  const li = document.createElement('li');
  li.textContent = input.value;
  deleteBtn = document.createElement('button')
  deleteBtn.textContent = "x"
  li.append(deleteBtn)
  ul.append(li)
  deleteBtn.addEventListener('click', () => {
    li.remove()
  });
}); 

// deleteBtn = document.createElement('button')

// deleteBtn.textContent = "x"

// deleteButton.addEventListener('click', () => {
// li.remove()
// });
