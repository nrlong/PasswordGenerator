let generated = document.getElementById("generatedPass");
let numberCount = document.getElementById("char-count-box");
let upperCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbol");
let submit = document.getElementById("submit-button");

// random generation function 
let randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//submit button
submit.addEventListener("click", () => {
    let hasUpper = upperCase.checked;
    let hasLower = lowerCase.checked;
    let hasNumber = numbers.checked;
    let hasSymbol = symbols.checked;
    let numberTotal = +numberCount.value;

    generated.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, numberTotal);


});

// Password Generation function
function generatePassword(upper, lower, number, symbol, numberTotal) {
    let generatedPassword = "";
    let typesCount = upper + lower + number + symbol;
    let typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return "Please select at least one option from above";  
    }


    for (let i = 0; i < numberTotal; i += typesCount) {
        typesArray.forEach(type => {
            let funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }

    let finalPassword = generatedPassword.slice(0, numberTotal);

    // restrict total characters

    if (finalPassword.length <= 7){
        return "Password must be at least 8 characters long";
    }else if (finalPassword.length > 128){
        return "Password cannot exceed 128 characters"
    }
    

    return finalPassword;
}

//functions for generating characters needed for the generator

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    let symbols = '!@#$%^&*()[]{}=<>?,./';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//copy to clipboard

// function copyFunction(){
//     let copyText = document.getElementById("generatedPass");
//     copyText.select;
//     // copyText.setSelectionRange(0, 99999); 
//     document.execCommand("copy");
//     alert("Copied Password to Clipboard");
// }
// document.querySelector("#clipboardBtn").addEventListener("click", copyFunction);