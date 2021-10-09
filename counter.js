var count = 0;
var ctrTextElem = document.getElementById("counterDisplay");
const timeDelayMS = 500; // 0.75 seconds

function updateCounter(num, event) {
    if(count === 10000 || count === -10000) return;
    count += num;
    switch(count) {
        case(0):
            document.getElementById("counterDisplay").style.color = 'white';
            break;
        case(1):
            document.getElementById("counterDisplay").style.color = 'green';
            break;
        case(-1):
            document.getElementById("counterDisplay").style.color = 'red';
            break;
    }
    ctrTextElem.innerHTML = count;
    event.preventDefault();
}



function increaseCount() {
    updateCounter(1);
}

function decreaseCount() {
    updateCounter(-1);
}

function resetCount() {
    count = 0;
    updateCounter(0);
}