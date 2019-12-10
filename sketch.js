window.onload = makeGrid(16, 16);




function makeGrid(rowNum, colNum) {
  const container = document.getElementById('container');
  let cols = container.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`;
  let rows = container.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;
  for (i = 0; i < rowNum * colNum; i++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            container.appendChild(newCell);

        }
        hover();


}

function hover() {
  const cell = document.querySelectorAll(".cell")
  cell.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#000000';
    });
  });
}


const clear = document.getElementById('clear');
clear.addEventListener("click", function (e) {
  const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) => {
      cell.style.background = '#ffffff';
    });

});

const newGrid = document.getElementById('newGrid');
newGrid.addEventListener("click", function (e) {
    let input = window.prompt("How many squares?");
    makeGrid(input, input);
});
