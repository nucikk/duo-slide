function add(a,b) {
    return a + b;
}
function getValue() {
    let firstNumber = parseInt(document.getElementById("number-first").value);
    let secondNumber = parseInt(document.getElementById("number-second").value);
    return add(firstNumber,secondNumber)
}

function calculate() {
    let resultElement = document.getElementById("result");
    resultElement.innerText = getValue();
    resultElement.style.display = "block"
}