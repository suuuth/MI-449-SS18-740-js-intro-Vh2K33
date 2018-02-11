//these are organized by elements from left to right
var hat = new Audio('Assets/hihat.wav');
var snare = new Audio('Assets/snare.wav');
var kick = new Audio('Assets/kick.wav');
var ride = new Audio('Assets/ride.wav');
var fTom = new Audio('Assets/boom.wav');
var openhat = new Audio('Assets/openhat.wav');
var tink = new Audio('Assets/tink.wav');
var clap = new Audio('Assets/clap.wav');
var tom = new Audio('Assets/tom.wav');

var playHat = document.getElementById('hat');
var playSnare = document.getElementById('snare');
var playCrash1 = document.getElementById('crash1');
var playLeftTom = document.getElementById('lefttom');
var playKick = document.getElementById('kick');
var playRightTom = document.getElementById('righttom');
var playCrash2 = document.getElementById('crash2');
var playFloorTom = document.getElementById('floortom');
var playRide = document.getElementById('ride');


playHat.addEventListener('click', function(){
  hat.play();
});
playHat.addEventListener('mouseenter', function(){
  hat.play();
});

playSnare.addEventListener('click', function(){
  snare.play();
});
playSnare.addEventListener('mouseover', function(){
  snare.play();
});

playCrash1.addEventListener('click', function(){
  tink.play();
});
playCrash1.addEventListener('mouseover', function(){
  tink.play();
});

playLeftTom.addEventListener('click', function(){
  clap.play();
});
playLeftTom.addEventListener('mouseover', function(){
  clap.play();
});

playKick.addEventListener('click', function(){
  kick.play();
});
playKick.addEventListener('mouseover', function(){
  kick.play();
});

playRightTom.addEventListener('click', function(){
  tom.play();
});
playRightTom.addEventListener('mouseover', function(){
  tom.play();
});

playCrash2.addEventListener('click', function(){
  openhat.play();
});
playCrash2.addEventListener('mouseover', function(){
  openhat.play();
});

playFloorTom.addEventListener('click', function(){
  fTom.play();
});
playFloorTom.addEventListener('mouseover', function(){
  fTom.play();
});

playRide.addEventListener('click', function(){
  ride.play();
});
playRide.addEventListener('mouseover', function(){
  ride.play();
});
