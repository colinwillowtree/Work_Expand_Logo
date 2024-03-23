var work = [];
var j;
var tj;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function preload() {

  for (i=0; i<16; i++) {
    work[i] = loadImage("data/work/work_" + nf(i, 4) + ".jpg")
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.body.style.overflow = "hidden";
  blendMode(ADD);
  imageMode(CENTER);
  j = 0;
  tj = 0;
}


function draw() {
  clear();
  background(51);

  j = lerp(j, tj, 0.1);
  var im = floor(j);
  
  if (mouseX>width/2) {
    tj= 15;
  } else if(mouseX<width/2){
    tj= 0;
  }

  image(work[im], width/2, height/2, width/2, width/2);
}
