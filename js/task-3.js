'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

console.log(outputName.textContent);

inputName.addEventListener("input", (event) => {

    if (inputName.textContent.trim() === '') {
        outputName.textContent = event.target.value.trim();
    }
    else {
        outputName.textContent = 'Anonymous';
    }
})
