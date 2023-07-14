let color;
let gridValue;
let columns;
const container = document.querySelector(".container");
const colorBtns = document.querySelectorAll(".color-btn");
const gridBtns = document.querySelectorAll(".grid-btn");
const resetBtn = document.querySelector(".reset-btn");

const createGrids = function (gridValue = 20 * 20, columns = 20) {
  for (i = 0; i < gridValue; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.style.gridTemplateColumns = `repeat(${columns}, auto)`;
    container.appendChild(grid);
  }
};

const colorPicker = function () {
  color = this.textContent;
};

const changeGrid = function () {
  container.innerHTML = ``;
  columns = Number(this.textContent.split(" ")[0]);
  gridValue = columns * columns;
  createGrids(gridValue, columns);
};

const resetGrid = function () {
  container.innerHTML = ``;
  createGrids(gridValue, columns);
};

container.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = color;
});

colorBtns.forEach((btn) => btn.addEventListener("click", colorPicker));
gridBtns.forEach((btn) => btn.addEventListener("click", changeGrid));
resetBtn.addEventListener("click", resetGrid);

createGrids();
