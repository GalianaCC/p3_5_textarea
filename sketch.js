var textarea = document.getElementById("text_area");
var fontGap;
function preload() {
  fontGap = loadFont("font/NeutralStd-Regular.otf");
}
function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  background(220);
  textFont(fontGap);
  textSize(40);
  /(/estil del text 
    textAlign(RIGHT):
  )
  text(textarea.value, 20, 30);
}