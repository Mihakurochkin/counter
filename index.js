'use strict';

// state
let record = 0;
function setRecord(r){
  record = r;
  window.localStorage.setItem('record', record);
  update();
}

let counter = 0;
function setCounter(c) {
  counter = c;

  if(counter > record) {
    setRecord(counter);
    return;
  }

  update();
}

let isRunning = false;
function setIsRunning(ir) {
  isRunning = ir;
  update();
}


// initial actions
const localStorageRecord = window.localStorage.getItem('record');

if(!localStorageRecord) {
  record = 0;
} else {
  record = localStorageRecord;
}

update();


// set listeners
document.getElementById('plus').onclick = () => {
  if(isRunning) {
    setCounter(counter + 1);
  }
};

document.getElementById('start').onclick = () => {
  if(!isRunning) {
    setIsRunning(true);
    setCounter(0);

    setTimeout(() => {
      setIsRunning(false);
      alert(`Your result ${counter}, your record ${record}`);
    },10000);
  }
};


// update functions
function update(){
  document.getElementById('page').style.backgroundColor = isRunning ? '#55efc4' : '#dfe6e9';
  document.getElementById('counter').innerText = counter;
  document.getElementById('line').style.transition = isRunning ? 'width 10s linear' : 'width 0s linear';
  document.getElementById('line').style.width = isRunning ? '100%' : '0%';
}

