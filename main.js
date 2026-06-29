const btn = document.querySelector('#add-btn')
const input = document.querySelector('#todo-input')
const ul = document.querySelector('#todo-list')
btn.addEventListener('click',() => {
const li = document.createElement('li')
li.textContent = input.value
ul.appendChild(li)
input.value = ""
});

console.log(btn);