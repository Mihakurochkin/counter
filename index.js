'use strict';

// state
let showModal = false;
function setShowModal(value) {
  showModal = value;
  update();
}

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
document.getElementById('button-container').onclick = () => {
  if(isRunning) {
    setCounter(counter + 1);
  }
};

document.getElementById('start').onclick = () => {
  if(!isRunning) {
    setIsRunning(true);
    setCounter(0);
    document.getElementById('run-audio').play();

    setTimeout(() => {
      setIsRunning(false);
      setShowModal(true);
      document.getElementById('run-audio').pause();
      document.getElementById('run-audio').currentTime = 0;

      if(record === counter) {
        document.getElementById('win-audio').play();
      }
    },10000);
  }
};

document.getElementById('page').onkeydown = () => {
  setShowModal(false);
};


// update functions
function update(){
  document.getElementById('page').style.backgroundColor = isRunning ? '#55efc4' : '#dfe6e9';
  document.getElementById('counter').innerText = isRunning || showModal ? counter : 0;

  // progress line
  document.getElementById('line').style.transition = isRunning ? 'width 10s linear' : 'width 0s linear';
  document.getElementById('line').style.width = isRunning ? '100%' : '0%';

  // modal
  document.getElementById('modal').style.display = showModal ? 'flex' : 'none';
  document.getElementById('your-score').innerText = counter === record ? `New best score is ${record}!`
    : `Your score is ${counter}`;
  document.getElementById('best-score').innerText = counter !== record ? `best score is ${record}` : '';
  document.getElementById('best-score').style.display = counter !== record ? 'block' : 'none';
}
