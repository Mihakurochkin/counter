// state
let counter = 0;
let isRunning = false;


// initial actions
update();

document.getElementById('plus').onclick = () => {
  if(isRunning) {
    counter++;
    update();
  }
};

document.getElementById('start').onclick = () => {
  isRunning = true;
  counter = 0;
  setTimeout(() => {
    isRunning = false;
    alert(`Your result ${counter}`);
  },10000);
};


// update functions
function update(){
  document.getElementById('counter').innerText = counter;
}
