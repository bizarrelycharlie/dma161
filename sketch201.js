var changingText201DIV;
var changeText201count = 0;

function setup() {
changingText201DIV = select("#earphonesPretendScene");
changingText201DIV.mousePressed(changeText201);
}

function draw() {
    console.log("changeText201count = " + changeText201count);
}

/* page201 */

function changeText201() {
    changeText201count +=1;
    if (changeText201count == 1){
        changingText201DIV.html("But the question is asked once more-- only this time blaring from your earphones:");
    } else if (changeText201count == 2){
        textGrow();
        clownRepeat();
        changingText201DIV.html("''ARE YOU LOST???''");
    } else if (changeText201count == 3){
        showButtons201();
    }
}

function textGrow() {
    let textElement = select("#earphonesPretendScene");
    textElement.addClass("scaleupAnimate");
}

function clownRepeat() {
    let imageElement = select("#clownzoom");
    imageElement.addClass("shrinkAnimate");
}

function showButtons201() {
    let black = color(51, 51, 51);
    let white = color(255);
    let yButton = 775;
    let xButton1 = windowWidth/2 - 100;
    let xButton2 = windowWidth/2;

    answer = createButton("Answer him");
    answer.position(xButton1, yButton);
    answer.style('background-color', black);
    answer.style('color', white);
    answer.mousePressed(openPage202);

    runaway = createButton("Run away");
    runaway.position(xButton2, yButton);
    runaway.style('background-color', black);
    runaway.style('color', white);
    runaway.mousePressed(openPage302);
}

function openPage202() {
    window.open("page202.html", "_self");
}

function openPage302() {
    window.open("page302.html?earphones=true", "_self");
}