const btn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
let todos = [];
const STORAGE_KEY = 'todos';
const savedTodos = localStorage.getItem(STORAGE_KEY);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
}

btn.addEventListener('click', () => {
  const text = input.value;
  const id = Date.now();
  todos.push({ id, text, done: false });
  render();
  input.value = '';
});

function render() {
  ul.innerHTML = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');

    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    todoText.style.textDecoration = todo.done ? 'line-through' : 'none';
    li.appendChild(todoText);

    ul.appendChild(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      todos = todos.filter((t) => t.id !== todo.id);
      render();
    });

    const toggleButton = document.createElement('button');
    toggleButton.textContent = todo.done ? '戻す' : '完了';
    li.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
      todos = todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            done: !t.done
          };
        }

        return t;
      });
      render();
    });
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

render();
