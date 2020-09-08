console.log("It works");

function createCard() {
  document.querySelector("#card").innerHTML = "something here 2";
  console.log("from createcard");
}

function createCard() {
  document.querySelector("#card").innerHTML = "something here 3";
  console.log("from createcard");
}

document.querySelector(".btn").addEventListener("mouseenter", createCard);

document.querySelector(".btn2").addEventListener("click", createCard);
