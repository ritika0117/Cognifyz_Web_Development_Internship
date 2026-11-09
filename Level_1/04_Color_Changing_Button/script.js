
// Select the button
const button = document.getElementById("colorButton");

// Store different colors
const colors = [
    "#2563a6",
    "#e74c3c",
    "#27ae60",
    "#9b59b6",
    "#f39c12"
];

// Start from the first color
let index = 0;

// Change color when button is clicked
button.addEventListener("click", function () {

    index = (index + 1) % colors.length;

    button.style.backgroundColor = colors[index];

});
