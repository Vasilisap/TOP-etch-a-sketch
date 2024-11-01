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
	if (!target.classList.contains("hover")) target.classList.add("hover");
});

btnSize.addEventListener("click", getUserInputSize);

setGridSize();
