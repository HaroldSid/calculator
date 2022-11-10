import { stringToformula } from "./functions.js";

const main = document.querySelector('#main');

const keysCal = ['sin', 'cos', '(',')', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '=', 0, 'DEL', '/'];
let result = '';
let reset = 0;


const keyClick = (event) => {
    const outputCal = document.querySelector('.screenCal');
    let keyValue;
    if (reset == 1) {
        outputCal.textContent = "";
    }
    reset = 0;

    if (typeof (event.key) == 'undefined') {
        keyValue = event.target.textContent;
    }
    else {
        keyValue = event.key;
    }

    if (keyValue == 'DEL' || keyValue == 'Escape') {
        outputCal.textContent = "";
        result = "";
    }
    else if (keyValue == '=' || keyValue == 'Enter') {
        resultCal();
    }
    else if (keyValue == 'sin' || keyValue == 'cos') {
        result += 'Math.' + keyValue;
        outputCal.textContent += keyValue;
    }
    else {
        result += keyValue;
        outputCal.textContent += keyValue;
    }
}

const resultCal = () => {
    console.log(result)
    const outputCal = document.querySelector('.screenCal');
    const historyOutput = document.querySelector('.history');

    const resultF = Math.round(stringToformula(result)*100)/100;

    historyOutput.innerHTML += outputCal.textContent;
    historyOutput.innerHTML += ' = ' + resultF;
    historyOutput.innerHTML += ' <br>';

    outputCal.textContent = resultF;
    result = "";
    reset = 1;
}

const newCalculator = () => {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Calculator";
    main.append(title);

    const historyOutput = document.createElement('div');
    historyOutput.classList.add('history');
    main.append(historyOutput);

    const screenCal = document.createElement('output');
    screenCal.classList.add('screenCal');
    screenCal.textContent = "";
    main.append(screenCal);

    for (let i = 0; i < 5; i++) {
        const lineCal = document.createElement('div');
        lineCal.classList.add('line');
        main.append(lineCal);
        for (let j = 0; j < 4; j++) {
            const keyCal = document.createElement('div');
            keyCal.classList.add('keyCal');
            keyCal.textContent = keysCal[(i * 4) + j];
            lineCal.append(keyCal);

            keyCal.addEventListener('click', keyClick)
        }
    }

}

document.body.addEventListener('keyup', keyClick);

newCalculator();

console.log(stringToformula('Math.cos(Math.PI)'));