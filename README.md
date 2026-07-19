# Todoアプリ学習記録

## 2026-06-29

今日は、Todoアプリの Milestone 1「追加する」まで完了。

できたこと:

- `index.html` を作成した
- 入力欄、追加ボタン、リストをHTMLに用意した
- `main.js` を読み込んだ
- `document.querySelector` でHTML要素をつかんだ
- `addEventListener` でボタンクリックに反応させた
- `input.value` で入力文字を読んだ
- `document.createElement('li')` で新しい項目を作った
- `textContent` で項目に文字を入れた
- `appendChild` でリストに追加した
- 追加後に入力欄を空にした

今日の範囲:

- DOM操作: JavaScriptからHTMLを操作すること
- イベント: クリックなど、画面上で起きた出来事に反応すること

次回は、Milestone 2「配列で状態を持つ」に進む前に、`main.js` を見ずにもう一度書けるか確認する。

## 2026-07-01

今日は、Todoアプリの Milestone 2「配列を状態にする」の基本形まで完了。

できたこと:

- `todos` という配列を用意した
- クリック時に入力文字を読み、`{ id, text }` の形で `todos` に追加した
- `Date.now()` でTODOごとの `id` を作った
- `render()` 関数を作り、画面表示の処理を切り出した
- `render()` の最初で `ul` を空にした
- `todos.forEach` で配列を1つずつ処理した
- 配列の中身から `li` を作り、`todo.text` を表示した

今日の範囲:

- 配列: 複数のTODOをまとめて持つ箱
- オブジェクト: `id` や `text` のような名前つき情報をまとめる箱
- 状態: 画面の元になるデータ
- render: 状態をもとに画面を作り直す処理

今日の理解:

- 直接DOMを増やすのではなく、`todos` を本体として持つ
- 画面の `ul` / `li` は、`todos` を見せるための表示
- `createElement` で作った要素は、`appendChild` するまで画面には出ない

追記: Milestone 3「削除する」も完了。

追加でできたこと:

- 各 `li` に削除ボタンを追加した
- 削除ボタンに `click` イベントを登録した
- クリックされたTodoの `id` を使って、削除対象を特定した
- `filter` で「押されたTodo以外」を残す新しい配列を作った
- `todos` を新しい配列で上書きしてから、`render()` で画面を作り直した

追加で学んだこと:

- `filter`: 条件に合う要素だけを残した新しい配列を作る処理
- `!==`: 左右が違うときに `true` になる比較
- クロージャ: あとで動く関数が、そのとき使っていた変数を覚えている仕組み

今日の理解:

- `todos` 配列が本体で、画面の `li` はそれを表示しているだけ
- 削除は `li` を直接消すのではなく、`todos` を変えてから `render()` する
- `addEventListener` に渡すアロー関数は、クリックされたあとで動く処理

追記: Milestone 4「完了トグル」も完了。

追加でできたこと:

- Todoに `done: false` を追加し、完了状態を持たせた
- 完了ボタンを追加し、押したTodoだけ `done` を切り替えた
- `map` で、配列の長さは変えずに1つだけ中身を変えた
- スプレッド構文 `{ ...t, done: !t.done }` で、元のTodoをコピーして `done` だけ反転した
- 三項演算子で、完了なら打ち消し線、未完了なら普通の表示にした
- 完了済みのボタン文字を「戻す」に変えた

追加で学んだこと:

- `map`: 各要素を変えた新しい配列を作る処理
- `done`: `true` / `false` で完了状態を持つ情報
- `!`: `true` と `false` を反対にする記号
- 三項演算子: `条件 ? trueのとき : falseのとき` で値を選ぶ書き方
- スプレッド構文: オブジェクトの中身をコピーして、一部だけ変える書き方

今日の理解:

- 削除は数を減らすので `filter` を使う
- トグルは数を変えずに1つだけ更新するので `map` を使う
- `=` は代入、`===` は同じか確認する比較
- `todo.done` はそれ自体が `true` / `false` なので、条件としてそのまま使える

次回は、完了トグルまわりを見ずに再実装して、理解を固める。

## 2026-07-01 Milestone 5

今日は、Todoを `localStorage` に保存して、リロードしても残るようにした。

できたこと:

- `STORAGE_KEY` で保存名を決めた
- `localStorage.getItem` で起動時に保存データを読んだ
- 保存データがあるときだけ `JSON.parse` で配列に戻した
- `render()` の最後で `localStorage.setItem` を使って保存した
- `JSON.stringify` で `todos` 配列を文字列にして保存した
- 最後に `render()` を呼んで、読み込んだTodoを画面に表示した

今日の理解:

- `localStorage` は文字列しか保存できない
- 保存するときは `JSON.stringify`
- 読み込むときは `JSON.parse`
- `STORAGE_KEY` は保存場所の名前で、`todos` は実際の配列

## 2026-07-18 Milestone 6 前半

今日は、非同期処理と `fetch` の基本を学んだ。

できたこと:

- `async` 関数の中で `await` を使う流れを確認した
- `fetch` で練習用APIからTodoを取得した
- `response` はTodo本体ではなく、通信結果を入れた箱だと理解した
- `response.json()` でAPIのJSONをJavaScriptの配列へ変換した
- `map` でAPIの形式 `{ id, title, completed }` を、アプリの形式 `{ id, text, done }` に変換した
- `localStorage` に保存済みデータがある場合は、APIより優先する処理を確認した

今日の理解:

- `fetch` はPromise（あとで結果が届く約束）を返す
- `await fetch()` は通信結果を待つ
- `await response.json()` はレスポンス本文の変換を待つ
- `localStorage` はブラウザ内に保存され、APIとは別の保存場所である

## 2026-07-19 Milestone 6 完了

今日は、API取得時の成功・失敗と画面表示を仕上げた。

できたこと:

- `response.ok` でHTTP通信が成功したか確認した
- `throw new Error()` で取得失敗をエラーとして扱った
- `try/catch` でHTTPエラーと通信エラーを受け取った
- 読み込み中のメッセージを画面に表示した
- 通信失敗時のメッセージを画面に表示した
- APIから取得したTodoを `todos` に入れ、`render()` で表示・保存した
- APIから取得したTodoでも、削除・追加・完了切り替えが動くことを確認できる形にした

今日の理解:

- `response.ok` は、返事が成功かどうかを確認する
- `throw` はエラーを発生させる命令で、`catch` はそのエラーを受け取る場所である
- `response.ok` は返事が来た場合、`catch` は返事自体が来ない場合も扱う
- `loading`、成功、`error` はそれぞれ読み込み中・完了・失敗の状態である
