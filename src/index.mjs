import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値をテキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  div.appendChild(p);

  console.log(div);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
