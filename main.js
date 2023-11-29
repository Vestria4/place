document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const cellSize = 10;
    const rows = canvas.height / cellSize;
    const cols = canvas.width / cellSize;

    const grid = Array.from({ length: rows }, () => Array(cols).fill("#ffffff"));

    function drawGrid() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                context.fillStyle = grid[i][j];
                context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }

    function updateCell(x, y, color) {
        const i = Math.floor(y / cellSize);
        const j = Math.floor(x / cellSize);
        grid[i][j] = color;
    }

    function handleMouseClick(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const color = getRandomColor();
        updateCell(mouseX, mouseY, color);
        drawGrid();
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    canvas.addEventListener("mousedown", handleMouseClick);

    drawGrid();
});
