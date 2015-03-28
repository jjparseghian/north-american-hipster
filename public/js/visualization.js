
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// // debugger;
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// var render = function () {
//   requestAnimationFrame( render );

//   cube.rotation.x += 0.1;
//   cube.rotation.y += 0.1;

//   renderer.render(scene, camera);
// };

// render();





var context;
var source, sourceJs;
var analyser;
var buffer;
var url = '../sample-stump.mp3';
var array = new Array();

var request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = "arraybuffer";

request.onload = function() {
    context.decodeAudioData(
        request.response,
        function(buffer) {
            if(!buffer) {
                // Error decoding file data
                return;
            }

            sourceJs = context.createJavaScriptNode(2048);
            sourceJs.buffer = buffer;
            sourceJs.connect(context.destination);
            analyser = context.createAnalyser();
            analyser.smoothingTimeConstant = 0.6;
            analyser.fftSize = 512;

            source = context.createBufferSource();
            source.buffer = buffer;

            source.connect(analyser);
            analyser.connect(sourceJs);
            source.connect(context.destination);

            sourceJs.onaudioprocess = function(e) {
                array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
            };

            source.start(0);
        },

        function(error) {
            // Decoding error
        }
    );
};