// var earphones = true;
var changingText102DIV;
var changeText102count = 0;

function setup() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    earphones = urlParams.get('earphones')
    console.log(earphones);
    if (earphones == null) {
        earphones = true;
    }

    changingText102DIV = select("#clownIntroScene");
    changingText102DIV.mousePressed(changeText102);
}

/* page102 */

function removeEarphones() {
    earphones = false;
    window.open("page102.html?earphones=false", "_self")
    }

function draw() {
    console.log("var earphones = " + earphones);
}

function changeText102() {
    changeText102count +=1;
    if (changeText102count == 1){
        changingText102DIV.html("The bus arrives on schedule but, strangely, it passes you and keeps going.");
    } else if (changeText102count == 2){
        clownReveal();
        changingText102DIV.html("You notice a clown has sat beside you.")
    } else if (changeText102count == 3){
        changingText102DIV.html("He asks you if you are lost.")
    } else if (changeText102count == 4){
        showButtons102()
    }
}

function clownReveal() {
    let imageElement = select("#overflow");
    imageElement.addClass("revealAnimate");
}

function showButtons102() {
    let black = color(51, 51, 51);
    let white = color(255);
    let xButton1 = windowWidth/2 - 100;
    let xButton2 = windowWidth/2;
    let yButton = 775;

    let walkaway;
    walkaway = createButton("Walk away");
    walkaway.position(xButton1, yButton);
    walkaway.style('background-color', black);
    walkaway.style('color', white);
    walkaway.mousePressed(openPage301);

    if (earphones == true){
    let pretend = createButton("Pretend you couldn't hear");
    pretend.position(xButton2, yButton);
    pretend.style('background-color', black);
    pretend.style('color', white);
    pretend.mousePressed(openPage201);
    } else {
    let answer = createButton("Answer him");
    answer.position(xButton2, yButton);
    answer.style('background-color', black);
    answer.style('color', white);
    answer.mousePressed(openPage202);
    }
}

function openPage301() {
    window.open("page301.html", "_self");
}

function openPage201() {
    window.open("page201.html", "_self");
}

function openPage202() {
    window.open("page202.html", "_self");
}