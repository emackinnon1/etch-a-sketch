window.onload = makeGrid(16, 16);




function makeGrid(rowNum, colNum) {
  const container = document.getElementById('container');
  for (i = 0; i < rowNum; i++) {
        for (j = 0; j < colNum; j++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            container.appendChild(newCell);
          }
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
