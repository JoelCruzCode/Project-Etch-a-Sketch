// dynamically change height to adjust to number of grids
// create a button to choose grid number,
// create reset button
// create hover affect
// create button for colors

let color;
let grid;
let gridValue;
let columns;
const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black-btn");
const blueBtn = document.querySelector(".blue-btn");
const gridBtn1 = document.querySelector(".grid-btn-1");
const gridBtn2 = document.querySelector(".grid-btn-2");
const gridBtn3 = document.querySelector(".grid-btn-3");
const resetBtn = document.querySelector(".reset-btn");

const createGrids = function (gridValue = 20 * 20, columns = 20) {
  for (i = 0; i < gridValue; i++) {
    console.log(gridValue);
    grid = document.createElement("div");
    grid.classList.add("grid");
    container.style.gridTemplateColumns = `repeat(${columns}, auto)`;
    container.appendChild(grid);
  }
};

const colorPicker = function () {
  color = this.textContent;
  console.log(color);
};

const changeGrid = function () {
  container.innerHTML = ``;
  columns = Number(this.textContent.split(" ")[0]);
  gridValue = columns * columns;
  console.log((gridValue, columns));
  createGrids(gridValue, columns);
};

const resetGrid = function () {
  container.innerHTML = ``;
  createGrids(gridValue, columns);
};

container.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = color;
});

blackBtn.addEventListener("click", colorPicker);
blueBtn.addEventListener("click", colorPicker);
resetBtn.addEventListener("click", resetGrid);
gridBtn1.addEventListener("click", changeGrid);
gridBtn2.addEventListener("click", changeGrid);
gridBtn3.addEventListener("click", changeGrid);

createGrids();
