var capture;
	

function setup() {
   canvas = createCanvas(window.innerWidth, window.innerHeight,WEBGL);
   canvas.id('p5Canvas');
   
   capture = createCapture(VIDEO);
   capture.size(window.innerWidth, window.innerWidth*1.77777776);
   capture.hide();

   capture.id('p5video');

   var seriously, // the main object that holds the entire composition
			source, // wrapper object for source video
			chroma, // edge detection effect
			target; // a wrapper object for our target canvas

		// if (Seriously.incompatible('#p5video')) {
		// 	document.body.appendChild(document.createTextNode('Sorry, your browser does not support getUserMedia'));
		// 	document.querySelector('canvas').style.display = 'none';
		// 	return;
		// }

		// construct our seriously object
		seriously = new Seriously();

		// time to get serious
		source = seriously.source('#p5video');
		target = seriously.target('#p5Canvas');
		chroma = seriously.effect('chroma');

		// connect all our nodes in the right order
		chroma.source = source;
		target.source = chroma;
		
		var r = 98/225;
		var g = 175/225;
		var b = 116/225;
        chroma.screen = [r,g,b,1];

		seriously.go();
}

