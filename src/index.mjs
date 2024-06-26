import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値をテキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  console.log(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
