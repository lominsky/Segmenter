var button;
var input;
var radius = 300;
var label;

function setup() {
  createCanvas(windowWidth, windowHeight);

  label = createP('How many segments?');
  label.position(25, 25);

  input = createInput('6');
  input.position(25, 60);
  
  button = createButton('Generate');
  button.position(25, 85);
  button.mousePressed(generate);
}

function generate() {
  var numSegs = parseInt(input.value());
  if(!isNaN(numSegs) && numSegs > 1)
    display(numSegs);
}

function display(num) {
  ellipse(width/2, height/2, radius*2, radius*2);
  for(var i = 0; i < num; i++) {
    line(width/2, height/2, width/2+radius*sin(radians(360*i/num)), height/2+radius*cos(radians(360*i/num)))
  }
}