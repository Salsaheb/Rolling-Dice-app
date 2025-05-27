let dice;
let stopped = true;
let interval;

const dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

window.onload = function () {
    dice = document.getElementById("dice");
    change();  // Show a dice face immediately on load
    // Optionally start rolling right away:
    // stopstart();
};

function change() {
    const random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

function stopstart() {
    if (stopped) {
        interval = setInterval(change, 100); // Start rolling
        stopped = false;
    } else {
        clearInterval(interval); // Stop rolling
        stopped = true;
    }
}
