var changingText404DIV;
var changeText404count = 0;

function setup() {
    changingText404DIV = select("#beginDashing");
    changingText404DIV.mousePressed(changeText404);
}

function changeText404() {
    changeText404count +=1;
    if (changeText404count == 1){
        changingText404DIV.html("You begin dashing towards the helpless child, but never make it to the back of the bus.");
    } if (changeText404count == 2){
        theEnd();
    }
}

function theEnd() {

    changingText404DIV.html("The End.");

    let black = color(51, 51, 51);
    let white = color(255);
    let xButton = windowWidth/2-33;
    let yButton = 775;

    let button;
    button = createButton("Start Over");
    button.position(xButton, yButton);
    button.style('background-color', black);
    button.style('color', white);
    button.mousePressed(replayStory);
}

function replayStory() {
    window.open("index.html", "_self");
}