let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let array = Array.from(buttons);

function handleInput(value) {
  if (value === '=') {
    string = eval(string);
    inputBox.value = string;
  } else if (value === 'AC') {
    string = "";
    inputBox.value = string;
  } else if (value === 'DEL') {
    string = string.substring(0, string.length - 1);
    inputBox.value = string;
  } else {
    string += value;
    inputBox.value = string;
  }
}

array.forEach(button => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (/^[0-9]$/.test(key)) {
    handleInput(key);
  } else if (key === '.') {
    handleInput(key);
  }  else if (key === '+' || key === '-' || key === '*' || key === '/') {
    handleInput(key);
  } else if (key === '%') {
    handleInput(key);
  } else if (key === 'Enter') {
    handleInput('=');
  } else if (key === 'Backspace') {
    handleInput('DEL');
  } else if (key === 'Escape') {
    handleInput('AC');
  }
});