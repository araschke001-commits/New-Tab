let count = 0;

const button = document.getElementById("big-btn");
const countDisplay = document.getElementById("btn-count");

button.addEventListener("click", () => {
    count++;
    countDisplay.textContent = `Count: ${count}`;
});
