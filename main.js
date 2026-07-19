const btn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
const statusMessage = document.querySelector('#status-message');
let todos = [];
const STORAGE_KEY = 'todos';

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
  //localStorage.setItem(保存名, 保存する文字列);  JSON.stringify(JavaScriptのデータ);//
  /*localStorage：ブラウザが用意している保存先
setItem()：ブラウザが用意している保存メソッド
JSON.stringify()：JavaScriptが用意している文字列変換(JSONに変える)メソッド*/
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}


async function loadTodos() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);

  if (savedTodos !== null) {
    todos = JSON.parse(savedTodos);
    statusMessage.textContent = '';
    render();
    return;
  }

  statusMessage.textContent = '読み込み中...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

    if (!response.ok) {
      throw new Error('Todoの取得に失敗');
    }

    const apiTodos = await response.json();
    const convertedTodos = apiTodos.map((apiTodo) => {
      return {
        id: apiTodo.id,
        text: apiTodo.title,
        done: apiTodo.completed,
      };
    });

    todos = convertedTodos;
    statusMessage.textContent = '';
    render();
  } catch (error) {
    statusMessage.textContent = 'Todoの読み込みに失敗しました';
    console.log('通信に失敗しました', error);
  }
}

loadTodos();
