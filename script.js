const screen = document.getElementById('screen');

function appendToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        // eval() handles the math logic automatically
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(clearScreen, 1500);
    }
}