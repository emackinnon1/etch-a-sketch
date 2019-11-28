const container = document.getElementsByClassName('container');
const grid = document.createElement('div');
grid.id = 'grid';
container.appendChild.(grid);

function layout(height, width) {
  container.style.gridTemplateColumns = `repeat(${width}), 1fr`;
  container.style.gridTemplateRows = `repeat(${height}), 1fr`;
}
