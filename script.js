let randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
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