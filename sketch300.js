var changingText300DIV;
var changeText300count = 0;

function setup() {
    changingText300DIV = select("#muster");
    changingText300DIV.mousePressed(changeText300);
}

function draw() {
    
}

function changeText300() {
    changeText300count +=1;
    if (changeText300count == 1){
        changingText300DIV.html("So you go ahead and take a seat next to the clown.");
        sitBackDown();
    } if (changeText300count == 2) {
        window.open("page203.html", "_self");
    }
}

function sitBackDown() {
    let imageElement = select("#dummy");
    imageElement.addClass("fadeInAnimate");
}