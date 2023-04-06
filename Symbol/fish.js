function setup() {
  colorMode(HSB);
  createCanvas(400, 400);
  
}

function draw() {
  background(185,15,100);
  
  //body
  fill(185,80,80);
  noStroke();
  ellipse(3*width/8, height/2, width/2, width/4);
  triangle(5*width/8, height/2, 6*width/8 + width/16, height/2+ height/8, 6*width/8 + width/16, height/2- height/8);
  
  //eye
  fill(60,100,100);
  circle(6*width/32, height/2-height/40, height/40);
  
  //smile
  fill(333,100,100);
  arc(3*width/20, height/2, width/20, width/20, 0, PI + QUARTER_PI, CHORD);
 
  //bubbles
  if (mouseIsPressed){
    fill(185,80,80);
    circle(3*width/32, height/2, height/60);
    circle(3*width/32, height/2 - height/10, height/25);
    circle(2*width/32, height/2 - height/20, height/40);
    circle(4*width/32, height/2 - height/6, height/18);
    circle(7*width/32, height/4 + height/40, height/13);
    //circle(8*width/32, height/4, height/15);
  }
}

  