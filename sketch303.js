var changingText303DIV;
var changeText303count = 0;

function setup() {
    changingText303DIV = select("#startToSee");
    changingText303DIV.mousePressed(changeText303);
}

function draw() {
    
}

function changeText303() {
    changeText303count +=1;
    if (changeText303count == 1){
        changingText303DIV.html("and notice someone is already there");
    } if (changeText303count == 2) {
        changingText303DIV.html("It’s the clown. And he’s already watching you.");
        clownAlreadyThere();
    } if (changeText303count == 3) {
        showButtons303();
    }
}

function clownAlreadyThere() {
    let imageElement = select("#dummy");
    imageElement.addClass("fadeInAnimate");
}

function showButtons303() {
    let black = color(51, 51, 51);
    let white = color(255);
    let yButton = 820;
    let xButton1 = windowWidth/2 - 100;
    let xButton2 = windowWidth/2 + 28;

    turnback = createButton("Sit next to him");
    turnback.position(xButton1, yButton);
    turnback.style('background-color', black);
    turnback.style('color', white);
    turnback.mousePressed(openPage300);

    runaway = createButton("Avoid");
    runaway.position(xButton2, yButton);
    runaway.style('background-color', black);
    runaway.style('color', white);
    runaway.mousePressed(openPage401);
}

function openPage300() {
    window.open("Page300.html", "_self");
}

function openPage401() {
    window.open("page401.html", "_self");
}