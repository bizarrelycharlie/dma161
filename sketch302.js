var changingText302DIV;
var actionCounter = 0;
var backgroundVisible = false;
var oneMoreClick = 0;
var earphones;
var turnCounter = 0;
let turnMaximum = 9;

function setup() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    earphones = urlParams.get('earphones')
    if (earphones == null) {
        earphones = false;
    }

    changingText302DIV = select("#takeOffRunning");
    changingText302DIV.mousePressed(showRunButton1);
}

function mousePressed(){
    if (actionCounter > turnMaximum) {
        window.open("page303.html", "_self");
    }
}

function draw() {
    // console.log('backgroundVisible = ' + backgroundVisible);
    // console.log('earphones = ' + earphones);
    console.log("turnCounter = " + turnCounter)
}

function showRunButton1() {
    let black = color(51, 51, 51);
    let white = color(255);
    let yButton = 650
    let xButton = windowWidth/2;

    button1 = createButton("Run");
    button1.position(xButton, yButton);
    button1.style('background-color', black);
    button1.style('color', white);

    button1.mousePressed(removeText302);
}

function removeText302() {

    changingText302DIV.html("");
        console.log('button1.mousePressed(removeText302);');

    button1.mousePressed(removeButton1);
        console.log('button1.mousePressed(removeButton1);');
}

function removeButton1() {

    spawnButton2();
         console.log('button1.mousePressed(spawnButton2);');

    button1.remove();
         console.log('button1.remove();');
}

function spawnButton2() {

    let black = color(51, 51, 51);
    let white = color(255);
    let yButton = random(0, windowHeight);
    let xButton = random(0, windowHeight);

    button2 = createButton("Run");
    button2.position(xButton, yButton);
    button2.style('background-color', black);
    button2.style('color', white);

    button2.mousePressed(removeButton2);
}

function removeButton2() {
    spawnButtonsRandom();
    button2.remove();
}

function spawnButtonsRandom() {

    actionCounter += 1;
    console.log('actionCounter = ' + actionCounter);

    buttonA();

    if (actionCounter > turnMaximum-1 && turnCounter < 3) {
        buttonX();
    }

    let buttonItems = ['B', 'L', 'D', 'P', 'S']; 
    let buttonToSpawn = random(buttonItems);
    if (buttonToSpawn == 'B') {
        buttonB();
    } else if (buttonToSpawn == 'D') {
        buttonD(); 
    } else if (buttonToSpawn == 'L') {
        buttonL();
    } else if (buttonToSpawn2 == 'P') {
        buttonP();
    } else if (buttonToSpawn == 'S') {
        buttonS();
    }

    let buttonItems2 = ['P', 'D', 'B', 'R', 'S', 'Z']; 
    let buttonToSpawn2 = random(buttonItems2);
    if (buttonToSpawn2 == 'P') {
        buttonP();
    } else if (buttonToSpawn2 == 'D') {
        buttonD();
    } else if (buttonToSpawn2 == 'B') {
        buttonB();
    } else if (buttonToSpawn2 == 'R') {
        buttonR();
    } else if (buttonToSpawn2 == 'S') {
        buttonS();
    } else if (buttonToSpawn2 == 'Z') {
        buttonZ();
    }
}

// Run
function buttonA() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth);
    let yButton = random(0, windowHeight-100);

    button = createButton("Run");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(spawnButtonsRandom);
}

// Catch breath
function buttonB() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Catch breath");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(breath);
}

function breath() { 
    changingText302DIV.html("You can feel your heart pounding out your chest. But you know you have to keep going.");
    spawnButtonsRandom();
}

// Slow down
function buttonD() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Slow down");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(slow);
}

function slow() { 
    changingText302DIV.html("Your legs are hurting like hell. You don't know how much more you can take.");
    spawnButtonsRandom();
}

// Turn left
function buttonL() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Turn left");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(turnLeft);
}

function turnLeft() {
    turnCounter += 1;
    changingText302DIV.html("You don't know where you're going-- you only care only about losing the clown.");
    spawnButtonsRandom();
}

// Panic
function buttonP() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Panic");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(panic);
}

function panic() { 
    changingText302DIV.html("WHYISTHISHAPPENINGWHYISTHISHAPPENINGWHYISTHISHAPPENINGWHYISTHISHAPPENINGWHYISTHISHAPPENINGWHYISTHISHAPPENINGWHYISTHISHAPPENINGWHYISTHISHAPPENING");
    spawnButtonsRandom();
}

// Turn right
function buttonR() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Turn right");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(turnRight);
}

function turnRight() {
    turnCounter += 1;
    changingText302DIV.html("You recklessly change directions and start to lose any sense of direction.");
    spawnButtonsRandom();
}

// Scream for help
function buttonS() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Scream for help");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(screamForHelp);
}

function screamForHelp() {
        changingText302DIV.html("You scream for help. Nobody responds.");
        spawnButtonsRandom();
}

// Look around
function buttonZ() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Look around");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(nightScene);
}

function lookAround() {
    let picker = random();
    if (picker > .5) {
        nextStop();
    } else {
        nightScene();
    }


}

function nextStop() {
    window.open("page303.html", "_self");
}

function nightScene() {

    changingText302DIV.html("You look around. You don't recognize this street.");
    let imageElement = select("#dummy0");

    imageElement.addClass("fadeInAnimate"); 
    spawnButtonsRandom();
}

function buttonX() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = random(0, windowWidth-100);
    let yButton = random(0, windowHeight-100);

    button = createButton("Turn back");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(hiddenScene);
}

function hiddenScene() {
    window.open("page200.html", "_self");
}