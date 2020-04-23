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

