/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var APP_DATA = {
  scenes: [
    {
      id: "0-ss",
      name: "ss",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        }
      ],
      faceSize: 341.5,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [],
      infoHotspots: []
    }
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true
  }
};

  var clicked = false;

(function() {
  var data = APP_DATA;
  var Marzipano = window.Marzipano;

  var panoElement = document.getElementById("pano");
  var viewerOpts = {
    stageType: 'webgl',
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };
  var viewerOpts = { stageType: 'webgl' };
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  var levels = [{ tileSize: 256, size: 256 }, { tileSize: 512, size: 512 }];

  // var levels = APP_DATA.levels;

  var geometry = new Marzipano.CubeGeometry(levels);
  var source = Marzipano.ImageUrlSource.fromString(
    "tiles/0-ss/{z}/{f}/{y}/{x}.jpg"
  );
  var view = new Marzipano.RectilinearView();
  

  //////scene 02
  // Initialize viewer.
 

  ////Initaialize video asset
  var asset = new VideoAsset();

    var video = document.createElement('video');
  video.src = 'http://www.marzipano.net/media/video/mercedes-f1-1280x640.mp4';
  video.crossOrigin = 'anonymous';
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  // Prevent the video from going full screen on iOS.
  video.playsInline = true;
  video.webkitPlaysInline = true;

  //play video and apply it to the source
  video.play();
  asset.setVideo(video);

  //video scene parameters
  var source2 = new Marzipano.SingleAssetSource(asset);
  var geometry2 = new Marzipano.EquirectGeometry([ { width: 1 } ]);
  
  var limiter = Marzipano.RectilinearView.limit.vfov(90*Math.PI/180, 90*Math.PI/180);
  var view2 = new Marzipano.RectilinearView({ fov: Math.PI/2 }, limiter);

  //scene 1
  var scene = viewer.createScene({
    source: source2,
    geometry: geometry2,
    view: view2,
    pinFirstLevel: true
  });

  //scene 2
  var scene2 = viewer.createScene({
    source: source2,
    geometry: geometry2,
    view: view2,
    pinFirstLevel: true
  });

  ////
  
  var element = document.getElementById("spot");
  var position = { yaw: Math.PI / 4, pitch: Math.PI / 8 };
  scene.hotspotContainer().createHotspot(element, position);

  var toScene01Button = document.getElementById("to-scene1");
  var toScene02Button = document.getElementById("to-scene2");

  toScene01Button.addEventListener("mouseup", function() {
   scene.switchTo();
  });

  toScene02Button.addEventListener("mouseup", function() {
  	
    scene2.switchTo();
    
  });
   
  // scene.switchTo({
  //   transitionDuration: 1000
  // });
  scene2.switchTo();
    console.log("Hello world!");


  // var started = false;
// Try to start playback.
  
  // if (started) {
  //   return;
  // }
  // started = true;


  // waitForReadyState(video, video.HAVE_METADATA, 100, function() {
  //   waitForReadyState(video, video.HAVE_ENOUGH_DATA, 100, function() {
  //     asset.setVideo(video);
  //   });
  // });


  
})();




// Wait for an element to reach the given readyState by polling.
// The HTML5 video element exposes a `readystatechange` event that could be
// listened for instead, but it seems to be unreliable on some browsers.
// function waitForReadyState(element, readyState, interval, done) {
//   var timer = setInterval(function() {
//     if (element.readyState >= readyState) {
//       clearInterval(timer);
//       done(null, true);
//     }
//   }, interval);
// }
//}