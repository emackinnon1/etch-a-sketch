window.onload = makeGrid(16, 16);




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
document.getElementById('clear').addEventListener("click", clear);


const newGrid = document.getElementById('newGrid');
newGrid.addEventListener("click", function (e) {
    clear();
    let input = window.prompt("How many squares?");
    makeGrid(input, input);
});
