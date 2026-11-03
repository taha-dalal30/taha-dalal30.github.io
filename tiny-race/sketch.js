let racerXs = [30, 50, 30, 31];
let startY = 50;
let yStep = 60;
let finishX = 560;
let racestart = 0;

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}
function draw() {

  background(240);
  if (racestart == 0) {
    line(finishX, 0, finishX, height);
    for (let i = 0; i < racerXs.length; i++) {
      let y = startY + yStep * i;
      if (racerXs[i] < finishX) {
        racerXs[i] += random(1, 3);
      }
      circle(racerXs[i], y, 24);
      textSize(15)
      text("Press r to restart", 50, 30)
    }
  }
  if (keyIsDown("r")) {
    racestart = 1;
  }
  if (racestart == 1) {
    racerXs = [30, 50, 30, 31];
    racestart = 0;
  }
}