// state
let counter = 0;
let isRunning = false;


// initial actions
update();

document.getElementById('plus').onclick = () => {
  if(isRunning) {
    counter++;
  }

  update();
};

document.getElementById('start').onclick = () => {
  isRunning = true;
  counter =  0;
  setTimeout(() => {
    isRunning = false;
    update();
    alert(`Your result ${counter}`);
  },10000);

  update();
};


// update functions
function update(){
  document.getElementById('page').style.backgroundColor = isRunning ? '#81ecec' : 'white';
  document.getElementById('counter').innerText = counter;
}
