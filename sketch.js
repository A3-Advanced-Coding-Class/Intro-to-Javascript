int rectX = 200;
int rectY = 200;

color rectColor = color(255, 0, 0);

void setup() {
  size(400,400); 
}

void draw() {
  background(20,140,220);
  
  rectMode(CENTER);
  noStroke();
  fill(rectColor);
  rect(rectX, rectY, 40, 40);
  
  movement();
  restrict();
  colorChange();
}

void movement() {
  if(keyPressed) {
    if(key == 'd') {
      rectX++;
    }
    if(key == 'a') {
      rectX--;
    }
    if(key == 's') {
      rectY++;
    }
    if(key == 'w') {
      rectY--;
    }
  }
}

void restrict() {
  if(rectX > width-20){
    rectX = width-20;
  }
  if(rectX < 20){
    rectX = 20;
  }
  if(rectY > height-20){
    rectY = height-20;
  }
  if(rectY < 20){
    rectY = 20;
  }
}

void colorChange() {
  if(rectX < width/2 && rectX > 0 && rectY < height/2 && rectY > 0) {
    rectColor = color(255, 0, 0);
  }
  if(rectX < width && rectX > width/2 && rectY < height/2 && rectY > 0) {
    rectColor = color(0, 255, 0);
  }
  if(rectX < width/2 && rectX > 0 && rectY < height && rectY > height/2) {
    rectColor = color(236, 26, 237);
  }
  if(rectX < width && rectX > width/2 && rectY < height && rectY > height/2){
    rectColor = color(255, 161, 18); 
  }
}

void rectangles() {
  rectMode(CORNER);
  fill(color(255, 0, 0));
  rect(0,0,width/2, height/2);
  fill(color(0, 255, 0));
  rect(width/2, 0, width/2, height/2);
  fill(color(236, 26, 237));
  rect(0, height/2, width/2, height/2);
  fill(color(255, 161, 18));
  rect(width/2, height/2, width/2, height/2);
}