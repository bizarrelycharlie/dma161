var changingText400DIV;
var changeText400count = 0;

function setup() {
    changingText400DIV = select("#attempting");
    changingText400DIV.mousePressed(showButtons400);
}

function draw() {
    
}

// function changeText400() {
//     changeText400count +=1;
//     if (changeText400count == 1){
//         // changingText400DIV.html("");
//         showButtons400();
//     }
// }

function showButtons400() {
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