const display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Show error for invalid expressions
    }
}

// Calculate the square root
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate logarithm (base 10)
function calculateLog() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate sine
function calculateSin() {
    try {
        display.value = Math.sin((Math.PI / 180) * eval(display.value)); // Convert degrees to radians
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate cosine
function calculateCos() {
    try {
        display.value = Math.cos((Math.PI / 180) * eval(display.value)); // Convert degrees to radians
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate tangent
function calculateTan() {
    try {
        display.value = Math.tan((Math.PI / 180) * eval(display.value)); // Convert degrees to radians
    } catch (error) {
        display.value = 'Error';
    }
}
