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

次回は、Milestone 3「削除」に進む。`id` を使ってどのTODOを消すか特定し、`filter` を学ぶ。
