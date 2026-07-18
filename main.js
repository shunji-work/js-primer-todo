const btn = document.querySelector('#add-btn');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
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

  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

//awaitを使うためにasyncをつけておく//
async function loadTodos(){
  const savedTodos = localStorage.getItem(STORAGE_KEY);
//STORAGE_KEYは最初に定義した今触るTodos//

  if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  
  render();
}
  //awaitを使うためにasyncをつけておく//
  else{
    console.log("保存ナシ")
    
    //awaitで長いapiの処理が終わるまでこの関数の進みを止める。ただし、この関数じゃないほかの処理は同時並行で進む//
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    console.log(response);

    //apiで仮のデータ(response)を練習用に取ってきて、jsで使いやすいjsonという形に変える//
    const apiTodos = await response.json();
    console.log(apiTodos);
    //apiの配列の形をこのコードで使ってるtodoと同じ形式にmapで書き換えてconvertedTodosに入れなおす//
    const convertedTodos = apiTodos.map((apiTodos) => {
      return 
    });
    console.log(loadTodos);
  }
}

loadTodos();
