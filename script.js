let generated = document.getElementById("generatedPass");
let numberCount = document.getElementById("char-count-box");
let upperCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbol");
let submit = document.getElementById("submit-button");


let randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

submit.addEventListener("click", () => {
    let hasUpper = upperCase.checked;
    let hasLower = lowerCase.checked;
    let hasNumber = numbers.checked;
    let hasSymbol = symbols.checked;
    let numberTotal= +numberCount.value;

    generated.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, numberTotal);

});

    function generatePassword( lower, upper, number, symbol, numberTotal){
        let generatedPassword = " ";
        let typesCount = lower + upper + number + symbol;
        let typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    if(typesCount === 0) {
        return " ";
    }

    // if (parseInt(numberTotal.value) <= 7 || parseInt(numberTotal.value) < 128){
    //     return " ";
    // }

        // check for math function issue

    for(let i = 0; i < numberTotal; i += typesCount){
        typesArray.forEach(type => {
            let funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]();
        });
    }

    let finalPassword = generatedPassword.slice(0, numberTotal);

    return finalPassword;
}

//functions for generating characters needed for the generator

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbol(){
    let symbols = '!@#$%^&*()[]{}=<>?,./';
    return symbols [Math.floor(Math.random() * symbols.length)];
}