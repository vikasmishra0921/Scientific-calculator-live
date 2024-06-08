document.addEventListener("DOMContentLoaded", function () {

    console.log("Document is ready")
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");

    let currentValue = "";

    function evaluateResult() {
        const convertedValue = currentValue.replace("X", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("ln", "Math.log")
            .replace("π", "Math.PI")
            .replace("log", "Math.log10")
            .replace("e", "Math.E")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt")
        // const result = eval(currentValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener("click", function () {
            const value = button.innerText


            try {
                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;

                } else if (value == "=") {
                    evaluateResult();
                } else {
                    currentValue += value;
                    display.value = currentValue;
                }

            } catch (error) {
                console.log(error);
                currentValue = "ERROR";
                display.value = currentValue;
            }
        })
    }

});