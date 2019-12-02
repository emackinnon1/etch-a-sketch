const container = document.getElementById('container');


function makeGrid(rowNum, colNum) {
  for (i = 0; i < rowNum; i++) {
        for (j = 0; j < colNum; j++) {
            let newCell = document.createElement("div");
            newCell.className = "cell";
            container.appendChild(newCell);
          }
        }
      }



makeGrid(16, 16);
