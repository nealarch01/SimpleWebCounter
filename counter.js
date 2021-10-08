var count = 0;
var ctrTextElem = document.getElementById("counterDisplay");

function updateCounter() {
    ctrTextElem.innerHTML = count;
}

function increaseCount() {
    if(count === 0) document.getElementById("counterDisplay").style.color = 'green';
    count++;
    updateCounter();
}

function decreaseCount() {
    if(count === 0) document.getElementById("counterDisplay").style.color = 'red';
    count--;
    updateCounter();
}

function resetCount() {
    document.getElementById("counterDisplay").style.color = 'white';
    count = 0;
    updateCounter();
}