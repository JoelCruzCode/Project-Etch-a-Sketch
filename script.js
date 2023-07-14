// dynamically change height to adjust to number of grids
// create a button to choose grid number,
// create reset button
// create hover affect
// create button for colors

const container = document.querySelector(".container");
const blackBtn = document.querySelector(".black-btn");
const blueBtn = document.querySelector(".blue-btn");
let color;
let grid;

const createGrids = function (gridValue = 20 * 20) {
  for (i = 0; i < gridValue; i++) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }
};

const colorPicker = function () {
  color = this.textContent;
  console.log(color);
};

createGrids();

container.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = color;
});

blackBtn.addEventListener("click", colorPicker);
blueBtn.addEventListener("click", colorPicker);
