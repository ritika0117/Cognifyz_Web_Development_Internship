
const button = document.getElementById("greetButton");

button.addEventListener("click", function () {

    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    }
    else if (currentHour < 17) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Evening!";
    }

    alert(greeting);

});
