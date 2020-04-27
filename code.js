// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input !== "string" || isNaN(parseFloat(input)) === false || input === "") {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isVowel(input) {
    if (typeof input === "string") {
        return input.toLowerCase() === "a" || input.toLowerCase() === "e" || input.toLowerCase() === "i" || input.toLowerCase() === "o" || input.toLowerCase() === "u";
    } else {
        return false;
    }
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}