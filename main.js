/*const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//define buttons operator calculator based on button clicked
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    //if output has %, replace with /100 before calculating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //if del button is clicked, remove the last character from the output
    output = output.toString().slice(0, -1);
  } else {
    //if output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//add event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
*/

// calculator logic
(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equal.addEventListener("click", function (e) {
    let answer = eval(screen.value);
    screen.value = answer;
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();