const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;

        // Replace constants
        expression = expression.replace(/\bpi\b/g, "Math.PI");
        expression = expression.replace(/\be\b/g, "Math.E");

        // Replace functions
        expression = expression.replace(/sqrt/g, "Math.sqrt");
        expression = expression.replace(
    /sin\((.*?)\)/g,
    "Math.sin(($1) * Math.PI / 180)"
);

expression = expression.replace(
    /cos\((.*?)\)/g,
    "Math.cos(($1) * Math.PI / 180)"
);

expression = expression.replace(
    /tan\((.*?)\)/g,
    "Math.tan(($1) * Math.PI / 180)"
);
        expression = expression.replace(/log/g, "Math.log10");
        expression = expression.replace(/exp/g, "Math.exp");
        expression = expression.replace(/abs/g, "Math.abs");
        expression = expression.replace(/floor/g, "Math.floor");
        expression = expression.replace(/ceil/g, "Math.ceil");
        expression = expression.replace(/round/g, "Math.round");

        // Antilog (10^x)
        expression = expression.replace(/antilog\((.*?)\)/g, "10**($1)");

        // Evaluate
        display.value = Function('"use strict"; return (' + expression + ')')();

    } catch (error) {
        display.value = "Error";
    }
}