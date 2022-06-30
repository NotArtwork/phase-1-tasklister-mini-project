// const inputForm = document.querySelector('#create-task-form')
const ul_red = document.getElementById('red')
const ul_yellow = document.getElementById('yellow')
const ul_green = document.getElementById('green')
const input = document.querySelector('#new-task-description')
const select = document.getElementById('color-selector')
// const option = document.querySelector('#color-')
// const option1 = document.querySelector('#yellow')
// const option2 = document.querySelector('#green')
document.addEventListener("DOMContentLoaded", () => {
});

document.addEventListener('submit', (event) => {
  event.preventDefault()
  let selectedColor = select.options[select.selectedIndex].value
  const li = document.createElement('li');
  li.textContent = input.value;
  deleteBtn = document.createElement('button')
  deleteBtn.textContent = "x"
  li.append(deleteBtn)
  // ul.append(li)
console.log(selectedColor)
  if (selectedColor === "red") {
    li.style.color = selectedColor
    ul_red.append(li)
    }
  else if (selectedColor === "yellow") {
    li.style.color = selectedColor
    ul_yellow.append(li)
    }
  else if (selectedColor === "green") {
    li.style.color = selectedColor
    ul_green.append(li)
    }
  // if (selectedColor = "red") {
  //   listArray.red.unshift(li)
  //   }
  // else if (selectedColor = "yellow") {
  //     listArray.yellow.push(li)
  //   }
  // else if (selectedColor = "green") {
  //     listArray.green.splice(start, deleteCount, li)
  //   }

  deleteBtn.addEventListener('click', () => {
    li.remove()

  });
}); 
 
// deleteBtn = document.createElement('button')

// deleteBtn.textContent = "x"

// deleteButton.addEventListener('click', () => {
// li.remove()
// });
