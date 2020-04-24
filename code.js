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
    if (parseFloat(input) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    return input === "a" || input === "A"
}