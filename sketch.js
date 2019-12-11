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
        hover();
}

function hover() {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#000000';
    });
  });
}

function clear() {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.background ='#ffffff';
  });
}

function makeNewGrid() {
  let first = container.firstChild;
  while (first) {
    first.remove();
    first = container.firstChild;
  }
  let input = window.prompt("How many squares?");
  makeGrid(input);
  clear();
}

document.getElementById('clear').addEventListener("click", clear);
document.getElementById('newGrid').addEventListener("click", makeNewGrid);
