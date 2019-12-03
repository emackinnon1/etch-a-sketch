const container = document.getElementById('container');
/*const cell = document.querySelectorAll('.cell');*/

function makeGrid(rowNum, colNum) {
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
  const cell = document.querySelectorAll(".cell");
  cell.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#000000';
    });
  });
}





makeGrid(16, 16);
