var changingText500DIV;
var changeText500count = 0;

function setup() {
    changingText500DIV = select("#instincts");
    changingText500DIV.mousePressed(changeText500);
}

function draw() {
    
}

function changeText500() {
    changeText500count +=1;
    if (changeText500count == 1){
        changingText500DIV.html("So you start to make your way back to where you came.");
    } if (changeText500count == 2) {
        changingText500DIV.html("When you get there, you discover that the clown is no longer there.");
        showBench();
    } if (changeText500count == 3) {
        changingText500DIV.html("Letting out a huge sigh of relief,");
    } if (changeText500count == 4) {
        changingText500DIV.html("You take a seat");
    } if (changeText500count == 5) {
        changingText500DIV.html("And smile");
        openPage501();
    }
}

function showBench() {
    let imageElement = select("#dummy0");
    imageElement.addClass("fadeInAnimate");
}

function openPage501() {
    window.open("page501.html", "_self");
}
