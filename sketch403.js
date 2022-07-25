var changingText403DIV;
var changeText403count = 0;

function setup() {
    changingText403DIV = select("#insideBus");
    changingText403DIV.mousePressed(changeText403);
}

function draw() {
    
}

function changeText403() {
    changeText403count +=1;
    if (changeText403count == 1){
        changingText403DIV.html("''See, I knew all along,'' says the clown behind you.");
    } if (changeText403count == 2){
        changingText403DIV.html("You want nothing more than to escape this carnival car from hell");
    } if (changeText403count == 3){
        changingText403DIV.html("until you notice someone who isn't a clown, in the back of the bus.")
    } if (changeText403count == 4){
        window.open("page404.html", "_self");
    }
}
