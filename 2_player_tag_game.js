// PLEASE READ

//THIS IS A TWO PLAYER TAG GAME. ONE PLAYER CONTROLS USING WASD AND THE OTHER PLAYER USES ARROW KEYS. TO SPRINT RAPIDLY PRESS SPRINT KEY FOR PLAYER ONE PRESS "q" FOR PLAYER TWO USE "/"

//IF THE SCREEN TURNS RED THE PLAYER HAS BEEN TAGGED. SWITCH OFF EVERY TIME SOMEONE GETS TAGGED

function setup() {
  createCanvas(900, 600);
}

let P1xpos = 100;
let P1ypos = 410;
let P1sprintspeed = 2;

let P2xpos = 770;
let P2ypos = 170;
let P2sprintspeed = 2;
let bgxN = 36;
let bgxStart = 0;
let bgxStep = 50;

let bgyN = 24;
let bgyStart = 0;
let bgyStep = 25;

let gamestarted = 0;

function draw() {
  if (gamestarted == 0) {
    fill("#cfcfcf");
    rect(0, 0, 900, 600);
    fill("black");
    textSize(40);
    text("THIS IS A TWO PLAYER TAG GAME.", 100, 100);
    textSize(20);
    text(" Player 1 uses WASD", 100, 175);
    text(" Player 2 uses arrow keys", 100, 225);
    text("When the screen turns red the player has been tagged", 100, 300);
    text("switch off every time a player gets tagged", 100, 325);
    text("pls restart when done, thank you!", 100, 375);
    textSize(25);
    fill("blue");
    text(
      "if your just one player, control player 1 player 2 with both your hands!",
      55,
      420
    );

    text("if movement glitches try restarting", 300, 475);
    
    fill("red");
    text("press anywhere to continue", 300, 550);

    P1xpos = 100;
    P1ypos = 410;

    P2xpos = 770;
    P2ypos = 170;
    if (mouseIsPressed === true) {
      gamestarted = 1;
    }
  }

  if (gamestarted == 1) {
    background(220);

    let playerDistance = dist(P1xpos, P1ypos, P2xpos, P2ypos);
    // checkerboard
    if (playerDistance > 65 && playerDistance > 0) {
      fill("#cfcfcf");
    } else {
      fill("#ffb3b3");
      gamestarted = 0;
    }

    noStroke();

    for (let o = 0; o < bgyN; o++) {
      let bgy = bgyStart + bgyStep * o;

      let rowshift = 0;
      if (o % 2 == 1) {
        rowshift = 25;
        // rowshift = 25 because the width of one box is 25 px
      }

      for (let i = 0; i < bgxN; i++) {
        let bgx = bgxStart + bgxStep * i + rowshift;

        square(bgx, bgy, 25);
      }
    }

    // Player  1 Movement
    if (keyIsDown("w")) {
      if (!isWall(P1xpos, P1ypos - 30 - P1sprintspeed))
        P1ypos = P1ypos - 5 - P1sprintspeed;
    }
    // "or" used to fix caps lock bug
    if (keyIsDown("s")) {
      if (!isWall(P1xpos, P1ypos + 30 + P1sprintspeed))
        P1ypos = P1ypos + 5 + P1sprintspeed;
    }

    if (keyIsDown("a")) {
      if (!isWall(P1xpos - 30 - P1sprintspeed, P1ypos))
        P1xpos = P1xpos - 5 - P1sprintspeed;
    }

    if (keyIsDown("d")) {
      if (!isWall(P1xpos + 30 + P1sprintspeed, P1ypos))
        P1xpos = P1xpos + 5 + P1sprintspeed;
    }

    // Player 2 Movement
    if (keyIsDown(UP_ARROW)) {
      if (!isWall(P2xpos, P2ypos - 30 - P2sprintspeed))
        P2ypos = P2ypos - 5 - P2sprintspeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
      if (!isWall(P2xpos, P2ypos + 30 + P2sprintspeed))
        P2ypos = P2ypos + 5 + P2sprintspeed;
    }

    if (keyIsDown(LEFT_ARROW)) {
      if (!isWall(P2xpos - 30 - P2sprintspeed, P2ypos))
        P2xpos = P2xpos - 5 - P2sprintspeed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if (!isWall(P2xpos + 30 + P2sprintspeed, P2ypos))
        P2xpos = P2xpos + 5 + P2sprintspeed;
    }

    // Map border
    P1xpos = constrain(P1xpos, 30, 870);
    P1ypos = constrain(P1ypos, 30, 570);

    // the number 30 is used as it is the circle radius. 870 and 570 are used as it is the length of the map subtracted by the radius of the circle
    P2xpos = constrain(P2xpos, 30, 870);
    P2ypos = constrain(P2ypos, 30, 570);

    // draw players
    fill("#ff4d4d");
    circle(P2xpos, P2ypos, 60);

    fill("#0040ff");
    circle(P1xpos, P1ypos, 60);

    // draw walls
    fill("#d4964e");
    rect(150, 125, 25, 150);
    rect(75, 250, 75, 25);

    rect(700, 300, 25, 150);
    rect(725, 425, 75, 25);

    rect(250, 425, 150, 25);

    rect(475, 125, 150, 25);
  }
}

// Walls coordinates
function isWall(x, y) {
  if (x >= 150 && x <= 175 && y >= 125 && y <= 275) return true;
  if (x >= 75 && x <= 150 && y >= 250 && y <= 275) return true;
  if (x >= 700 && x <= 725 && y >= 300 && y <= 450) return true;
  if (x >= 725 && x <= 800 && y >= 425 && y <= 450) return true;
  if (x >= 250 && x <= 400 && y >= 425 && y <= 450) return true;
  if (x >= 475 && x <= 625 && y >= 125 && y <= 150) return true;

  return false;
}

//Sprint (dash)
function keyPressed() {
  if (key === "q" || key === "Q") {
    P1sprintspeed = +P1sprintspeed + 5;
  } else {
    P1sprintspeed = 0;
  }

  if (key === "/") {
    P2sprintspeed = +P2sprintspeed + 5;
  } else {
    P2sprintspeed = 0;
  }
}
// possibly make this a dash or smth in the future
