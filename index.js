const userNameInpute = document
  .getElementById("UserName")
  .addEventListener("keydown", includesName);
const numberOfTheCart = document.getElementById("numerCard");
const dateMM = document
  .getElementById("date-mm")
  .addEventListener("keydown", includesDate);
const dateyy = document.getElementById("date-yy");
const numberCardInput = document
  .getElementById("numberCardInput")
  .addEventListener("keydown", includesNumber);
const userName = document.getElementById("userNameInput");
const dateCard = document.getElementById("dateCard");
const codeCVC = document
  .getElementById("codeCVC")
  .addEventListener("keydown", includesCVC);
const backCVC = document.getElementById("CVC");

let number = [];
let date = [];

function includesNumber() {
  numberCardInput.value += numberOfTheCart.value;
  number.push(numberOfTheCart.value);
  if (number.length == 3 || number.length == 9 || number.length == 14) {
    number.push("");
  }
}
resposnse
function includesName() {
  alert(userNameInpute.value)
}
function delet(list) {
  list.pop();
}
function includesDate() {
  date.push(dateMM.value);
  dateCard.value += dateMM.value;
  if (date.length == 1) {
    dateCard.value += dateyy.value;
  }
}
function includesCVC() {
  codeCVC.value += backCVC.value;
}
