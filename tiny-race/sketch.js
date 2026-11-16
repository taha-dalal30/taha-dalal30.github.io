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
    textSize(15);
    text("Press r to restart", 50, 30);
    line(finishX, 0, finishX, height);
    for (let i = 0; i < racerXs.length; i++) {
      let y = startY + yStep * i;
      if (racerXs[i] < finishX) {
        racerXs[i] += random(-1, 5);

        if(keyCode === 39){
          racerXs[i] += 5
        }
      }
      circle(racerXs[i], y, 24);
    }
  }
  if (keyIsDown("r")) {
    racestart = 1;
  }
  if (racestart == 1) {
    racerXs = [30, 50, 30, 31];
    resizeCanvas(600, startY + yStep * racerXs.length);
    racestart = 0;
  }
  text("racers", 275, 30);
  text(racerXs.length, 250, 30);
}

function keyPressed() {
  if (keyCode === 38) {
    racerXs.push(0);
  } else if (keyCode === 40) {
    racerXs.pop();
  }
  resizeCanvas(600, startY + yStep * racerXs.length);
}
