var changingText401DIV;
var changeText401count = 0;

function setup() {
    changingText401DIV = select("#preBus");
    changingText401DIV.mousePressed(changeText401);
}

function draw() {
    
}

function changeText401() {
    changeText401count +=1;
    if (changeText401count == 1){
        changingText401DIV.html("Before you can understand what is happening, you're standing at the entryway to the large vehicle, doors open.");
    } if (changeText401count == 2){
        showButtons401();
    }
}

function showButtons401() {
    let black = color(51, 51, 51);
    let white = color(255);
    let yButton = 775;
    let xButton1 = windowWidth/2 - 100;
    let xButton2 = windowWidth/2;

    answer = createButton("Enter bus");
    answer.position(xButton1, yButton);
    answer.style('background-color', black);
    answer.style('color', white);
    answer.mousePressed(openPage403);

    runaway = createButton("Step back");
    runaway.position(xButton2, yButton);
    runaway.style('background-color', black);
    runaway.style('color', white);
    runaway.mousePressed(openPage402);
}

function openPage403() {
    window.open("page403.html", "_self");
}

function openPage402() {
    window.open("page402.html?earphones=true", "_self");
}