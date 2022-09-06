
//Check Data in Browser
if (sessionStorage.getItem("flobbyCustomBackgroundColor") === null) {
  sessionStorage.setItem("flobbyCustomBackgroundColor", "#70c5ce");
  sessionStorage.setItem("flobbyCustomBackgroundId", 0);
  sessionStorage.setItem("flobbyCustomForegroundId", 0);

  location.reload();
}



// LOADS IN A ID FOR THE CHOOSEN SPRITE
// 0 = STANDART
let spriteForegroundId = sessionStorage.getItem("flobbyCustomForegroundId");
var spriteBackgroundId = sessionStorage.getItem("flobbyCustomBackgroundId");
 //HEX 70c5ce 09073d
let backgroundColor = sessionStorage.getItem("flobbyCustomBackgroundColor");

let spriteBirdId = 0;

let spritePipesId = 0;
let spritePipesExtensionId = 0;



function setBackgroundcolor(pData = "#70c5ce")
{
  sessionStorage.setItem("flobbyCustomBackgroundColor", pData);
}

function setBackgroundId(pData = 0)
{
  sessionStorage.setItem("flobbyCustomBackgroundId", pData);
  location.reload();
}

function setForegroundId(pData = 0)
{
  sessionStorage.setItem("flobbyCustomForegroundId", pData);
  location.reload();
}


// LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "assets/img/sprite.png";

// LOAD BIRD
const currentBird = new Image();
currentBird.src = "assets/img/bird/"+ spriteBirdId +".png";

// LOAD FOREGROUND
const currentForeground = new Image();
currentForeground.src = "assets/img/foreground/"+ spriteForegroundId + ".png";

// LOAD BACKGROUND
const currentBackground = new Image();
currentBackground.src = "assets/img/background/"+ spriteBackgroundId +".png";

const currentPipes = new Image();
currentPipes.src = "assets/img/pipes/"+ spritePipesId +".png";

const currentPipesExtension = new Image();
currentPipesExtension.src = "assets/img/pipes/pipesextension/"+ spritePipesId +".png";


// LOAD SOUNDS
const SCORE_S = new Audio();
SCORE_S.src = "assets/audio/sfx_point.wav";

const FLAP = new Audio();
FLAP.src = "assets/audio/sfx_flap.wav";

const HIT = new Audio();
HIT.src = "assets/audio/sfx_hit.wav";

const SWOOSHING = new Audio();
SWOOSHING.src = "assets/audio/sfx_swooshing.wav";

const DIE = new Audio();
DIE.src = "assets/audio/sfx_die.wav";
