$(document).ready(function(){
	$('#messageInput').on('submit', function(){
	var lastInput = $('#messagesDiv').children().last()

	console.log(strToFreqs(lastInput));
		
	})

	// $('#messageInput').on('submit', function(){
	// 	console.log("hello");
		// console.log(strToFreqs($('#messageInput').val()));

	console.log("hello friends");


// var synth = T("OscGen", {wave:"saw", mul:0.25}).play();

// var keydict = T("ndict.key");
// var midicps = T("midicps");
// T("keyboard").on("keydown", function(e) {
//   var midi = keydict.at(e.keyCode);
//   if (midi) {
//     var freq = midicps.at(midi);
//     synth.noteOnWithFreq(freq, 100);
//   }
// }).on("keyup", function(e) {
//   var midi = keydict.at(e.keyCode);
//   if (midi) {
//     synth.noteOff(midi, 100);
//   }
// }).start();

var strToFreqs = function(string){
	return mapCharToFreq(mapStringToChar(string));
}


var mapStringToChar = function(string){
	var arr = [];
	for (var i = 0; i < string.length; i++) {
		arr.push(string.toUpperCase().charCodeAt(i));
	}
	return arr;
}

var mapCharToFreq = function(arr){
	var codeArray = [];
	for (var i = 0; i < arr.length; i++){
		codeArray.push(charToFrequency(arr[i]));
	}

	return codeArray;
}
// console.log(mapStringToFreq("hello friends"));

function charToFrequency(char) {
	return (char - 31) * 10 + 200;
}



});




// var letterString = "abcdefghijklmnopqrstuvwxyz"; 

// var alphaArray = letterString.split('')
// var letterDict = {}

// var mapLetters =  function(){
// 	for(var i = 0; i < letterString.length; i++){
// 	letterDict.push(i + ":" + Math.floor(Math.random(10)* 100));

// 	}
// 	return letterDict;
// };




