let x = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    frameRate(20);
}

function draw() {
    background(255);
    noStroke();    

    let hueCircle = map(mouseX, 0, windowWidth, 0, 360);
    let sizeCircle = map(mouseY, 0, windowHeight, 10,100)

    for(let j = 0; j <= windowHeight; j += 50) {
        for (let i = 0; i <= windowWidth; i += 50) {
            fill(random(hueCircle-40,hueCircle), 100, 100);
            circle(i + x, j, random(sizeCircle-50,sizeCircle));
        }
    }
}