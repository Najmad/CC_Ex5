var backgroundpic; //variable for background
var poem; //variable for poem
var font; //variable for font
var poemarray;
//var x = 1;
var y = 1;
var raindrop;
var storm;



function preload() {
  backgroundpic =  loadImage("images/background.jpg"); //load background pic
  poem = loadStrings("text/rain.txt"); //load poem
  font = loadFont("fonts/star.ttf"); //load font
  raindrop = loadImage("images/raindrop.png");
  storm = loadImage("images/storm.jpg");
  
}

function setup() {
  createCanvas(700, 500);
  
  textFont(font);
  console.log(poem);
  //console.log(poemarray);
  frameRate(10); //slows down frame rate
  //poemarray = poem.slice(0, 1); // portion of the poem i want to display
  
}

function draw() {
  background(backgroundpic, 0, 0);
  text(poem, 60, y, 600, 500);
  textSize(20);
  textLeading(50);
  fill(255 + cos(frameCount*0.1) * 255); //makes text blink
  
  //x += 1;
  y += 1;
  
  image(raindrop, mouseX, mouseY, 10, 20); //image of a raindrop follows cursor
  
  if (mouseIsPressed)
  background(storm, 0, 0); //loads different background image if mouse is pressed
  
  
}