const display = document.getElementById("display");

function addToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length === 1 || display.value === "Error") {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function percentage() {
    try {
        display.value = parseFloat(display.value) / 100;
    } catch {
        display.value = "Error";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}