var changingText501DIV;
var changeText501count = 0;

function setup() {
    changingText501DIV = select("#andSmile");
    changingText501DIV.mousePressed(changeText501);
}

function draw() {
    
}

function changeText501() {
    changeText501count +=1;
    if (changeText501count == 1){
        changingText501DIV.html("The End.");
        showButton();
    }
}

function showButton() {
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