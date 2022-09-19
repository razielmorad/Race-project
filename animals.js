const dogBox = document.getElementById("dog-box");
const horseBox = document.getElementById("horse-box");
const duckBox = document.getElementById("duck-box");
const chickBox = document.getElementById("chick-box");
const resetBtn = document.getElementById("reset-button");
const randomBtn = document.getElementById("choose-random");
const horseSound = new Audio("./media/horse.wav");
const dogSound = new Audio("./media/dog.wav");
const duckSound = new Audio("./media/duck.mp3");
const chickSound = new Audio("./media/chick.wav");

const runners = [
  {
    name: "dog",
    id: dogBox,
    voice: dogSound,
    img: "dog.gif",
    step: 50,
    position: 0,
  },
  {
    name: "horse",
    id: horseBox,
    voice: horseSound,
    img: "horse.gif",
    step: 70,
    position: 0,
  },
  {
    name: "duck",
    id: duckBox,
    voice: duckSound,
    img: "duck.gif",
    step: 40,
    position: 0,
  },
  {
    name: "chick",
    id: chickBox,
    voice: chickSound,
    img: "chick.gif",
    step: 30,
    position: 0,
  },
];

let x;

resetBtn.addEventListener("click", function () {
  setToStart();
  clearTimeout(mySetTimeout);
  clearTimeout(mySetTimeout2);
  clearTimeout(mySetTimeout3);
  clearTimeout(mySetTimeout4);
  clearBorder();
});

let myInterval;

randomBtn.addEventListener("click", function () {
  setBorder();
  myInterval = setInterval(function () {
    // console.log(window.innerWidth);
    for (let runner of runners)
      if (parseInt(runner.position) >= window.innerWidth - 150) {
        clearInterval(myInterval);
        clearTimeout(mySetTimeout);
        clearTimeout(mySetTimeout2);
        clearTimeout(mySetTimeout3);
        clearTimeout(mySetTimeout4);
        x = null;
        alert(`${runner.name} wins !!!!`);
      }
    chooseRandomPlayer();
    //  console.log(parseInt(window.innerWidth - 254));
  }, 500);
});

function renderPosition() {
  dogBox.style.left = runners[0].position + "px";
  horseBox.style.left = runners[0].position + "px";
  duckBox.style.left = runners[0].position + "px";
  chickBox.style.left = runners[0].position + "px";
}

function setToStart() {
  runners[0].position = 0;
  runners[1].position = 0;
  runners[2].position = 0;
  runners[3].position = 0;
  x = 1;
  renderPosition();
  clearInterval(myInterval);
  clearTimeout(mySetTimeout);
  clearTimeout(mySetTimeout2);
  clearTimeout(mySetTimeout3);
  clearTimeout(mySetTimeout4);
}
function setBorder() {
  let randomPlayer = getRandomInt(runners.length);
  console.log(randomPlayer);
  runners[randomPlayer].id.style.border = "3px solid black";
}
function chooseRandomPlayer() {
  if (x) {
    let randomPlayer = getRandomInt(runners.length);
    console.log(randomPlayer);
    theChosenPlayer(randomPlayer);
  }
}
//}

function getRandomInt(run) {
  return Math.floor(Math.random() * run);
}
function clearBorder() {
  for (const runner of runners) {
    runner.id.style.border = "";
  }
}
let mySetTimeout;
let mySetTimeout2;
let mySetTimeout3;
let mySetTimeout4;

function theChosenPlayer(randomPlayer) {
  switch (runners[randomPlayer].name) {
    case `dog`:
      mySetTimeout = setTimeout(function () {
        moveLeft(0);
        addSound(0);
      }, 1000);

      console.log("dog");
      break;
    case `horse`:
      mySetTimeout2 = setTimeout(function () {
        moveLeft(1);
        addSound(1);
      }, 1000);
      console.log("horse");
      break;
    case `duck`:
      mySetTimeout3 = setTimeout(
        function () {
          moveLeft(2);
          moveLeft(2);
          addSound(2);
        },

        1000
      );
      console.log("duck");
      break;
    case `chick`:
      mySetTimeout4 = setTimeout(
        function () {
          moveLeft(3);
          moveLeft(3);
          addSound(3);
        },

        1000
      );
      console.log("chick");
      break;
  }
}

let runnerStep;
function moveLeft(index) {
  runners[index].position += runners[index].step;
  runners[index].id.style.left = runners[index].position + "px";
  console.log(runners[index].id.style.left);
  console.log(runners[index].position);
}

function addSound(index) {
  runners[index].voice.play();
}
