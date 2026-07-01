const btn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
let todos = [];

btn.addEventListener('click', () => {
  const text = input.value;
  const id = Date.now();
  todos.push({ id, text });
  render();
  input.value = '';
});

function render() {
  ul.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    ul.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      todos = todos.filter((t) => t.id !== todo.id);
      render();
    });
  });
}
