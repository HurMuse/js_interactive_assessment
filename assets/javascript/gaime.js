/*let count = 0;*/
const shotstaken1 = document.querySelector("#teamone-numshots");
const shootButton1 = document.querySelector("#teamone-shoot-button");

shootButton1.addEventListener("click", function () {
  var audio = new Audio("./assets/sound effects/cheering1.mp3");
  audio.play();

  let newCounterValue = Number(shotstaken1.innerHTML) + 1;
  shotstaken1.innerHTML = newCounterValue;

  let random1 = Math.floor(Math.random() * 10 + 1);

  const goal1 = document.querySelector("#teamone-numgoals");
  let goalCounterValue1 = Number(goal1.innerHTML) + 1;

  if (random1 == 3) {
    goal1.innerHTML = goalCounterValue1;
  }
  /*console.log(random1);*/
});

const shotstaken2 = document.querySelector("#teamtwo-numshots");
const shootButton2 = document.querySelector("#teamtwo-shoot-button");

shootButton2.addEventListener("click", function () {
  var audio = new Audio("./assets/sound effects/crowdboo.mp3");
  audio.play();

  let newCounterValue = Number(shotstaken2.innerHTML) + 1;
  shotstaken2.innerHTML = newCounterValue;

  let random2 = Math.floor(Math.random() * 10 + 1);

  const goal2 = document.querySelector("#teamtwo-numgoals");
  let goalCounterValue2 = Number(goal2.innerHTML) + 1;

  if (random2 == 3) {
    goal2.innerHTML = goalCounterValue2;

    /*console.log(random2);*/
  }
});

const resets = document.querySelector("#num-resets");
const resetAllButton = document.querySelector("#reset-button");
let count = 0;
const winningTeam = document.querySelector("#winner");
let winning1 = "Team Javascript!";
let winning2 = "Team CSS!";

resetAllButton.addEventListener("click", function () {
  let newCounterValue = Number(resets.innerHTML) + 1;
  resets.innerHTML = newCounterValue;

  const goal2 = document.querySelector("#teamtwo-numgoals");
  const goal1 = document.querySelector("#teamone-numgoals");
  if (goal1.innerHTML > goal2.innerHTML) winningTeam.innerHTML = winning1;
  else winningTeam.innerHTML = winning2;

  console.log(winner);

  const shotstaken1 = document.querySelector("#teamone-numshots");
  shotstaken1.innerHTML = count;

  /*const goal1 = document.querySelector("#teamone-numgoals");*/
  goal1.innerHTML = count;

  const shotstaken2 = document.querySelector("#teamtwo-numshots");
  shotstaken2.innerHTML = count;

  /*const goal2 = document.querySelector("#teamtwo-numgoals");*/
  goal2.innerHTML = count;
});
