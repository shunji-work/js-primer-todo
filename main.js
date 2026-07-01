const btn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
let todos = [];

btn.addEventListener('click', () => {
  const text = input.value;
  const id = Date.now();
  todos.push({ id, text });
  render();
  input.value = "";
});

function render() {
  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    ul.appendChild(li);
  });
}
