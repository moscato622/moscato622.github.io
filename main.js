var capture;

function setup() {
   createCanvas(window.innerWidth, window.innerHeight);
   capture = createCapture(VIDEO);
   capture.size(window.innerWidth, window.innerWidth*1.77777776);
   capture.hide();
}

function draw() {
   // background(255);
   image(capture, 0, 0, window.innerWidth, window.innerWidth*1.77777776);
   // filter('INVERT');
}