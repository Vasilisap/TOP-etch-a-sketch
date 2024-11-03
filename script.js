const container = document.querySelector(".grid-container");
const btnSize = document.querySelector("#btn-size");

const getUserInputSize = () => {
  const input = prompt(
    "Please select the number of squares for your grid\n1-100"
  );
  if ((isNaN(input) && !Number.isInteger(input)) || input < 1 || input > 100) {
    console.log(typeof input);

    alert("Please choose between 1-100 numbers only");
  } else {
    setGridSize(input);
  }
};

const setRandomColor = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }

  return color;
};

const setGridSize = (MAX_GRID_SIZE = 16) => {
  container.innerHTML = ``;
  for (let i = 0; i < MAX_GRID_SIZE; i++) {
    container.insertAdjacentHTML("afterbegin", `<div class='grid-row'>`);
    const gridRow = document.querySelector(".grid-row");

    for (let i = 0; i < MAX_GRID_SIZE; i++) {
      gridRow.insertAdjacentHTML("afterbegin", `<div class='grid-square'>`);
    }
  }
};

container.addEventListener("mouseover", (e) => {
  if (e.target === container) return;

  const target = e.target;
  if (!target.dataset.color) {
    const randomColor = setRandomColor();
    target.style.backgroundColor = randomColor;
    target.style.opacity = 0.1;
    target.dataset.color = randomColor;
  }

  if (target.style.opacity < 1) {
    if (target.dataset.timeshover && target.dataset.timeshover < 10) {
      target.style.opacity = parseFloat(target.style.opacity) + 0.1;

      target.dataset.timeshover++;
    } else {
      target.dataset.timeshover = 1;
    }
  }
});

btnSize.addEventListener("click", getUserInputSize);

setGridSize();
