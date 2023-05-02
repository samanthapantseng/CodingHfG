let changingColor;
let fishShape;
let fishWidth;
let fishHeight;
let showBubbles;

function setup() {
    createCanvas(windowWidth, windowHeight);
    changingColor = "black"
    showBubbles = false;
}

function draw() {
    background("LightCyan");
    fishWidth = windowWidth / 2;
    fishHeight = windowHeight / 2;

    displayFish();
    
    if (showBubbles == true) {
        displayBubbles();
    }

    if (fishShape == "Box" && mouseX > fishWidth / 8 && mouseY > fishHeight / 4 
    && mouseX < fishWidth / 8 + 4 * fishWidth / 8 && mouseY < fishHeight / 4 + fishHeight / 2 ) {
        displayBubbles();
    }

    // if (fishShape == "Bubble" && Math.sqrt((mouseX - 3 * fishWidth / 8)^2 + (mouseY - fishHeight / 2)^2) < fishWidth / 32) {
    //     displayBubbles();
    // }

    

}

function displayFish() {
    if (fishShape == null) {
        return;
    }

    fill(changingColor);
    noStroke();

    if (fishShape == "Box") {
        rect(fishWidth / 8, fishHeight / 4, 4 * fishWidth / 8, fishHeight / 2);
    }
    if (fishShape == "Bubble") {
        circle(3 * fishWidth / 8, fishHeight / 2, fishWidth / 2);
    }
    if (fishShape == "Long") {
        ellipse(3 * fishWidth / 8, fishHeight / 2, fishWidth / 2, fishWidth / 4);
    }

    //tail
    triangle(5 * fishWidth / 8, fishHeight / 2, 6 * fishWidth / 8 + fishWidth / 16, fishHeight / 2 + fishHeight / 8,
        6 * fishWidth / 8 + fishWidth / 16, fishHeight / 2 - fishHeight / 8);

    //eye
    fill("LightCyan");
    circle(6 * fishWidth / 32, fishHeight / 2 - fishHeight / 40, fishHeight / 36);

    //smile
    fill("LightCyan");
    arc(3 * fishWidth / 20, fishHeight / 2, fishWidth / 20, fishWidth / 20, 0, PI + QUARTER_PI, CHORD);
}

function changeColor(newColor) {
    const elem = document.getElementById("changeTitle");
    elem.style.color = newColor;
    changingColor = newColor;
}

function writeColor(newColor) {
    newColor = prompt("Please enter your fish's color.", "");
    const elem = document.getElementById("changeTitle");
    elem.style.color = newColor;
    changingColor = newColor;
}

function changeShape(newShape) {
    fishShape = newShape;
}

function stateBubbles() {
    showBubbles = !showBubbles; 
}

function displayBubbles() {
    //bubbles
    fill("black");
    circle(3 * fishWidth / 32, fishHeight / 2, fishHeight / 60);
    circle(3 * fishWidth / 32, fishHeight / 2 - fishHeight / 10, fishHeight / 25);
    circle(2 * fishWidth / 32, fishHeight / 2 - fishHeight / 20, fishHeight / 40);
    circle(4 * fishWidth / 32, fishHeight / 2 - fishHeight / 6, fishHeight / 18);
}