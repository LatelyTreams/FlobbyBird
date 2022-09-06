const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");
let frames = 0;

const DEGREE = Math.PI/180;

const sprite =  new Image();
sprite.src = "assets/img/sprite.png"


/*
* Current game state
*/

const state = {
  current: 0,
  getReady: 0,
  game: 1,
  dead: 2
  //shop: 3, gets added soon
}

cvs.addEventListener("click", function(evt) {
  switch(state.current) {
    case state.getReady :
      state.current = state.game;
      break;
    case state.game :
      standartBird.flap();
      break;
    case state.dead:
      state.current = state.getReady;
      break;
  }
});


const standartBackground = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: cvs.height - 226,

  draw : function() {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);

    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x * 3 this.w, this.y, this.w, this.h);
  }
}


const pipes = {
  position : [],

  top : {
    sX:
  }
}

const standartForeground = {
  sX: 276,
  sY: 0,
  w: 224,
  h: 112,
  x: 0,
  y: cvs.height - 112,

  dx: 2,


  draw : function() {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);

    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);

  },

  update : function() {
    if(state.current == state.game) {
      this.x = (this.x - this.dx)%(this.w/2);
    }
  }
}

const standartBird = {
  animation : [
    { sX: 276, sY: 112},
    { sX: 276, sY: 139},
    { sX: 276, sY: 164},
    { sX: 276, sY: 139}
  ],
  w: 34,
  h: 26,
  x: 50,
  y: 260,

  frame: 0,
  gravity : 0.25,
  jump : 4.6,
  speed: 0,
  rotation: 0,

  draw : function() {
    let bird = this.animation[this.frame];

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, - this.w/2, - this.h/2, this.w, this.h);

    ctx.restore();
  },

  flap : function() {
    this.speed = - this.jump;
  },



  update : function()
  {
    this.period = state.current == state.getReady ? 10 : 5;
    this.frame += frames%this.period == 0 ? 1 : 0;
    this.frame = this.frame%this.animation.length;

    if(state.current == state.getReady) {
      this.y = 260;
      this.rotation = 0 * DEGREE;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if(this.y + this.h/2 >= cvs.height - standartForeground.h)
      {
        this.y = cvs.height - standartForeground.h - this.h/2;
        if(state.current == state.game) {
          state.current = state.dead;
        }
      }
//58+++
      if(this.speed >= this.jump) {
        this.rotation = 90 * DEGREE;
        this.frame = 1;
      } else {
        this.rotation = -25 * DEGREE;
      }
    }
  }
}


const bird = {



}

const standartGetReady = {
  sX: 0,
  sY: 228,
  w: 173,
  h: 152,
  x: cvs.width/2 - 173/2,
  y: 180,

  draw : function() {
    if(state.current == state.getReady) {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }

  }

}

const storeIcon = {
  sX: 0,
  sY: 228,
  w: 173,
  h: 152,
  x: cvs.width/2 - 173/2,
  y: 180,

  draw : function() {
    if(state.current == state.getReady) {
        ctx.drawImage(s, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }

  }

}



const standartGameOver = {
  sX: 175,
  sY: 228,
  w: 225,
  h: 202,
  x: cvs.width/2 - 225/2,
  y: 180,

  draw : function() {
    if(state.current == state.dead) {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
  }

}



function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  standartBackground.draw();
  standartForeground.draw();
  standartBird.draw();
  standartGetReady.draw();
  standartGameOver.draw();
}

function loop() {
  update();
  draw();

  frames++;
  requestAnimationFrame(loop);

  document.title = "Frames: " + frames;
}
loop();

function update() {
  standartBird.update();
  standartForeground.update();
}
