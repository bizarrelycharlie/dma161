var spawnText = false;
var changingText301DIV;
var changeText301count = 0;
let img;

function preload() {
  img = loadImage('images/clown-upper-1.png');
}

function setup() {
    createCanvas(windowWidth/2, windowHeight/4);

    changingText301DIV = select("#walkaway");
    changingText301DIV.mousePressed(textAbove);
}

function draw() {
    background(0);
    console.log(spawnText);
    console.log('mouse X = ' + mouseX + "|| mouse Y = " + mouseY);
    if (spawnText == true) {
        let x = map(mouseX, 1046, width-100, -100, -500, true);
        let y = map(mouseY, -440, height, -200, 200, true);
        translate(x, y);
        image(img, 0, height)
    } 
}

function textAbove() {
    let p = createP('But you still feel the clown watching you.');
    p.style('font-size', '18px');
    p.style('color', 'white');
    p.position(windowWidth/2, windowHeight/4);
    p.mousePressed(showButtons301);
    spawnText = true;
    
}

function showButtons301() {
    let black = color(51, 51, 51);
    let white = color(255);
    let yButton = 775;
    let xButton1 = windowWidth/2 - 100;
    let xButton2 = windowWidth/2;

    turnback = createButton("Turn back");
    turnback.position(xButton1, yButton);
    turnback.style('background-color', black);
    turnback.style('color', white);
    turnback.mousePressed(openPage300);

    runaway = createButton("Start running");
    runaway.position(xButton2, yButton);
    runaway.style('background-color', black);
    runaway.style('color', white);
    runaway.mousePressed(openPage302);
}

function openPage300() {
    window.open("page300.html", "_self");
}

function openPage302() {
    window.open("page302.html", "_self");
}