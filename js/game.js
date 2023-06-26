let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log('My character ist', world.character)
}

window.addEventListener("keydown", (e) => {
  if(e.keyCode == 39){
    keyboard.Right = true;
  }
  if(e.keyCode == 37){
    keyboard.LEFT = true;
  }
  if(e.keyCode == 38){
    keyboard.UP = true;
  }
  if(e.keyCode == 40){
    keyboard.DOWN = true;
  }
  if(e.keyCode == 32){
    keyboard.SPACE = true;
  }
  
});


window.addEventListener("keyup", (e) => {
  if(e.keyCode == 39){
    keyboard.Right = false;
  }
  if(e.keyCode == 37){
    keyboard.LEFT = false;
  }
  if(e.keyCode == 38){
    keyboard.UP = false;
  }
  if(e.keyCode == 40){
    keyboard.DOWN = false;
  }
  if(e.keyCode == 32){
    keyboard.SPACE = false;
  }
});