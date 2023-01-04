const changeBodyColor = document.querySelector('body');
const startChange = document.querySelector('button[data-start]');
const stopChange = document.querySelector('button[data-stop]');

startChange.addEventListener('click', getStart);
stopChange.addEventListener('click', getStop);

let intervalId = null;
stopChange.setAttribute('disabled', true);


function getRandomHexColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    changeBodyColor.style.backgroundColor = randomColor;
}

function getStart() {
    startChange.setAttribute('disabled', true);
    stopChange.removeAttribute('disabled');
    intervalId = setInterval(getRandomHexColor, 1000);
}

function getStop() {
    startChange.removeAttribute('disabled');
    stopChange.setAttribute('disabled', true);
    clearInterval(intervalId);
}

















// let intervalId = null;


// function getRandomHexColor() {
//     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     changeBodyColor.style.backgroundColor = randomColor;
    
//     intervalId = setInterval(getRandomHexColor, 1000)
//     startChange.setAttribute('disabled', true);
    // startChange.setAttribute('disabled', true);
    

// intervalId = setInterval(getRandomHexColor, 1000)







// function isActive() {
//     intervalId = setInterval(getRandomHexColor, 1000)
//     startChange.setAttribute('disabled', true);
// }

// function notActive() {
//     clearInterval(intervalId);
//     stopChange.setAttribute('disabled', true);
//     startChange.removeAttribute('disabled');
// }







// function isActive() {
// if (startChange || stopChange) {
//         setAttribute('disabled', true);
// } else {
//     removeAttribute('disabled');
//     }
//
