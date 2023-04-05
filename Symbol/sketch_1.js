function setup() {
    colorMode(HSB);
    createCanvas(400, 400);
  }
  
  function draw() {
    background(185,15,100);
    
    //fish
    fill(185,80,80);
    noStroke();
    ellipse(150, height/2, 200, 100);
    triangle(150+100, height/2, 150+180, height/2 +45, 150+180, height/2 - 45);
    fill(60,100,100);
    circle(150-70, height/2-10, 10);
    
    //sonrisa
    fill(333,100,100);
    arc(60, height/2, 20, 20, 0, PI + QUARTER_PI, CHORD);
    
  }