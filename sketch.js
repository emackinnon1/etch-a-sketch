window.onload = makeGrid(16);


function makeGrid(num) {
  const container = document.getElementById('container');
  let cols = container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  let rows = container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (i = 0; i < num * num; i++) {
      let newCell = document.createElement("div");
      newCell.className = "cell";
      container.appendChild(newCell);
    }
}

function hover() {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.backgroundColor = '#000000';
    cell.style.opacity = '0.0';
    cell.addEventListener('mouseenter', (e) =>{
      e.target.style.opacity = '1';
    });
  });
}

function randomColor() {

}

function grey() {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.backgroundColor = '#000000';
    cell.style.opacity = '0.0';
    cell.addEventListener('mouseenter', (e) =>{
      e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2;
    });
  });
}

function clear() {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.opacity = '0.0';
  });

}

function makeNewGrid() {
  let first = container.firstChild;
  while (first) {
    first.remove();
    first = container.firstChild;
  }
  let input = window.prompt("How many squares along each side?");
    if (isNaN(input)) {
      prompt("That is not a number. How many squares along each side?")
    }
    if (isNaN(input)) {
      alert("That is also not a number. Setting the grid to 16 a side.")
      input = 16;
    }
    makeGrid(input);
    clear();
}

document.getElementById('clear').addEventListener("click", clear);
document.getElementById('newGrid').addEventListener("click", makeNewGrid);
document.getElementById('grey').addEventListener("click", grey);
document.getElementById('black').addEventListener("click", hover);
