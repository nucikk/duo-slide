const headerMenu = ["Home", "About", "Blog", "Contact"];

const findList = document.getElementById("menu")

function createElementAddText(text) {
    const element = document.createElement("li");
    element.innerText = text;
    findList.appendChild(element)
}

function generateMenu () {
    for (let i = 0; i < headerMenu.length; i++) {
        createElementAddText(headerMenu[i])
        }
}

generateMenu();

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


function ChangeStyle() {
    let elements = document.getElementsByClassName("second");
    let firstElement = document.getElementsByClassName("first");
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "#b11616"
    }

    for (let i = 0; i < firstElement.length; i++) {
        setTimeout(() => {
            firstElement[i].style.opacity = 0.8
        },1000);
        setTimeout(() => {
            firstElement[i].style.opacity = 0.5
        },2000);
        setTimeout(() => {
            firstElement[i].style.opacity = 0
        },3000)
    }
    
}

