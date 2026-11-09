
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("addButton");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    if (num1.value.trim() === "" || num2.value.trim() === "") {
        result.textContent = "Please enter both numbers!";
        return;
    }

    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);

    const sum = firstNumber + secondNumber;

    result.textContent = "Result: " + sum;

});
