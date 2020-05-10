// state
let record = 0;
function setRecord(r){
  record = r;
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
update();

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
  document.getElementById('page').style.backgroundColor = isRunning ? '#81ecec' : 'white';
  document.getElementById('counter').innerText = counter;
}
